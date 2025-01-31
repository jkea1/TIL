from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.schemas.user_schema import UserCreate, UserLogin
from app.api.dependencies.database import get_db
from app.services.user_service import signup_user, login_user, logout_user

router = APIRouter()

@router.post('/signup')
async def signup(signup_data: UserCreate, db: Session = Depends(get_db)):
    return signup_user(signup_data, db)

@router.post('/login')
async def login(request: Request, login_data: UserLogin, db: Session = Depends(get_db)):
    return login_user(request, login_data, db)

@router.post('/logout')
async def logout(request: Request):
    return logout_user(request)
