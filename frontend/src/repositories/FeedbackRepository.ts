import { prisma } from "@/lib/prisma";

export class FeedbackRepository {
  async createFeedback(data: {
    transcript: string;
    sentiment: string;
    emotion: string;
    satisfactionScore: number;
    urgencyLevel: string;
    followUpRequired: boolean;
    summary: string;
  }) {
    return prisma.feedback.create({
      data,
    });
  }

  async getAllFeedback() {
    return prisma.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  async getFeedbackById(id: number) {
    return prisma.feedback.findUnique({
      where: {
        id,
      },
    });
  }
async deleteFeedback(id: number) {
  return prisma.feedback.delete({
    where: {
      id,
    },
  });
}
}
