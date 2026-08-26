# AI-Powered Automated Patient Feedback Calling System

## Overview

The AI-Powered Automated Patient Feedback Calling System is a full-stack healthcare feedback processing platform designed to automate patient feedback collection, voice transcription, AI analysis, structured insight generation, and feedback management.

The system allows feedback to be submitted through text or voice. Voice feedback is transcribed using Whisper and then analyzed locally using Qwen 2.5 7B through Ollama. The resulting structured analysis is stored in PostgreSQL and presented through a dashboard interface.

The project is developed with a strong focus on:

- backend architecture
- AI integration workflows
- speech-to-text processing
- structured data processing
- layered backend design
- local AI inference
- database persistence
- scalable service organization

---

# System Workflow

```text
Patient Feedback
      |
      +-------------------+
      |                   |
      v                   v
Voice Input          Text Input
      |
      v
Audio Recording
      |
      v
Whisper API
      |
      v
Transcript
      |
      +-------------------+
                          |
                          v
                   Next.js API Route
                          |
                          v
                  FeedbackController
                          |
                          v
                   FeedbackService
                          |
                          v
                        Axios
                          |
                          v
                    Ollama API
                          |
                          v
                     Qwen 2.5 7B
                          |
                          v
              JSON Parsing / Cleanup
                          |
                          v
             Response Normalization
                          |
                          v
                Feedback Repository
                          |
                          v
                       Prisma
                          |
                          v
                    PostgreSQL
                          |
                          v
                 Feedback Dashboard
```

---

# Current Architecture

The application follows a layered backend architecture.

```text
Frontend
   |
   v
Next.js API Route
   |
   v
Controller Layer
   |
   v
Service Layer
   |
   +--------------------+
   |                    |
   v                    v
Whisper API          Ollama API
   |                    |
   v                    v
Transcript           Qwen 2.5 7B
                        |
                        v
                 Structured Analysis
                        |
                        +---------+
                                  |
                                  v
                         Repository Layer
                                  |
                                  v
                               Prisma
                                  |
                                  v
                             PostgreSQL
```

The backend separates HTTP handling, application logic, AI orchestration, and database access into independent layers.

This improves:

- maintainability
- separation of concerns
- scalability
- testability
- AI integration flexibility
- backend extensibility

---

# Current Features

## Voice Processing

- Browser-based voice recording
- Audio upload and processing
- Whisper speech-to-text transcription
- Dedicated Whisper API service
- FastAPI-based transcription endpoint
- FFmpeg audio processing support

## Text Processing

- Direct text feedback submission
- Feedback analysis without voice transcription
- Shared AI analysis pipeline for voice and text feedback

## AI Processing

- Local AI inference using Ollama
- Qwen 2.5 7B integration
- Sentiment analysis
- Emotion detection
- Satisfaction scoring
- Urgency detection
- Follow-up requirement detection
- AI-generated summaries
- Structured JSON output
- JSON cleanup and normalization

## Feedback Management

- Feedback persistence
- Feedback retrieval
- Individual feedback retrieval
- Feedback deletion
- Search and filtering
- Dashboard statistics
- Feedback analysis display

## Database

- PostgreSQL integration
- Prisma ORM
- Prisma migrations
- Repository-based database access

---

# Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend

- Next.js API Routes
- TypeScript
- Axios
- Controller / Service / Repository architecture

## Speech Recognition

- OpenAI Whisper
- Python
- FastAPI
- Uvicorn
- FFmpeg
- PyTorch

## AI Analysis

- Ollama
- Qwen 2.5 7B

## Database

- PostgreSQL
- Prisma ORM

---

# Repository Structure

```text
automated-feedback-system/
|
├── frontend/
|   |
|   ├── prisma/
|   |   ├── migrations/
|   |   └── schema.prisma
|   |
|   ├── src/
|   |   |
|   |   ├── app/
|   |   |   |
|   |   |   ├── api/
|   |   |   |   |
|   |   |   |   ├── feedback/
|   |   |   |   |   ├── [id]/
|   |   |   |   |   └── route.ts
|   |   |   |   |
|   |   |   |   └── transcribe/
|   |   |   |       └── route.ts
|   |   |   |
|   |   |   └── page.tsx
|   |   |
|   |   ├── controllers/
|   |   |   └── FeedbackController.ts
|   |   |
|   |   ├── services/
|   |   |   └── FeedbackService.ts
|   |   |
|   |   ├── repositories/
|   |   |   └── FeedbackRepository.ts
|   |   |
|   |   └── lib/
|   |       └── prisma.ts
|   |
|   ├── prisma.config.ts
|   ├── package.json
|   └── ...
|
├── whisper/
|   └── app.py
|
├── backend/
|
├── model-evaluation-and-validation.md
├── setup-guide.md
├── README.md
└── .gitignore
```

---

# Voice Processing Pipeline

Voice feedback follows a dedicated speech-to-text pipeline.

