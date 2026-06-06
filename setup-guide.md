# Complete Environment Setup and Initial Backend Development Guide

# 1. Introduction

The Automated Feedback Calling System is a web-based platform designed to automate patient feedback collection using voice calls, speech transcription, and AI-based feedback analysis.

Instead of manually collecting patient feedback, the system automates the workflow by:

- placing automated calls
- recording patient voice responses
- converting speech into text
- processing feedback data using AI
- generating structured analytical insights
- preparing data for dashboard visualization

The system currently uses Whisper for speech-to-text conversion and Qwen 2.5 7B for AI-based transcript analysis.

---

# 2. Current System Workflow

```text
Patient Receives Call
↓
Patient Speaks Feedback
↓
Audio Response Recorded
↓
Whisper Large-v3 Converts Speech To Text
↓
Transcript Generated
↓
Qwen 2.5 7B Processes Transcript
↓
Structured JSON Analysis Generated
↓
Database Storage (Planned)
↓
Dashboard Visualization (Planned)
```

---

# 3. Technologies Used

| Technology | Purpose |
|---|---|
| TypeScript | Backend and frontend development |
| Next.js | Full-stack application framework |
| React | Frontend dashboard |
| Tailwind CSS | Frontend styling |
| Whisper Large-v3 | Speech-to-text conversion |
| Qwen 2.5 7B | AI feedback analysis |
| Ollama | Local AI model execution |
| PostgreSQL | Planned database |
| FFmpeg | Audio processing |
| PyTorch | Machine learning framework |
| Git | Version control |
| GitHub | Repository hosting |

---

# 4. Recommended System Requirements

| Component | Requirement |
|---|---|
| Operating System | Windows 10 / Windows 11 |
| RAM | Minimum 8 GB |
| Storage | Minimum 10 GB free |
| Python Version | Python 3.10.x |
| Node.js Version | Node.js 20+ Recommended |
| Internet | Required for installation |
| GPU | Optional |

---

# 5. Install Python

## What Is Python

Python is required for running Whisper and AI processing utilities.

Whisper is built using Python, therefore Python must be installed before installing Whisper.

---

## Download Python

Download Python from the official website:

```text
https://www.python.org/downloads/
```

Recommended version:

```text
Python 3.10.x
```

Reason:

- stable compatibility with Whisper
- stable compatibility with PyTorch

---

## Install Python

Run the downloaded installer.

During installation:

Enable the following option before continuing:

```text
Add Python to PATH
```

Then proceed using the default installation settings.

---

## Why PATH Is Important

PATH allows commands such as:

```bash
python
```

to work globally from Command Prompt.

Without adding Python to PATH:

Python commands may not work correctly.

---

## Verify Python Installation

Open Command Prompt and run:

```bash
python --version
```

### Example Output

```text
C:\Users\User> python --version
Python 3.10.11
```

If the Python version is displayed successfully:

- Python installed correctly
- PATH configured correctly
- Python commands available globally

---

## Common Error

### Error

```text
python is not recognized as an internal or external command
```

### Reason

Python was not added to PATH during installation.

### Solution

Reinstall Python and enable:

```text
Add Python to PATH
```

during installation.

---

# 6. Install Node.js

## What Is Node.js

Node.js is the JavaScript runtime required for running the Next.js application and backend APIs.

The project currently uses Next.js for both frontend and backend development.

---

## Download Node.js

Download Node.js from:

```text
https://nodejs.org/
```

Recommended version:

```text
Node.js 20+
```

---

## Verify Node.js Installation

Open Command Prompt and run:

```bash
node --version
```

Example output:

```text
v20.18.0
```

Verify npm installation:

```bash
npm --version
```

Example output:

```text
10.8.2
```

Successful output confirms:

- Node.js installed correctly
- npm installed correctly
- JavaScript runtime configured successfully

---

# 7. Install Git

## What Is Git

Git is a version control system used for:

- tracking project changes
- managing source code
- collaborating with repositories

---

## Download Git

Download Git from:

```text
https://git-scm.com/downloads
```

Download:

```text
Git for Windows
```

---

## Install Git

Run the installer and continue using the default installation settings.

---

## Verify Git Installation

Open Command Prompt and run:

