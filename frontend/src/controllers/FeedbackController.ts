export class FeedbackController {
  static async analyzeFeedback(body: any) {
    return {
      success: true,
      message: "Feedback received successfully",
      receivedData: body,
    };
  }
}