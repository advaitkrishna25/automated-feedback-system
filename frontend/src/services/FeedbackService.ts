import axios from "axios";
import { FeedbackRepository } from "@/repositories/FeedbackRepository";

export class FeedbackService {
  private static feedbackRepository = new FeedbackRepository();

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
        "http://127.0.0.1:11434/api/generate",
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

      const savedFeedback =
        await this.feedbackRepository.createFeedback({
          transcript,
          sentiment: parsedResponse.sentiment,
          emotion: parsedResponse.emotion,
          satisfactionScore: parsedResponse.satisfaction_score,
          urgencyLevel: parsedResponse.urgency_level,
          followUpRequired: parsedResponse.follow_up_required,
          summary: parsedResponse.summary,
        });

           return savedFeedback;
    } catch (error) {
      console.error("FeedbackService Error:", error);
      throw error;
    }
  }

  static async getAllFeedback() {
    try {
      return await this.feedbackRepository.getAllFeedback();
    } catch (error) {
      console.error("FeedbackService Error:", error);
      throw error;
    }
  }
  static async getFeedbackById(id: number) {
    try {
      return await this.feedbackRepository.getFeedbackById(id);
    } catch (error) {
      console.error("FeedbackService Error:", error);
      throw error;
    }
  }
static async deleteFeedback(id: number) {
  try {
    return await this.feedbackRepository.deleteFeedback(id);
  } catch (error) {
    console.error("FeedbackService Error:", error);
    throw error;
  }
}
}