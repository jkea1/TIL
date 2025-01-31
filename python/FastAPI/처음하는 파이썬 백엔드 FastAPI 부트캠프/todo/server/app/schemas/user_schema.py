from pydantic import BaseModel
from typing import Optional

# 회원가입시 데이터 검증
class UserCreate(BaseModel):
  username: str
  email: str
  password: str

# 회원로그인시 데이터 검증
class UserLogin(BaseModel):
  username: str
  password: str