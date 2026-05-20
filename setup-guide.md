# Automated Feedback Calling System

# Complete Environment Setup and Initial Implementation Guide

---

# 1. Introduction

The Automated Feedback Calling System is a web-based platform designed to automate customer feedback collection using voice calls.

Instead of manually collecting customer feedback, the system automates the workflow by:
- placing automated calls
- recording customer voice responses
- converting speech into text
- processing feedback data
- displaying results on a dashboard website

The system uses Whisper for speech-to-text conversion.

---

# 2. Project Workflow

```text
Customer Receives Call
          ↓
Customer Speaks Feedback
          ↓
Audio Response Recorded
          ↓
Whisper Converts Speech To Text
          ↓
Backend Processes Feedback
          ↓
Feedback Stored In Database
          ↓
Dashboard Displays Results
```

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

# 4. Recommended System Requirements

| Component | Requirement |
|---|---|
| Operating System | Windows 10 / Windows 11 |
| RAM | Minimum 8 GB |
| Storage | Minimum 10 GB free |
| Python Version | Python 3.10.x |
| Internet | Required for installation |
| GPU | Optional |

---

# 5. Install Python

## What Is Python

Python is a programming language required for running Whisper.

Whisper is built using Python, therefore Python must be installed before installing Whisper.

---

## Download Python

Download Python from the official website:

https://www.python.org/downloads/

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
enable the following option before continuing:

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
- Python commands may not work correctly.

---

## Verify Python Installation

Open Command Prompt and run:

```bash
python --version
```

---

## Example Real Output

```text
C:\Users\User> python --version
Python 3.10.11
```

---

## Verification

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

# 6. Install Git

## What Is Git

Git is a version control system used for:
- tracking project changes
- managing source code
- collaborating with repositories

---

## Download Git

Download Git from:

https://git-scm.com/downloads

Download:

```text
Git for Windows
```

---

## Install Git

Run the installer and continue with the default installation settings.

---

## Verify Git Installation

Open Command Prompt and run:

```bash
git --version
```

---

## Example Real Output

```text
C:\Users\User> git --version
git version 2.49.0.windows.1
```

---

## Verification

If the Git version is displayed successfully:
- Git installed correctly
- Git commands available globally

---

# 7. Create GitHub Repository

## What Is GitHub

GitHub is a cloud platform used to:
- host repositories
- manage project code
- maintain documentation
- track development progress

---

## Create GitHub Account

Open:

https://github.com/

Create a GitHub account using:
- email address
- username
- password

Verify the email address after registration.

---

## Create Repository

After logging in:
create a new repository using the following details.

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

Then create the repository.

---

## Repository Purpose

The repository will contain:
- setup documentation
- project research
- future implementation code
- workflow architecture
- development progress

---

# 8. Install FFmpeg

## What Is FFmpeg

FFmpeg is an audio and video processing tool.

Whisper uses FFmpeg internally to:
- decode audio files
- process audio input
- convert audio formats

Without FFmpeg:
- Whisper transcription may fail.

---

## Download FFmpeg

Open:

https://ffmpeg.org/download.html

Recommended Windows build source:

https://www.gyan.dev/ffmpeg/builds/

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

This allows FFmpeg commands to work globally from Command Prompt.

After updating PATH:
restart Command Prompt before verification.

---

## Verify FFmpeg Installation

Run:

```bash
ffmpeg -version
```

---

## Example Real Output

```text
C:\Users\User> ffmpeg -version

ffmpeg version 7.1-full_build-www.gyan.dev

built with gcc 14.2.0

configuration: --enable-gpl --enable-version3
```

---

## Verification

If FFmpeg version information is displayed:
- FFmpeg installed correctly
- PATH configured correctly
- FFmpeg commands available globally

---

## Common Error

### Error

```text
ffmpeg is not recognized as an internal or external command
```

### Reason

FFmpeg was not added to PATH correctly.

### Solution

Add:

```text
C:\ffmpeg\bin
```

to PATH again and restart Command Prompt.

---

# 9. Install PyTorch

## What Is PyTorch

PyTorch is a machine learning framework.

Whisper requires PyTorch for:
- AI model loading
- speech processing
- inference operations

---

## Open PyTorch Installation Page

Open:

https://pytorch.org/get-started/locally/

Use the following configuration:

| Option | Value |
|---|---|
| Build | Stable |
| OS | Windows |
| Package | Pip |
| Language | Python |
| Compute Platform | CUDA 12.6 |

---

## Install PyTorch

Open Command Prompt and run:

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
```

---

## What This Command Installs

This command installs:
- torch
- torchvision
- torchaudio

with CUDA 12.6 support.

---

## Installation Time

PyTorch installation may take:

```text
5–15 minutes
```

depending on:
- internet speed
- system performance

---

## Verify PyTorch Installation

Open Python:

```bash
python
```

Run:

```python
import torch
print(torch.__version__)
```

---

## Example Real Output

```text
Python 3.10.11

>>> import torch
>>> print(torch.__version__)
2.7.0+cu126
```

---

## Verification

If the PyTorch version is displayed:
- PyTorch installed correctly
- CUDA-enabled version working correctly

---

## Exit Python Terminal

Run:

```python
exit()
```

---

# 10. Install Whisper

## What Is Whisper

Whisper is a speech-to-text AI model.

Purpose:
- convert speech into text
- process voice responses
- generate transcriptions

---

## Install Whisper

Open Command Prompt and run:

```bash
pip install openai-whisper
```

---

## What This Command Installs

This command installs:
- Whisper
- required dependencies
- transcription utilities

---

## Installation Time

Installation may take:

```text
2–10 minutes
```

depending on:
- internet speed
- system performance

---

## Verify Whisper Installation

Run:

```bash
whisper --help
```

---

## Example Real Output

```text
usage: whisper [-h] [--model MODEL] [--device DEVICE]

