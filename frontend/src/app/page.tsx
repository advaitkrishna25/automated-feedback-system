"use client";

import { useEffect, useRef, useState } from "react";

type Feedback = {
  id: number;
  transcript: string;
  sentiment: string;
  emotion: string;
  satisfactionScore: number;
  urgencyLevel: string;
  followUpRequired: boolean;
  summary: string;
  createdAt: string;
};

export default function Home() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState("All");
  const [urgencyFilter, setUrgencyFilter] = useState("All");

  const [transcript, setTranscript] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    async function loadFeedback() {
      try {
        const response = await fetch("/api/feedback");

        if (!response.ok) {
          throw new Error("Failed to load feedback");
        }

        const data = await response.json();
        setFeedback(data.feedback || []);
      } catch (error) {
        console.error(error);
        setError("Unable to load feedback");
      } finally {
        setLoading(false);
      }
    }

    loadFeedback();
  }, []);

  const positiveFeedback = feedback.filter(
    (item) => item.sentiment.toLowerCase() === "positive"
  ).length;

  const averageSatisfaction =
    feedback.length > 0
      ? (
          feedback.reduce(
            (total, item) => total + item.satisfactionScore,
            0
          ) / feedback.length
        ).toFixed(1)
      : "0.0";

  const followUps = feedback.filter(
    (item) => item.followUpRequired
  ).length;

  const filteredFeedback = feedback.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      item.transcript.toLowerCase().includes(searchText) ||
      item.summary.toLowerCase().includes(searchText) ||
      item.emotion.toLowerCase().includes(searchText);

    const matchesSentiment =
      sentimentFilter === "All" ||
      item.sentiment.toLowerCase() ===
        sentimentFilter.toLowerCase();

    const matchesUrgency =
      urgencyFilter === "All" ||
      item.urgencyLevel.toLowerCase() ===
        urgencyFilter.toLowerCase();

    return (
      matchesSearch &&
      matchesSentiment &&
      matchesUrgency
    );
  });

  const startRecording = async () => {
    try {
      setSubmitError("");
      setSubmitSuccess("");

      if (
        typeof window === "undefined" ||
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
      ) {
        setSubmitError(
          "Audio recording is not supported by this browser."
        );
        return;
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      const recorder = new MediaRecorder(stream);

      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach((track) => {
          track.stop();
        });

        const audioBlob = new Blob(
          audioChunksRef.current,
          {
            type: recorder.mimeType || "audio/webm",
          }
        );

        if (audioBlob.size === 0) {
          setSubmitError(
            "No audio was recorded."
          );
          return;
        }

        await transcribeAudio(audioBlob);
      };

      mediaRecorderRef.current = recorder;

      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error(error);

      setSubmitError(
        "Microphone access was denied or unavailable."
      );
    }
  };

  const stopRecording = () => {
    const recorder = mediaRecorderRef.current;

    if (
      recorder &&
      recorder.state !== "inactive"
    ) {
      recorder.stop();
    }

    setRecording(false);
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    setTranscribing(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const formData = new FormData();

      formData.append(
        "file",
        audioBlob,
        "recording.webm"
      );

      const response = await fetch(
        "/api/transcribe",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Transcription failed"
        );
      }

      setTranscript(data.transcript || "");

      setSubmitSuccess(
        "Audio transcribed successfully. Review the transcript and click Analyze Feedback."
      );
    } catch (error) {
      console.error(error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to transcribe the recording."
      );
    } finally {
      setTranscribing(false);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!transcript.trim()) {
      setSubmitError(
        "Please enter feedback or record audio first."
      );
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const response = await fetch(
        "/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            transcript,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Failed to submit feedback"
        );
      }

      setFeedback((current) => [
        data.analysis,
        ...current,
      ]);

      setTranscript("");

      setSubmitSuccess(
        "Feedback analyzed successfully."
      );
    } catch (error) {
      console.error(error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to submit feedback"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this feedback?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `/api/feedback/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Failed to delete feedback"
        );
      }

      setFeedback((current) =>
        current.filter(
          (item) => item.id !== id
        )
      );
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete feedback"
      );
    }
  };

  return (
    <main className="min-h-screen bg-zinc-100 p-6 text-zinc-900">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">
            Patient Feedback Dashboard
          </h1>

          <p className="mt-2 text-zinc-600">
            AI-powered patient feedback analysis
          </p>
        </header>

        {/* Feedback Input */}
        <section className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Analyze Patient Feedback
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Type feedback or record it using your
            microphone.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-5"
          >
            <textarea
              value={transcript}
              onChange={(e) =>
                setTranscript(e.target.value)
              }
              placeholder="Enter patient feedback or record audio..."
              rows={5}
              className="w-full resize-none rounded-lg border border-zinc-300 p-4 outline-none focus:border-zinc-500"
            />

            {/* Recording Controls */}
            <div className="mt-4 flex flex-wrap gap-3">

              {!recording ? (
                <button
                  type="button"
                  onClick={startRecording}
                  disabled={
                    submitting ||
                    transcribing
                  }
                  className="rounded-lg border border-zinc-300 px-5 py-2.5 font-medium transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  🎙️ Record Feedback
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700"
                >
                  ⏹ Stop Recording
                </button>
              )}

              <button
                type="submit"
                disabled={
                  submitting ||
                  recording ||
                  transcribing
                }
                className="rounded-lg bg-black px-5 py-2.5 font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting
                  ? "Analyzing..."
                  : transcribing
                  ? "Transcribing..."
                  : "Analyze Feedback"}
              </button>

            </div>

            {/* Recording Status */}
            {recording && (
              <p className="mt-3 text-sm font-medium text-red-600">
                🔴 Recording... Speak now, then
                click Stop Recording.
              </p>
            )}

            {transcribing && (
              <p className="mt-3 text-sm text-zinc-600">
                Whisper is transcribing your
                recording...
              </p>
            )}

            {submitError && (
              <p className="mt-3 text-sm text-red-600">
                {submitError}
              </p>
            )}

            {submitSuccess && (
              <p className="mt-3 text-sm text-green-600">
                {submitSuccess}
              </p>
            )}
          </form>
        </section>

        {/* Statistics */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-zinc-500">
              Total Feedback
            </p>

            <p className="mt-2 text-3xl font-bold">
              {feedback.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-zinc-500">
              Positive Feedback
            </p>

            <p className="mt-2 text-3xl font-bold">
              {positiveFeedback}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-zinc-500">
              Average Satisfaction
            </p>

            <p className="mt-2 text-3xl font-bold">
              {averageSatisfaction}
              <span className="text-lg font-normal text-zinc-500">
                /5
              </span>
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-zinc-500">
              Follow-ups Required
            </p>

            <p className="mt-2 text-3xl font-bold">
              {followUps}
            </p>
          </div>

        </div>

        {/* Search & Filters */}
        <div className="mb-6 rounded-xl bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">

            <input
              type="text"
              placeholder="Search feedback..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="rounded-lg border border-zinc-300 px-4 py-2 outline-none focus:border-zinc-500"
            />

            <select
              value={sentimentFilter}
              onChange={(e) =>
                setSentimentFilter(e.target.value)
              }
              className="rounded-lg border border-zinc-300 px-4 py-2 outline-none"
            >
              <option value="All">
                All Sentiments
              </option>

              <option value="Positive">
                Positive
              </option>

              <option value="Negative">
                Negative
              </option>

              <option value="Neutral">
                Neutral
              </option>
            </select>

            <select
              value={urgencyFilter}
              onChange={(e) =>
                setUrgencyFilter(e.target.value)
              }
              className="rounded-lg border border-zinc-300 px-4 py-2 outline-none"
            >
              <option value="All">
                All Urgency Levels
              </option>

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>
            </select>

          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-xl bg-white p-6 shadow-sm">
            Loading feedback...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl bg-red-50 p-6 text-red-700">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          feedback.length === 0 && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              No feedback available yet.
            </div>
          )}

        {/* No Results */}
        {!loading &&
          !error &&
          feedback.length > 0 &&
          filteredFeedback.length === 0 && (
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              No feedback matches your search or
              filters.
            </div>
          )}

        {/* Feedback List */}
        {!loading &&
          !error &&
          filteredFeedback.length > 0 && (
            <div className="space-y-4">

              {filteredFeedback.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >

                  {/* Header */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

                    <div>
                      <h2 className="font-semibold">
                        Feedback #{item.id}
                      </h2>

                      <p className="text-sm text-zinc-500">
                        {new Date(
                          item.createdAt
                        ).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                        {item.sentiment}
                      </span>

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                        Score:{" "}
                        {item.satisfactionScore}/5
                      </span>
                    </div>

                  </div>

                  {/* Transcript */}
                  <div className="mb-4">
                    <p className="mb-1 text-xs font-medium uppercase text-zinc-500">
                      Patient Feedback
                    </p>

                    <p className="text-zinc-700">
                      {item.transcript}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="grid gap-3 sm:grid-cols-3">

                    <div className="rounded-lg bg-zinc-50 p-3">
                      <p className="text-xs text-zinc-500">
                        Emotion
                      </p>

                      <p className="font-medium">
                        {item.emotion}
                      </p>
                    </div>

                    <div className="rounded-lg bg-zinc-50 p-3">
                      <p className="text-xs text-zinc-500">
                        Urgency
                      </p>

                      <p className="font-medium">
                        {item.urgencyLevel}
                      </p>
                    </div>

                    <div className="rounded-lg bg-zinc-50 p-3">
                      <p className="text-xs text-zinc-500">
                        Follow-up
                      </p>

                      <p className="font-medium">
                        {item.followUpRequired
                          ? "Required"
                          : "Not required"}
                      </p>
                    </div>

                  </div>

                  {/* Summary */}
                  <div className="mt-4 rounded-lg bg-zinc-50 p-4">
                    <p className="text-xs font-medium uppercase text-zinc-500">
                      AI Summary
                    </p>

                    <p className="mt-1">
                      {item.summary}
                    </p>
                  </div>

                  {/* Delete */}
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                      Delete Feedback
                    </button>
                  </div>

                </div>
              ))}

            </div>
          )}

      </div>
    </main>
  );
}