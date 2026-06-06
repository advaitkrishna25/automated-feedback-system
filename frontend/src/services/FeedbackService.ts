import axios from "axios";

export class FeedbackService {
  static async analyzeTranscript(transcript: string) {
    try {
      const prompt = `
Analyze the following patient feedback.

Return ONLY valid JSON.

Patient Feedback:
"${transcript}"

Required JSON Format:
{
  "sentiment": "",
  "emotion": "",
  "satisfaction_score": 0,
  "urgency_level": "",
  "follow_up_required": false,
  "summary": ""
}
`;

      const response = await axios.post(
        "http://localhost:11434/api/generate",
        {
          model: "qwen2.5:7b",
          prompt,
          stream: false,
        }
      );

      const rawResponse = response.data.response;

const cleanedResponse = rawResponse
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const parsedResponse = JSON.parse(cleanedResponse);

return parsedResponse;
    } catch (error) {
      console.error(error);

      return {
        error: "Failed to analyze feedback",
      };
    }
  }
}