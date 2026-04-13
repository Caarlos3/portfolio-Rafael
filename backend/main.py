import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from engine import WorkflowEngine
from session_manager import SessionManager

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Rafael Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

session_manager = SessionManager()

class ChatRequest(BaseModel):
    input_data: str
    session_id: str | None = None

@app.get("/")
async def root():
    return {
        "message": "Welcome to Rafael Portfolio API",
        "status": "online"
    }

@app.post("/chat/rafa")
def chat_rafa(request: ChatRequest):
    try:
        logger.info(f"Rafa chatbot request | session: {request.session_id}")

        engine = WorkflowEngine.load_from_json(
            "workflow_rafa.json",
            session_manager=session_manager
        )

        stream = engine.run(
            request.input_data,
            session_id=request.session_id
        )

        def event_stream():
            for chunk in stream:
                yield chunk

        return StreamingResponse(event_stream(), media_type="text/plain")

    except Exception as e:
        logger.error(f"Error in Rafa chatbot: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)