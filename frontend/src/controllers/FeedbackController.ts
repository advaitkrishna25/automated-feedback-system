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

  static async getAllFeedback() {
    const feedback =
      await FeedbackService.getAllFeedback();

    return {
      success: true,
      feedback,
    };
  }
  static async getFeedbackById(id: number) {
    const feedback =
      await FeedbackService.getFeedbackById(id);

    return {
      success: true,
      feedback,
    };
  }
static async deleteFeedback(id: number) {
  const feedback =
    await FeedbackService.deleteFeedback(id);

  return {
    success: true,
    feedback,
  };
}
}