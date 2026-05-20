# Automated Feedback Calling System

# Complete Beginner-Friendly Environment Setup and Initial Implementation Guide

---

# 1. Introduction

The Automated Feedback Calling System is a web-based platform designed to automate customer feedback collection using voice calls.

Instead of manually calling customers and writing feedback, the system performs the process automatically.

The system workflow is:

```text
Customer Receives Call
          ↓
Customer Speaks Feedback
          ↓
Speech Converted Into Text
          ↓
Feedback Processed
          ↓
Results Displayed On Website Dashboard
```

The project uses Whisper for speech-to-text conversion.

---

# 2. Project Objective

The main objectives of the project are:

- automate customer feedback collection
- reduce manual work
- convert customer speech into text
- store customer responses
- display feedback on a website dashboard
- build a scalable workflow using modern technologies

---

# 3. Technologies Used

| Technology | Purpose |
|---|---|
| TypeScript | Backend and frontend development |
| Node.js | Backend runtime |
| React | Frontend dashboard |
| Whisper | Speech-to-text conversion |
| MongoDB | Database |
| Twilio | Automated calling |
| FFmpeg | Audio processing |
| PyTorch | Machine learning framework |
| Git | Version control |
| GitHub | Repository hosting |

---

# 4. Phase 1 Goal

The goal of Phase 1 is:

- install required software
- configure development environment
- install Whisper
- test speech-to-text conversion
- create documentation
- understand project workflow

This phase mainly focuses on:
- setup
- testing
- documentation
- research

No website or backend implementation is done in this phase.

---

# 5. System Requirements

Recommended requirements:

| Component | Requirement |
|---|---|
| Operating System | Windows 10 / Windows 11 |
| RAM | Minimum 8 GB |
| Storage | Minimum 10 GB free |
| Python | Python 3.10 |
| Internet | Required |
| GPU | Optional |

---

# 6. Install Python

## What Is Python

Python is a programming language.

Whisper is built using Python, so Python must be installed before installing Whisper.

---

# Step 1 — Open Python Website

Open:

https://www.python.org/downloads/

---

# Step 2 — Download Python

Download:

```text
Python 3.10
```

Recommended version:

```text
Python 3.10.x
```

Reason:
- stable compatibility with Whisper
- stable compatibility with PyTorch

---

# Step 3 — Run Python Installer

Open the downloaded installer.

IMPORTANT:

Enable the option:

```text
Add Python to PATH
```

before clicking install.

---

# What Is PATH

PATH is a Windows setting.

It allows commands like:

```bash
python
```

to work from Command Prompt.

Without adding Python to PATH:
- Python commands may not work globally.

---

# Step 4 — Install Python

Click:

```text
Install Now
```

Wait until installation completes.

---

# Step 5 — Verify Python Installation

Open Command Prompt.

---

# How To Open Command Prompt

Press:

```text
Windows Key
```

Type:

```text
cmd
```

Open:

```text
Command Prompt
```

---

# Run Verification Command

Run:

```bash
python --version
```

---

# Expected Output

Example:

```text
Python 3.10.11
```

---

# Meaning Of Output

This confirms:
- Python installed correctly
- Python added to PATH successfully

---

# Common Error

## Error

```text
python is not recognized
```

## Reason

Python was not added to PATH during installation.

## Solution

Reinstall Python and enable:

```text
Add Python to PATH
```

---

# 7. Install Git

## What Is Git

Git is a version control system.

Purpose:
- track project changes
- manage project files
- connect local project with GitHub

---

# Step 1 — Open Git Website

Open:

https://git-scm.com/downloads

---

# Step 2 — Download Git

Download:

```text
Git for Windows
```

---

# Step 3 — Install Git

Run installer.

Use default installation settings.

Complete installation.

---

# Step 4 — Verify Git Installation

Open Command Prompt.

Run:

```bash
git --version
```

---

# Expected Output

Example:

```text
git version 2.49.0.windows.1
```

---

