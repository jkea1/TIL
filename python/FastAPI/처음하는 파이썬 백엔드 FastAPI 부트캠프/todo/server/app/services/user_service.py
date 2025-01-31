from sqlalchemy.orm import Session
from fastapi import HTTPException, Request
from app.models.user import User
from app.schemas.user_schema import UserCreate, UserLogin
from app.api.dependencies.auth import get_password_hash, verify_password

def signup_user(signup_data: UserCreate, db: Session):
    existing_user = db.query(User).filter(User.username == signup_data.username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail='이미 동일한 사용자 이름을 사용하는 사용자가 있습니다.')

    hashed_password = get_password_hash(signup_data.password)
    new_user = User(username=signup_data.username, email=signup_data.email, hashed_password=hashed_password)
    db.add(new_user)

    try:
        db.commit()
    except Exception:
        raise HTTPException(status_code=500, detail='회원가입에 실패했습니다.')

    db.refresh(new_user)
    return {'message': 'Account created successfully'}

def login_user(request: Request, login_data: UserLogin, db: Session):
    user = db.query(User).filter(User.username == login_data.username).first()

    if user and verify_password(login_data.password, user.hashed_password):
        request.session['username'] = user.username
        return {'message': 'Logged in successfully'}
    else:
        raise HTTPException(status_code=401, detail='Invalid credentials')

def logout_user(request: Request):
    request.session.pop('username', None)
    return {'message': 'Logged out successfully'}
