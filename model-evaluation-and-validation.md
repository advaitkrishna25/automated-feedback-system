# AI Model Evaluation And Validation

---

# 1. Introduction

The Automated Feedback Calling System requires an Artificial Intelligence (AI) analysis layer capable of understanding customer feedback conversations and generating meaningful insights.

The AI layer is responsible for:
- sentiment analysis
- emotion detection
- customer satisfaction scoring
- urgency identification
- follow-up recommendations
- feedback summarization

This document describes the evaluation, selection, installation, and validation process used to identify the most suitable AI model for the project.

---

# 2. Purpose Of The AI Analysis Layer

The purpose of the AI analysis layer is to transform raw customer feedback into structured information that can be stored, analyzed, and visualized.

Instead of manually reading customer responses, the AI model automatically determines:
- customer sentiment
- emotional state
- satisfaction level
- urgency level
- follow-up requirements

This allows healthcare organizations to quickly identify dissatisfied or high-risk patients.

---

# 3. Functional Requirements

The AI model must support the following capabilities.

## Required Features

- Sentiment Analysis
- Emotion Detection
- Satisfaction Scoring
- Urgency Detection
- Follow-Up Recommendation
- Feedback Summarization
- Structured JSON Generation

---

## Language Requirements

The system must support:

- English
- Hindi
- Malayalam

Additional language support is considered beneficial for future scalability.

---

## Deployment Requirements

The AI model should:

- support local deployment
- support offline execution
- integrate with Ollama
- have strong community support
- support future production deployment

---

# 4. Model Evaluation Criteria

The following criteria were used to evaluate candidate models.

| Criteria | Description |
|---|---|
| Accuracy | Ability to understand customer feedback |
| Multilingual Support | Ability to process multiple languages |
| Indian Language Support | Hindi and Malayalam support |
| Hardware Requirements | Ability to run on consumer hardware |
| Community Support | Active ecosystem and documentation |
| Ollama Compatibility | Local deployment support |
| Structured Output Generation | Ability to produce JSON outputs |
| Scalability | Future production feasibility |

---

# 5. Models Evaluated

The following open-source models were evaluated during the research phase.

## Qwen 2.5

Developed by Alibaba Cloud.

Strengths:
- strong multilingual support
- excellent structured output generation
- active community
- Ollama support

---

## Llama 3.1

Developed by Meta.

Strengths:
- strong reasoning capabilities
- large ecosystem
- extensive community adoption

---

## Mixtral

Developed by Mistral AI.

Strengths:
- high performance
- strong reasoning capabilities
- efficient architecture

---

## DeepSeek

Developed by DeepSeek AI.

Strengths:
- strong analytical performance
- good multilingual capabilities
- growing ecosystem

---

## Gemma

Developed by Google.

Strengths:
- lightweight deployment
- efficient resource usage
- active development

---

# 6. Final Model Selection

## Selected Model

```text
Qwen 2.5 7B
```

---

## Why Qwen 2.5 7B Was Selected

Qwen 2.5 7B provided the best balance between:

- performance
- multilingual support
- hardware requirements
- local deployment feasibility
- community support
- Ollama compatibility

The model was capable of generating structured outputs while remaining practical for local deployment.

---

# 7. Hardware Configuration

The evaluation environment consisted of:

| Component | Specification |
|---|---|
| CPU | Intel Core Ultra 7 255HX |
| GPU | NVIDIA RTX 5060 Laptop GPU |
| RAM | 32 GB |
| Operating System | Windows 11 |

---

# 8. Ollama Installation

## What Is Ollama

Ollama is a local AI model execution platform.

Purpose:
- local AI deployment
- simplified model management
- API access
- offline inference

Official website:

```text
https://ollama.com
```

---

# 9. Qwen 2.5 Installation

The selected model was downloaded through Ollama.

Command used:

```bash
ollama pull qwen2.5:7b
```

---

# 10. Verify Model Installation

To verify successful installation:

```bash
ollama run qwen2.5:7b
```

Example prompt:

```text
What is sentiment analysis?
```

