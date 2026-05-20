# Automated Feedback Calling System

## Project Overview

The Automated Feedback Calling System is a web-based platform designed to collect customer feedback through automated voice calls and display the collected feedback on a dashboard.

The system records customer responses, converts speech into text, processes the responses, and stores the results for review and analysis.

---

# Objective

The objective of this project is to:

- Automate customer feedback collection
- Convert customer voice responses into text
- Store and process customer feedback
- Display feedback data on a website dashboard
- Build a scalable workflow using modern web technologies

---

# Technologies Used

| Technology | Purpose |
|---|---|
| TypeScript | Backend and frontend development |
| Node.js | Server-side runtime |
| React | Frontend dashboard |
| Whisper | Speech-to-text conversion |
| MongoDB | Database management |
| Twilio | Automated calling service |
| Git & GitHub | Version control and project management |
| FFmpeg | Audio processing |
| PyTorch | Machine learning framework required for Whisper |

---

# Repository Structure

```text
automated-feedback-system/
│
├── README.md
├── backend/
├── frontend/
├── ai/
├── docs/
└── assets/
```

---

# Phase 1 – Environment Setup and Research

The first phase focuses on setting up the development environment and testing the speech-to-text workflow.

Tasks included:

- Installing required software
- Configuring development tools
- Setting up Whisper locally
- Testing speech-to-text conversion
- Creating project documentation
- Setting up GitHub repository

---

# Step-by-Step Setup Guide

## 1. Install Python

### Download Link

https://www.python.org/downloads/

### Recommended Version

```text
Python 3.10
```

### Installation Steps

1. Download Python from the official website.
2. Run the installer.
3. Enable the option:

```text
Add Python to PATH
```

4. Click:

```text
Install Now
```

### Verification

Open Command Prompt and run:

```bash
python --version
```

Example Output:

```text
Python 3.10.x
```

---

# 2. Install Git

### Download Link

https://git-scm.com/downloads

### Installation Steps

1. Download Git for Windows.
2. Run the installer.
3. Continue with default settings.
4. Complete installation.

### Verification

Open Command Prompt and run:

```bash
git --version
```

Example Output:

```text
git version 2.x.x
```

---

# 3. Create GitHub Repository

### GitHub Website

https://github.com/

### Steps

1. Create a GitHub account.
2. Create a new repository.
3. Add a README.md file.
4. Upload project documentation.
5. Make the repository public for review.

---

# 4. Install FFmpeg

### Download Link

https://ffmpeg.org/download.html

### Installation Steps

1. Download FFmpeg.
2. Extract the ZIP file.
3. Add FFmpeg to system PATH.

### Verification

Open Command Prompt and run:

```bash
ffmpeg -version
```

Example Output:

```text
ffmpeg version x.x.x
```

---

# 5. Install PyTorch

### Installation Guide

https://pytorch.org/get-started/locally/

### Recommended Configuration

| Option | Value |
|---|---|
| OS | Windows |
| Package | Pip |
| Language | Python |
| Compute Platform | CUDA 12.6 |

### Installation Command

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
```

### Verification

Run Python:

```bash
python
```

Then execute:

```python
import torch
print(torch.__version__)
```

---

# 6. Install Whisper

### Installation Command

```bash
pip install openai-whisper
```

### Verification

```bash
whisper --help
```

If commands are displayed successfully, Whisper has been installed correctly.

---

# 7. Testing Whisper

## Test Audio File

Place an audio file such as:

```text
download.mp3
```

inside the project folder.

---

## Run Whisper

```bash
whisper download.mp3 --model base --device cpu
```

---

## Explanation

| Command Part | Purpose |
|---|---|
| whisper | Runs Whisper |
| download.mp3 | Input audio file |
| --model base | Uses base Whisper model |
| --device cpu | Uses CPU for processing |

---

## Expected Output

Example:

```text
The service was very good.
```

This confirms that speech-to-text conversion is working successfully.

---

# System Architecture

```text
Customer Call
      ↓
Voice Response
      ↓
Whisper Speech-to-Text
      ↓
Backend Processing
      ↓
MongoDB Database
      ↓
Dashboard Display
```

---

# Workflow Overview

```text
Customer Call
      ↓
Voice Response
      ↓
Speech-to-Text Conversion
      ↓
Backend Processing
      ↓
Database Storage
      ↓
Dashboard Display
```

---

# How To Run

```bash
whisper download.mp3 --model base --device cpu
```

---

# Project Status

Phase 1 Completed ✅

---

# Note

Whisper was tested using CPU mode during the initial setup phase for compatibility and environment testing.

---

# Future Development

The next phases of the project include:

- TypeScript backend setup
- Express API development
- Audio upload handling
- MongoDB integration
- Dashboard implementation
- Automated calling integration
- Feedback analytics

---

# Current Status

The initial environment setup and Whisper speech-to-text testing phase has been completed successfully.

---

# Repository Information

This repository contains:

- Project documentation
- Setup instructions
- Installation guides
- Initial workflow research
- Future development structure