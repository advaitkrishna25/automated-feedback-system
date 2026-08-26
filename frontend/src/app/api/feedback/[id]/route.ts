import { NextResponse } from "next/server";
import { FeedbackController } from "@/controllers/FeedbackController";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const feedbackId = Number(id);

    if (Number.isNaN(feedbackId)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid feedback ID",
        },
        { status: 400 }
      );
    }

    const result =
      await FeedbackController.getFeedbackById(feedbackId);

    if (!result.feedback) {
      return NextResponse.json(
        {
          success: false,
          error: "Feedback not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }

}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const feedbackId = Number(id);

    if (Number.isNaN(feedbackId)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid feedback ID",
        },
        { status: 400 }
      );
    }

    const result =
      await FeedbackController.deleteFeedback(feedbackId);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Feedback not found",
      },
      { status: 404 }
    );
  }
}