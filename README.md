# AI-Powered Automated Patient Feedback Calling System

## Overview

The AI-Powered Automated Patient Feedback Calling System is a full-stack healthcare feedback processing platform designed to automate patient feedback collection, transcription, AI analysis, and structured insight generation.

The system combines automated voice workflows with local AI processing pipelines to transform patient conversations into structured analytical data that can be stored, visualized, and reviewed through a dashboard interface.

The project is being developed as a production-oriented engineering system with a strong focus on:

- backend architecture
- AI integration workflows
- reproducible development environments
- scalable service design
- structured data processing
- multilingual healthcare feedback analysis

The repository evolves alongside the actual implementation and documents real architectural decisions, APIs, integrations, and backend workflows as development progresses.

---

# System Workflow

```text
Patient Call
↓
Voice Response Recording
↓
Whisper Large-v3 Transcription
↓
Transcript Processing
↓
Qwen 2.5 7B Analysis
↓
Structured JSON Generation
↓
Database Storage
↓
Dashboard Visualization
```

---

# Current Backend Architecture

```text
Client Request
↓
Next.js API Route
↓
Controller Layer
↓
Service Layer (In Progress)
↓
Qwen AI Integration
↓
Structured JSON Processing
↓
Database Layer (Planned)
↓
Dashboard Analytics
```

The backend currently uses a controller-oriented architecture to separate HTTP handling logic from future business and AI processing layers. This structure is intended to improve maintainability, scalability, and long-term extensibility as the system evolves.

---

# Current Features

## AI Processing

- Whisper speech-to-text integration
- Local AI inference using Ollama
- Qwen 2.5 7B integration
- Structured JSON output generation
- Multilingual testing
- Sentiment analysis validation
- Emotion detection validation
- Urgency detection validation

## Backend Implementation

- Next.js backend initialization
- API route architecture
- Controller layer initialization
- GET request handling
- POST request handling
- Health monitoring endpoint

## Development Infrastructure

- Local AI model execution
- FFmpeg integration
- Git and GitHub setup
- TypeScript environment setup
- Backend folder organization
- Documentation-driven development workflow

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

## AI Processing

- Whisper Large-v3
- Qwen 2.5 7B
- Ollama
- PyTorch
- FFmpeg

## Planned Infrastructure

- PostgreSQL
- Twilio
- Analytics Dashboard
- Authentication System
- Sentiment Visualization
- Emotion Analytics
- Urgency Scoring

---

# Repository Structure

```text
.
├── README.md
├── docs/
│   ├── setup-guide.md
│   └── model-evaluation-and-validation.md
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── api/
│   │   │
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── models/
│   │   ├── lib/
│   │   └── types/
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── audio/
└── outputs/
```

---

# Current API Endpoints

## Health Check

```http
GET /api/health
```

Used to verify backend availability and API responsiveness.

---

## Retrieve Feedback

```http
GET /api/feedback
```

Returns available feedback records.

---

## Submit Feedback

```http
POST /api/feedback
```

Processes feedback submissions and prepares the system for AI-based transcript analysis workflows.

### Example Request

```json
{
  "patientId": "P1001",
  "transcript": "The doctor was very professional but the waiting time was too long."
}
```

### Planned AI Response Structure

```json
{
  "success": true,
  "analysis": {
    "language": "English",
    "sentiment": "mixed",
    "emotion": "slightly frustrated",
    "satisfaction_score": 7,
    "urgency_level": "low",
    "follow_up_required": false,
    "summary": "Patient appreciated the doctor but reported excessive waiting time."
  }
}
```

---

# AI Model Evaluation

## Selected Model

```text
Qwen 2.5 7B
```

The model was selected after evaluating multiple open-source LLMs for:

- multilingual support
- structured output quality
- local deployment capability
- Ollama compatibility
- hardware feasibility
- healthcare feedback analysis suitability

Detailed evaluation documentation is available in:

```text
docs/model-evaluation-and-validation.md
```

---

# Local Development Setup

Clone the repository:

```bash
git clone https://github.com/your-username/automated-feedback-system.git
```

Move into the frontend application:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Next.js development server should start on:

```text
http://localhost:3000
```

Detailed environment setup instructions, Whisper installation steps, Ollama setup, and AI model configuration are available in:

```text
docs/setup-guide.md
```

---

# Documentation

## Available Documentation

| Document | Purpose |
|---|---|
| `docs/setup-guide.md` | Complete environment setup and installation guide |
| `docs/model-evaluation-and-validation.md` | AI model evaluation, testing, and validation process |

Additional documentation will continue expanding alongside backend implementation and AI integration development.

---

# Current Development Direction

Current implementation work is focused on:

- service layer architecture
- Ollama API integration
- structured AI response processing
- PostgreSQL integration
- analytics pipeline development
- dashboard implementation
- scalable backend architecture
- AI processing orchestration

---

# Engineering Goals

This repository is being developed as:

- a reproducible implementation guide
- a backend engineering reference
- an AI integration learning resource
- a scalable full-stack software system
- a portfolio-quality engineering project
- a long-term extensible platform

The project documentation reflects actual implementation progress, architectural decisions, and evolving backend workflows rather than static planning documents.