# Meaning Of Output

This confirms:
- Git installed successfully
- Git commands available globally

---

# 8. Create GitHub Account

## What Is GitHub

GitHub is a cloud platform used to:
- store repositories
- manage projects
- share code
- maintain documentation

---

# Step 1 — Open GitHub

Open:

https://github.com/

---

# Step 2 — Create Account

Click:

```text
Sign Up
```

Enter:
- email
- username
- password

Verify email.

---

# 9. Create GitHub Repository

## Step 1 — Create Repository

After login:
click:

```text
New Repository
```

---

# Step 2 — Repository Configuration

Repository name:

```text
automated-feedback-system
```

Visibility:

```text
Public
```

Enable:

```text
Add README.md
```

Click:

```text
Create Repository
```

---

# Repository Purpose

This repository is used for:
- storing project files
- documentation
- project tracking
- future development

---

# 10. Install FFmpeg

## What Is FFmpeg

FFmpeg is an audio and video processing tool.

Whisper uses FFmpeg internally to:
- decode audio
- process audio files
- convert audio formats

Without FFmpeg:
- Whisper audio processing may fail

---

# Step 1 — Open FFmpeg Website

Open:

https://ffmpeg.org/download.html

---

# Step 2 — Download Windows Build

Recommended source:

https://www.gyan.dev/ffmpeg/builds/

Download:

```text
ffmpeg-release-full
```

---

# Step 3 — Extract ZIP File

Extract ZIP file.

Example location:

```text
C:\ffmpeg
```

---

# Step 4 — Add FFmpeg To PATH

Open Windows Search.

Search:

```text
Environment Variables
```

Open:

```text
Edit The System Environment Variables
```

Click:

```text
Environment Variables
```

Under:

```text
System Variables
```

Select:

```text
Path
```

Click:

```text
Edit
```

Click:

```text
New
```

Add:

```text
C:\ffmpeg\bin
```

Click:
- OK
- OK
- OK

---

# Why Add FFmpeg To PATH

This allows commands like:

```bash
ffmpeg
```

to work from any folder in Command Prompt.

---

# Step 5 — Verify FFmpeg Installation

Open Command Prompt.

Run:

```bash
ffmpeg -version
```

---

# Expected Output

Example:

```text
ffmpeg version 7.x.x
```

---

# Meaning Of Output

This confirms:
- FFmpeg installed correctly
- FFmpeg added to PATH successfully

---

# Common Error

## Error

```text
ffmpeg is not recognized
```

## Reason

FFmpeg was not added to PATH correctly.

## Solution

Add:

```text
C:\ffmpeg\bin
```

to PATH again.

---

# 11. Install PyTorch

## What Is PyTorch

PyTorch is a machine learning framework.

Whisper requires PyTorch for:
- loading AI models
- speech processing
- AI inference

---

# Step 1 — Open PyTorch Website

Open:

https://pytorch.org/get-started/locally/

---

# Step 2 — Select Configuration

Use:

| Option | Value |
|---|---|
| PyTorch Build | Stable |
| OS | Windows |
| Package | Pip |
| Language | Python |
| Compute Platform | CUDA 12.6 |

---

# Step 3 — Install PyTorch

Open Command Prompt.