Successful response confirmed:

- model downloaded correctly
- Ollama functioning correctly
- local inference working

---

# 11. AI Prompt Design

A structured prompt was designed to generate consistent outputs.

The model was instructed to return results in JSON format.

Required fields:

- language
- sentiment
- emotion
- satisfaction_score
- urgency_level
- follow_up_required
- summary

---

# 12. Structured JSON Output Format

The following schema was used during testing.

```json
{
  "language": "",
  "sentiment": "",
  "emotion": "",
  "satisfaction_score": 0,
  "urgency_level": "",
  "follow_up_required": false,
  "summary": ""
}
```

---

# 13. English Language Validation

## Test Objective

Validate sentiment and emotion analysis using English feedback.

Example feedback:

```text
The doctor was very helpful and professional, but I had to wait nearly two hours before my appointment.
```

---

## Result

The model successfully identified:

- mixed sentiment
- patient satisfaction
- waiting time dissatisfaction
- moderate urgency

Result:

```text
Passed
```

---

# 14. Hindi Language Validation

## Test Objective

Validate Hindi language support.

Example feedback:

```text
डॉक्टर का व्यवहार बहुत अच्छा था और मुझे इलाज से पूरी तरह संतुष्टि मिली।
```

---

## Result

The model successfully:

- identified Hindi language
- generated sentiment classification
- produced structured JSON output

Result:

```text
Passed
```

---

# 15. Malayalam Language Validation

## Test Objective

Validate Malayalam language support.

Example feedback:

```text
ഡോക്ടറും സ്റ്റാഫും വളരെ നല്ല രീതിയിൽ പെരുമാറി.
```

---

## Result

The model successfully:

- identified Malayalam language
- detected positive sentiment
- generated structured output

Result:

```text
Passed
```

---

# 16. Mixed Language Validation

## Test Objective

Validate multilingual processing.

Example:

```text
Doctor was very good but appointment സമയം വളരെ കൂടുതലായിരുന്നു.
```

---

## Result

The model demonstrated multilingual understanding.

Result:

```text
Partial Success
```

Additional testing will be conducted during future development stages.

---

# 17. High-Risk Patient Scenario Validation

## Test Objective

Determine whether the model can identify urgent healthcare situations.

Example feedback:

```text
I have severe chest pain and nobody has called me back. I am very worried.
```

---

## Result

The model successfully identified:

- anxiety
- high urgency
- follow-up requirement

Result:

```text
Passed
```

---

# 18. Validation Results Summary

| Test Category | Result |
|---|---|
| English Analysis | Passed |
| Hindi Analysis | Passed |
| Malayalam Analysis | Passed |
| Sentiment Analysis | Passed |
| Emotion Detection | Passed |
| Urgency Detection | Passed |
| Structured JSON Generation | Passed |
| High-Risk Detection | Passed |
| Mixed Language Analysis | Partial Success |

---

# 19. Key Findings

The evaluation demonstrated that Qwen 2.5 7B is capable of:

- multilingual analysis
- sentiment classification
- emotion detection
- urgency assessment
- satisfaction scoring
- structured output generation

The model satisfies the core requirements of the Automated Feedback Calling System.

---

# 20. Current Phase Completion

The following tasks were completed successfully:

- model research
- model comparison
- model evaluation
- model selection
- Ollama installation
- Qwen installation
- multilingual validation
- JSON output validation
- AI proof of concept

---

# 21. Future Development Plan

Future workflow:

```text
Patient Audio
        ↓
Whisper Large-v3
        ↓
Transcript
        ↓
Qwen 2.5 7B
        ↓
Structured JSON Analysis
        ↓
Database Storage
        ↓
Dashboard Visualization
```

---

# 22. Final Result

At the end of Phase 3:

- AI model evaluation completed successfully
- Qwen 2.5 7B selected as the primary analysis model
- local deployment validated successfully
- multilingual testing completed successfully
- structured JSON generation verified
- AI analysis proof of concept completed

This completes the AI Model Evaluation and Validation phase of the project and prepares the system for backend implementation and automated transcript processing.