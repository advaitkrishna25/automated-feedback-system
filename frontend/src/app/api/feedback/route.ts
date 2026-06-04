import { NextResponse } from "next/server";
import { FeedbackController } from "@/controllers/FeedbackController";

export async function GET() {
  return NextResponse.json({
    message: "Feedback API working",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const result = await FeedbackController.analyzeFeedback(body);

  return NextResponse.json(result);
}