import { FeedbackService } from "@/services/FeedbackService";

export class FeedbackController {
  static async analyzeFeedback(body: any) {
    const transcript = body.transcript;

    const analysis =
      await FeedbackService.analyzeTranscript(transcript);

    return {
      success: true,
      analysis,
    };
  }
}