optional arguments:
  -h, --help
  --model MODEL
  --device DEVICE
```

---

## Verification

If Whisper help information is displayed:
- Whisper installed correctly
- Whisper commands available globally

---

# 11. Recommended Project Structure

Create the following project structure:

```text
automated-feedback-system/
│
├── backend/
├── frontend/
├── docs/
├── audio/
├── outputs/
└── README.md
```

---

## Folder Purpose

| Folder | Purpose |
|---|---|
| backend | Backend implementation |
| frontend | Frontend dashboard |
| docs | Documentation files |
| audio | Input audio files |
| outputs | Generated transcription files |

---

# 12. Create Audio Testing Folder

Create the following folder:

```text
C:\Projects\Whisper Audio
```

Purpose:
- store test audio files
- store transcription outputs
- test speech-to-text workflow

---

## Example Folder Structure

```text
C:\Projects\Whisper Audio
│
├── download.mp3
├── download.txt
├── download.json
├── download.srt
└── download.vtt
```

---

## Meaning Of Generated Files

| File | Purpose |
|---|---|
| .txt | Plain transcription text |
| .json | Structured transcription data |
| .srt | Subtitle format |
| .vtt | Web subtitle format |

---

# 13. Add Test Audio File

Place a test audio file inside:

```text
C:\Projects\Whisper Audio
```

Example file:

```text
download.mp3
```

Possible audio sources:
- voice recording
- customer feedback recording
- sample speech audio

---

# 14. Open Command Prompt Inside Project Folder

Open:

```text
C:\Projects\Whisper Audio
```

Click the address bar.

Type:

```text
cmd
```

Press Enter.

Command Prompt will open directly inside the current folder.

---

# 15. Run Whisper

Run the following command:

```bash
whisper download.mp3 --model base --device cpu
```

---

# 16. Detailed Command Explanation

| Command Part | Meaning |
|---|---|
| whisper | Runs Whisper model |
| download.mp3 | Input audio file |
| --model base | Uses base Whisper model |
| --device cpu | Uses CPU for processing |

---

## Why CPU Mode Was Used

CPU mode was used because:
- GPU compatibility issues occurred
- CPU mode provides stable testing
- sufficient for initial setup verification

---

# 17. Whisper Model Comparison

| Model | Speed | Accuracy |
|---|---|
| tiny | Fastest | Lowest |
| base | Fast | Good |
| small | Moderate | Better |
| medium | Slower | High |
| large | Slowest | Best |

Current setup uses:

```text
base
```

Reason:
- good balance between speed and accuracy
- suitable for testing and development

---

# 18. Whisper Processing Workflow

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
C:\Projects\Whisper Audio> whisper download.mp3 --model base --device cpu

100%|████████████████████████████| 139M/139M

Detecting language using up to the first 30 seconds...

[00:00.000 --> 00:03.000] The service was very good.
```

---

# 20. Meaning Of Output

| Output | Meaning |
|---|---|
| 100% download | Whisper model downloaded successfully |
| Detecting language | Whisper identifying spoken language |
| Timestamp | Audio timing information |
| Transcribed sentence | Speech converted into text |

---

# 21. Successful Verification

Successful transcription confirms:
- Whisper functioning correctly
- FFmpeg functioning correctly
- PyTorch functioning correctly
- speech-to-text workflow functioning successfully

---

# 22. Performance Notes

| Mode | Description |
|---|---|
| CPU | Stable for development and testing |
| GPU | Faster processing for production workloads |

CPU mode is recommended for:
- initial setup
- testing
- debugging

GPU mode is recommended for:
- large-scale transcription
- production environments

---

# 23. CUDA Compatibility Issue

During setup:
CUDA compatibility issues occurred with RTX 5060 Laptop GPU.

Possible reasons:
- newer GPU architecture
- CUDA version mismatch
- unsupported PyTorch build

---

## Solution Used

CPU mode was used:

```bash
whisper download.mp3 --model base --device cpu
```

This allowed:
- stable execution
- successful testing
- bypassing GPU dependency

---

# 24. Future System Integration Workflow

Future implementation workflow:

```text
Frontend Uploads Audio
            ↓
Backend Receives Audio
            ↓
Whisper Processes Audio
            ↓
Transcription Stored In MongoDB
            ↓
Dashboard Displays Results
```

---

# 25. Setup Validation Checklist

Successful setup should confirm:

```text
✅ Python installed
✅ Git installed
✅ GitHub repository created
✅ FFmpeg installed
✅ PyTorch installed
✅ Whisper installed
✅ Audio transcription successful
```

---

# 26. Current Phase Completion

The following tasks were completed successfully:

- development environment setup
- dependency installation
- Whisper configuration
- speech-to-text testing
- documentation creation

---

# 27. Future Development Plan

Future phases include:
- TypeScript backend implementation
- Express API development
- MongoDB integration
- dashboard implementation
- automated calling integration
- feedback analytics
- website deployment

---

# 28. Final Result

At the end of Phase 1:
- development environment configured successfully
- Whisper speech-to-text setup completed
- audio transcription tested successfully
- GitHub repository created
- technical documentation completed

This completes the initial setup and research phase of the project.
