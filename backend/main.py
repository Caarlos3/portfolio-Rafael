from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Rafael Portfolio API")

# Add CORS to allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Rafael Portfolio API", "status": "online"}

@app.get("/api/projects")
async def get_projects():
    # Example projects from the backend
    return [
        {
            "id": 1,
            "title": "Arquitectura Backend Microservicios",
            "description": "Un sistema escalable diseñado con Python y Kafka.",
            "tech": ["Python", "FastAPI", "Kafka", "PostgreSQL"]
        },
        {
            "id": 2,
            "title": "Machine Learning Dashboard",
            "description": "Visualización y análisis predictivo en tiempo real.",
            "tech": ["Python", "Scikit-Learn", "React"]
        }
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