```text
Patient
   |
   v
Browser Microphone
   |
   v
Audio Recording
   |
   v
Next.js /api/transcribe
   |
   v
Whisper FastAPI Service
   |
   v
Speech-to-Text
   |
   v
Transcript
```

The transcript is then passed into the same feedback analysis pipeline used for text feedback.

---

# AI Analysis Pipeline

The AI analysis pipeline processes the transcript using Qwen 2.5 7B through Ollama.

```text
Transcript
    |
    v
Prompt Generation
    |
    v
FeedbackService
    |
    v
Axios
    |
    v
Ollama API
    |
    v
Qwen 2.5 7B
    |
    v
AI Response
    |
    v
JSON Extraction
    |
    v
Cleanup
    |
    v
Validation
    |
    v
Normalization
    |
    v
Structured Feedback
```

---

# AI Analysis

For each feedback submission, Qwen 2.5 7B generates structured information including:

| Field | Description |
|---|---|
| Sentiment | Overall sentiment of the feedback |
| Emotion | Detected emotional state |
| Satisfaction Score | Satisfaction score from 1–5 |
| Urgency Level | Estimated urgency of the feedback |
| Follow-up Required | Whether follow-up action may be required |
| Summary | Concise summary of the feedback |

## Example

### Input

```text
The doctor was very friendly and explained everything clearly.
The waiting time was a little long, but overall I am satisfied.
```

### Output

```json
{
  "sentiment": "positive",
  "emotion": "satisfied",
  "satisfactionScore": 4,
  "urgencyLevel": "low",
  "followUpRequired": false,
  "summary": "The patient was satisfied with the doctor's friendliness and clear explanations, despite the long waiting time."
}
```

---

# LLM Output Processing

Qwen may return responses containing markdown formatting or additional text around the JSON response.

The backend therefore performs:

- markdown cleanup
- JSON extraction
- JSON parsing
- response validation
- structured response normalization

This ensures that the application returns a consistent structured response to the frontend.

---

# Current API Endpoints

## Retrieve Feedback

```http
GET /api/feedback
```

Retrieves stored feedback records for the dashboard.

---

## Submit Feedback

```http
POST /api/feedback
```

Accepts patient feedback and performs AI analysis before storing the resulting structured data.

### Example Request

```json
{
  "transcript": "The doctor was very professional but the waiting time was too long."
}
```

### Example Response

```json
{
  "success": true,
  "analysis": {
    "id": 1,
    "transcript": "The doctor was very professional but the waiting time was too long.",
    "sentiment": "positive",
    "emotion": "satisfied",
    "satisfactionScore": 4,
    "urgencyLevel": "low",
    "followUpRequired": false,
    "summary": "The patient appreciated the doctor but was dissatisfied with the waiting time."
  }
}
```

---

## Retrieve Individual Feedback

```http
GET /api/feedback/:id
```

Retrieves a specific feedback record.

---

## Delete Feedback

```http
DELETE /api/feedback/:id
```

Deletes a specific feedback record.

---

## Speech Transcription

```http
POST /api/transcribe
```

Accepts recorded audio and sends it to the Whisper service for transcription.

---

# Database Architecture

The application uses PostgreSQL for persistent feedback storage.

Prisma provides the ORM layer.

```text
FeedbackService
      |
      v
FeedbackRepository
      |
      v
Prisma
      |
      v
PostgreSQL
```

The feedback data includes:

- transcript
- sentiment
- emotion
- satisfaction score
- urgency level
- follow-up requirement
- summary
- creation timestamp

---

# Local AI Architecture

The project uses local AI services rather than relying on external hosted inference APIs.

## Whisper

```text
Audio
  |
  v
Whisper
  |
  v
Transcript
```

## Qwen

```text
Transcript
    |
    v
Ollama
    |
    v
Qwen 2.5 7B
    |
    v
Structured Analysis
```

This allows the core AI processing pipeline to run locally during development.

---

# Development Setup

## Requirements

Install the following:

- Node.js
- Python 3.10+
- PostgreSQL
- FFmpeg
- Ollama

---

## Clone Repository

```bash
git clone https://github.com/advaitkrishna25/automated-feedback-system.git
cd automated-feedback-system
```

---

# Frontend Setup

Navigate to the frontend:

```powershell
cd frontend
```

Install dependencies:

```powershell
npm install
```

---

# Environment Variables

Create:

```text
frontend/.env
```

Configure the PostgreSQL connection used by Prisma.

