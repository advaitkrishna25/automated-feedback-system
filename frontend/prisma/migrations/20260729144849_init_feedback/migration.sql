-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "transcript" TEXT NOT NULL,
    "sentiment" TEXT NOT NULL,
    "emotion" TEXT NOT NULL,
    "satisfactionScore" INTEGER NOT NULL,
    "urgencyLevel" TEXT NOT NULL,
    "followUpRequired" BOOLEAN NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
