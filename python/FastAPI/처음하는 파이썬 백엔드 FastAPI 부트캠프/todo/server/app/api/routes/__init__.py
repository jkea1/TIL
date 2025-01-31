from fastapi import APIRouter
from app.api.routes import users, memos

router = APIRouter()

router.include_router(users.router, prefix="/users", tags=["users"])
router.include_router(memos.router, prefix="/memos", tags=["memos"])