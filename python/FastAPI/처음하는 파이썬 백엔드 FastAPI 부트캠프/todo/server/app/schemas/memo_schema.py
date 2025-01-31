from pydantic import BaseModel
from typing import Optional

class MemoCreate(BaseModel):
  title: str
  content: str

# Optional는 디폴트 값 None을 설정해 줘야 한다.
class MemoUpdate(BaseModel):
  title: Optional[str] = None
  content: Optional[str] = None