from fastapi import FastAPI, UploadFile, File
import whisper
import tempfile
import os

app = FastAPI()

model = whisper.load_model("base")


@app.get("/")
def health_check():
    return {
        "message": "Whisper API working"
    }


@app.post("/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    suffix = os.path.splitext(file.filename or "")[1] or ".webm"

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=suffix
    ) as temp_file:
        temp_file.write(await file.read())
        temp_path = temp_file.name

    try:
        result = model.transcribe(temp_path)

        return {
            "success": True,
            "transcript": result["text"].strip()
        }

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)