Run:

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
```

---

# What This Command Installs

This command installs:
- torch
- torchvision
- torchaudio

with CUDA 12.6 support.

---

# Step 4 — Wait For Installation

Installation may take several minutes.

Reason:
- PyTorch packages are large
- CUDA dependencies are included

---

# Step 5 — Verify PyTorch Installation

Run:

```bash
python
```

Python terminal opens.

Run:

```python
import torch
print(torch.__version__)
```

---

# Expected Output

Example:

```text
2.7.0+cu126
```

---

# Meaning Of Output

This confirms:
- PyTorch installed correctly
- CUDA version installed successfully

---

# Exit Python Terminal

Run:

```python
exit()
```

---

# 12. Install Whisper

## What Is Whisper

Whisper is a speech-to-text model.

Purpose:
- convert speech into text
- process voice responses
- support audio transcription

---

# Step 1 — Install Whisper

Open Command Prompt.

Run:

```bash
pip install openai-whisper
```

---

# What This Command Installs

This command installs:
- Whisper
- dependencies
- transcription utilities

---

# Step 2 — Wait For Installation

Installation may take several minutes depending on internet speed.

---

# Step 3 — Verify Whisper Installation

Run:

```bash
whisper --help
```

---

# Expected Output

Example:

```text
usage: whisper [-h] [--model MODEL] [--device DEVICE]
```

---

# Meaning Of Output

This confirms:
- Whisper installed correctly
- Whisper commands available globally

---

# 13. Create Project Folder

Create folder:

```text
C:\Whisper Audio
```

Purpose:
- store audio files
- test transcription
- store outputs

---

# 14. Add Test Audio File

Add audio file inside:

```text
C:\Whisper Audio
```

Example:

```text
download.mp3
```

Possible audio sources:
- voice recording
- customer feedback audio
- test audio sample

---

# 15. Open Command Prompt Inside Project Folder

Open:

```text
C:\Whisper Audio
```

Click address bar.

Type:

```text
cmd
```

Press Enter.

Command Prompt opens directly inside the current folder.

---

# 16. Run Whisper

Run:

```bash
whisper download.mp3 --model base --device cpu
```

---

# 17. Detailed Command Explanation

| Command Part | Meaning |
|---|---|
| whisper | Runs Whisper model |
| download.mp3 | Input audio file |
| --model base | Uses base Whisper model |
| --device cpu | Uses CPU instead of GPU |

---

# Why CPU Mode Was Used

CPU mode was used because:
- GPU compatibility issues occurred
- CPU mode provides stable testing
- sufficient for setup verification

---

# 18. Whisper Workflow

```text
Audio File
     ↓
Whisper Loads AI Model
     ↓
Audio Processing
     ↓
Speech Recognition
     ↓
Text Transcription
     ↓
Output Generated
```

---

# 19. Expected Terminal Output

Example:

```text
100%|████████████████████████████| 139M/139M

Detecting language using up to the first 30 seconds...

[00:00.000 --> 00:03.000] The service was very good.
```

---

# Meaning Of Output

| Output | Meaning |
|---|---|
| 100% download | Whisper model downloaded |
| Detecting language | Whisper identifying language |
| Timestamp | Audio timing |
| Transcribed sentence | Speech converted into text |

---

# 20. Successful Verification

Successful transcription confirms:
- Whisper working correctly
- FFmpeg working correctly
- PyTorch installed correctly
- speech-to-text pipeline functioning

---

# 21. CUDA Compatibility Issue

During setup:
CUDA compatibility issues occurred with RTX 5060 Laptop GPU.

Possible reasons:
- newer GPU architecture
- CUDA version mismatch
- unsupported PyTorch build

---

# Solution Used

Used CPU mode:

```bash
whisper download.mp3 --model base --device cpu
```

This allowed:
- stable execution
- successful testing
- bypassing GPU dependency

---

# 22. Current Phase Completion

The following tasks were completed successfully:

- Python installation
- Git installation
- GitHub repository creation
- FFmpeg installation
- PyTorch installation
- Whisper installation
- Speech-to-text testing
- Documentation creation

---

# 23. Future Development Plan

Future phases include:

- TypeScript backend implementation
- Express API development
- Audio upload handling
- MongoDB integration
- Dashboard implementation
- Automated call integration
- Feedback analytics
- Website deployment

---

# 24. Repository Purpose

The repository contains:
- setup documentation
- implementation research
- installation guides
- workflow explanation
- troubleshooting process
- future development planning

---

# 25. Final Result

At the end of Phase 1:
- development environment configured successfully
- Whisper speech-to-text setup completed
- audio transcription tested successfully
- GitHub repository created
- technical documentation completed

This completes the initial setup and research phase of the project.
