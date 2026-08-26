import { NextResponse } from "next/server";
import { FeedbackController } from "@/controllers/FeedbackController";

export async function GET() {
  try {
    const result = await FeedbackController.getAllFeedback();

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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result =
      await FeedbackController.analyzeFeedback(body);

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