```bash
git --version
```

### Example Output

```text
git version 2.49.0.windows.1
```

Successful output confirms:

- Git installed correctly
- Git commands available globally

---

# 8. Create GitHub Repository

## What Is GitHub

GitHub is a cloud platform used to:

- host repositories
- manage project code
- maintain documentation
- track software development

---

## Create Repository

Create a new repository using:

```text
automated-feedback-system
```

Recommended visibility:

```text
Public
```

Enable:

```text
Add README.md
```

The repository is intended to contain:

- backend implementation
- AI integration workflows
- documentation
- architecture references
- onboarding guides
- deployment guides

---

# 9. Install FFmpeg

## What Is FFmpeg

FFmpeg is an audio and video processing tool.

Whisper uses FFmpeg internally to:

- decode audio files
- process audio input
- convert audio formats

Without FFmpeg:

Whisper transcription may fail.

---

## Download FFmpeg

Open:

```text
https://ffmpeg.org/download.html
```

Recommended Windows build source:

```text
https://www.gyan.dev/ffmpeg/builds/
```

Download:

```text
ffmpeg-release-full
```

---

## Extract FFmpeg

Extract the downloaded ZIP file.

Example installation location:

```text
C:\ffmpeg
```

---

## Configure FFmpeg PATH

Add the following path to the Windows system PATH variable:

```text
C:\ffmpeg\bin
```

Restart Command Prompt after updating PATH.

---

## Verify FFmpeg Installation

Run:

```bash
ffmpeg -version
```

### Example Output

```text
ffmpeg version 7.1-full_build-www.gyan.dev
```

Successful output confirms:

- FFmpeg installed correctly
- PATH configured correctly
- FFmpeg commands available globally

---

# 10. Install PyTorch

## What Is PyTorch

PyTorch is a machine learning framework required by Whisper.

Whisper uses PyTorch for:

- AI model loading
- speech processing
- inference execution

---

## Install PyTorch

Open:

```text
https://pytorch.org/get-started/locally/
```

Use:

| Option | Value |
|---|---|
| Build | Stable |
| OS | Windows |
| Package | Pip |
| Language | Python |
| Compute Platform | CUDA 12.6 |

Install using:

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
```

---

## Verify PyTorch Installation

Open Python:

```bash
python
```

Run:

```python
import torch
print(torch.version)
```

Example output:

```text
2.7.0+cu126
```

Successful output confirms:

- PyTorch installed correctly
- CUDA-enabled version functioning correctly

Exit Python terminal:

```python
exit()
```

---

# 11. Install Whisper

## What Is Whisper

Whisper is a speech-to-text AI model used for converting patient voice responses into text transcripts.

---

## Install Whisper

Run:

```bash
pip install openai-whisper
```

---

## Verify Whisper Installation

Run:

```bash
whisper --help
```

Successful output confirms:

- Whisper installed correctly
- Whisper commands available globally

---

# 12. Install Ollama

## What Is Ollama

Ollama is a local AI model execution platform used for running Qwen 2.5 7B locally.

Purpose:

- local LLM execution
- offline inference
- AI API access
- structured transcript analysis

Official website:

```text
https://ollama.com
```

---

## Install Ollama

Download and install Ollama from the official website.

After installation, verify:

```bash
ollama --version
```

---

# 13. Install Qwen 2.5 7B

Pull the selected AI model using:

```bash
ollama pull qwen2.5:7b
```

---

## Verify Model Installation

Run:

```bash
ollama run qwen2.5:7b
```

Example prompt:

```text
What is sentiment analysis?
```

Successful output confirms:

- model downloaded correctly
- Ollama functioning correctly
- local inference operational

---

# 14. Clone Repository

Clone the repository locally:

```bash
git clone https://github.com/your-username/automated-feedback-system.git
```

Move into the frontend application:

```bash
cd automated-feedback-system/frontend
```

---

# 15. Install Frontend Dependencies

Install project dependencies:

```bash
npm install
```

This installs:

- Next.js
- React
- TypeScript
- Tailwind CSS
- backend dependencies

---

# 16. Current Repository Structure

```text
automated-feedback-system/
│
├── README.md
├── docs/
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
│
├── audio/
└── outputs/
```

---

# 17. Backend Folder Purpose

| Folder | Purpose |
|---|---|
| controllers | Handles HTTP request and response logic |
| services | Handles AI inference orchestration, business logic, and response processing |
| repositories | Planned database abstraction layer |
| models | Application data models |
| lib | Shared utilities and helper functions |
| types | TypeScript type definitions |

---

# 18. Start Development Server

Run the Next.js development server:

```bash
npm run dev
```

Expected output:

```text
Local: http://localhost:3000
```

Successful output confirms:

- Next.js application running
- backend API routes functioning
- frontend environment configured successfully

---

# 19. Current Backend APIs

## Health Check Endpoint

```http
GET /api/health
```

Purpose:

- backend availability verification
- API status validation

---

## Retrieve Feedback Endpoint

```http
GET /api/feedback
```

Purpose:

- retrieve feedback data
- verify API routing

---

## Submit Feedback Endpoint

```http
POST /api/feedback
```

Purpose:

- receive patient transcript data
- prepare transcript analysis workflow

---

# 20. API Testing

Example API test using browser or Postman:

```http
GET http://localhost:3000/api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

