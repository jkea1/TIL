from fastapi import FastAPI
from app.api.routes import router
from app.api.dependencies.middlewares import add_middlewares
from app.api.dependencies.database import init_db

# FastAPI 앱 생성
app = FastAPI()

# 미들웨어 추가
add_middlewares(app)

# DB 초기화
init_db()

# 라우터 등록
app.include_router(router)