import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          error: "Audio file is required",
        },
        { status: 400 }
      );
    }

    const whisperFormData = new FormData();

    whisperFormData.append("file", file, file.name);

    const response = await fetch(
      "http://127.0.0.1:8000/transcribe",
      {
        method: "POST",
        body: whisperFormData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          success: false,
          error:
            errorText || "Whisper transcription failed",
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Transcription error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to connect to Whisper",
      },
      { status: 500 }
    );
  }
}