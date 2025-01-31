from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

def add_middlewares(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_credentials=True,
        allow_methods=["*"],  # 모든 HTTP 메서드 허용
        allow_headers=["*"],  # 모든 헤더 허용
    )

    app.add_middleware(SessionMiddleware, secret_key="my-secret-key")