---

# 21. Whisper Audio Testing

Run Whisper transcription:

```bash
whisper download.mp3 --model base --device cpu
```

---

## Expected Output

```text
Detecting language using up to the first 30 seconds...
[00:00.000 --> 00:03.000] The service was very good.
```

Successful transcription confirms:

- Whisper functioning correctly
- FFmpeg functioning correctly
- speech-to-text pipeline operational

---

# 22. Current Local Development Workflow

```text
Start Ollama
↓
Run Next.js Development Server
↓
Submit Feedback Requests
↓
Controller Receives Request
↓
Service Layer Processes Transcript
↓
Axios Sends Request To Ollama
↓
Qwen Generates Structured Analysis
↓
API Returns Structured JSON Response
```

# 23. Current Implementation Status

The current system includes:

- local Whisper transcription pipeline
- Ollama integration
- Qwen 2.5 7B setup
- multilingual AI validation
- structured JSON testing
- Next.js application setup
- API route architecture
- controller-service backend architecture
- backend folder organization

---

# 24. Current Development Direction

Current implementation work is focused on:

- service layer architecture
- Ollama API integration
- structured AI response processing
- PostgreSQL integration
- analytics pipeline development
- scalable backend architecture

---

# 25. Final Result

The development environment now supports:

- local AI execution
- speech-to-text transcription
- Next.js backend development
- API route testing
- multilingual AI transcript analysis
- scalable backend architecture setup

The repository documentation will continue evolving alongside the actual implementation and backend architecture.

---

# 26. Install Axios

## What Is Axios

Axios is an HTTP client library used by the backend service layer to communicate with the Ollama API.

---

## Install Axios

```bash
cd frontend
npm install axios
```

---

# 27. Start Ollama Before Running Backend

Start Ollama using:

```bash
ollama run qwen2.5:7b
```

This confirms:

- Ollama functioning correctly
- Qwen model available locally
- inference pipeline operational

---

# 28. Current AI Inference Workflow

```text
Frontend
↓
API Route
↓
Controller
↓
Service Layer
↓
Axios
↓
Ollama
↓
Qwen 2.5 7B
↓
Structured JSON Response
```

---

# 29. Test AI Feedback Endpoint

Example request:

```http
POST http://localhost:3000/api/feedback
```

Example request body:

```json
{
  "transcript": "The doctor explained everything clearly but the waiting time was too long."
}
```

---

## Example AI Response

```json
{
  "success": true,
  "analysis": {
    "sentiment": "mixed",
    "emotion": "slightly frustrated",
    "satisfaction_score": 7,
    "urgency_level": "low",
    "follow_up_required": false,
    "summary": "Patient appreciated the consultation but reported excessive waiting time."
  }
}
```
# 30. LLM Response Processing

During AI integration testing, Qwen occasionally returned markdown-formatted JSON responses.

To ensure reliable API responses, the backend now performs:

- markdown cleanup
- JSON extraction
- structured parsing
- response normalization

This processing layer ensures the frontend always receives properly formatted structured JSON responses from the backend API.