Example:

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/feedback_db"
```

Do not commit `.env` files or database credentials to GitHub.

---

# Prisma Setup

From the `frontend` directory:

```powershell
npx prisma generate
```

Apply the migrations:

```powershell
npx prisma migrate dev
```

---

# Ollama Setup

Install Ollama and make sure the Qwen model is available.

Pull the model:

```powershell
ollama pull qwen2.5:7b
```

Start Ollama:

```powershell
ollama serve
```

The Ollama API is available at:

```text
http://127.0.0.1:11434
```

---

# Whisper Setup

The Whisper service is located in:

```text
whisper/
```

Activate the Python virtual environment:

```powershell
cd C:\Projects\automated-feedback-system\whisper
.\venv\Scripts\Activate.ps1
```

Start the Whisper API:

```powershell
python -m uvicorn app:app --reload --port 8000
```

The Whisper API runs at:

```text
http://127.0.0.1:8000
```

---

# Start the Frontend

Open another terminal:

```powershell
cd C:\Projects\automated-feedback-system\frontend
npm run dev
```

The application runs at:

```text
http://localhost:3000
```

---

# Running the Complete System

Three services are required during local development.

## Terminal 1 — Whisper

```powershell
cd C:\Projects\automated-feedback-system\whisper
.\venv\Scripts\Activate.ps1
python -m uvicorn app:app --reload --port 8000
```

## Terminal 2 — Ollama

```powershell
ollama serve
```

## Terminal 3 — Next.js

```powershell
cd C:\Projects\automated-feedback-system\frontend
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# End-to-End Flow

```text
                VOICE FEEDBACK
                       |
                       v
                Audio Recording
                       |
                       v
                 Whisper API
                       |
                       v
                   Transcript
                       |
                       v
                 Next.js API
                       |
                       v
              FeedbackController
                       |
                       v
                FeedbackService
                       |
                       v
                    Axios
                       |
                       v
                  Ollama API
                       |
                       v
                 Qwen 2.5 7B
                       |
                       v
             JSON Processing
                       |
                       v
              Structured Data
                       |
                       v
            FeedbackRepository
                       |
                       v
                    Prisma
                       |
                       v
                 PostgreSQL
                       |
                       v
                  Dashboard
```

---

# Dashboard

The dashboard provides a centralized interface for reviewing analyzed patient feedback.

It supports:

- viewing feedback
- viewing transcripts
- viewing AI analysis
- sentiment display
- emotion display
- satisfaction scores
- urgency levels
- follow-up status
- AI summaries
- searching feedback
- filtering feedback
- deleting feedback
- viewing feedback statistics

---

# Testing

The complete pipeline has been tested using both text and voice feedback.

Voice testing included multiple emotional scenarios:

- Happy / satisfied
- Sad / disappointed
- Angry / frustrated
- Fearful / anxious
- Neutral
- Disgusted
- Surprised
- Relieved

The tested scenarios successfully produced transcriptions and corresponding AI analyses.

---

# Current Implementation Status

| Component | Status |
|---|---|
| React frontend | Complete |
| Next.js application | Complete |
| Voice recording | Complete |
| Whisper transcription | Complete |
| Text feedback | Complete |
| Qwen 2.5 7B integration | Complete |
| Ollama integration | Complete |
| Sentiment analysis | Complete |
| Emotion detection | Complete |
| Satisfaction scoring | Complete |
| Urgency detection | Complete |
| Follow-up detection | Complete |
| AI summaries | Complete |
| JSON cleanup and normalization | Complete |
| PostgreSQL integration | Complete |
| Prisma ORM | Complete |
| Repository layer | Complete |
| Controller layer | Complete |
| Service layer | Complete |
| Feedback dashboard | Complete |
| Search and filtering | Complete |
| Feedback deletion | Complete |

---

# Engineering Architecture

The project uses a layered architecture to keep responsibilities separated.

```text
                API ROUTE
                    |
                    v
              CONTROLLER
                    |
                    v
                 SERVICE
                    |
          +---------+---------+
          |                   |
          v                   v
      WHISPER             OLLAMA
          |                   |
          v                   v
     TRANSCRIPT          QWEN 2.5
                              |
                              v
                       AI ANALYSIS
                              |
                              v
                         REPOSITORY
                              |
                              v
                           PRISMA
                              |
                              v
                        POSTGRESQL
```

This structure allows individual components to be modified or replaced without requiring major changes to the rest of the system.

---

# Security Notes

- Environment variables are excluded from Git.
- Database credentials should never be committed.
- Local AI services are used during development.
- The current configuration is intended for local development.
- Production deployment would require additional authentication, authorization, security, and infrastructure configuration.

---

# Future Improvements

Potential future improvements include:

- Improved Whisper accuracy for different accents
- Larger Whisper models
- Authentication and authorization
- Role-based access
- Advanced feedback analytics
- Feedback trend visualization
- Report generation and export
- Production deployment
- Automated testing
- Docker containerization
- Improved multilingual evaluation
- Automated voice calling integration
- Twilio integration for automated calls

---

# Documentation

| Document | Purpose |
|---|---|
| `setup-guide.md` | Environment setup and installation instructions |
| `model-evaluation-and-validation.md` | AI model evaluation, testing, and validation |

Additional documentation will continue to evolve alongside the implementation.

---

# Project Goals

This project is being developed as:

- a full-stack AI engineering project
- a healthcare feedback processing system
- a reproducible local AI application
- a backend architecture reference
- an AI integration learning resource
- a portfolio-quality engineering project
- a foundation for future automated patient feedback calling

---

# License

This project is intended for educational and project-development purposes.
