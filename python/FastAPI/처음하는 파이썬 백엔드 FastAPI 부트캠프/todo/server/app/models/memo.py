from app.api.dependencies.database import Base
from sqlalchemy import Column, ForeignKey, Integer, String

class Memo(Base):
  __tablename__ = 'memo'
  id = Column(Integer, primary_key=True, index=True)
  user_id = Column(Integer, ForeignKey('users.id')) # 온전하게 데이터가 관리 될 수 있도록(데이터의 무결성) 제약 사헝을 거는 역할을 한다.
  title = Column(String(100))
  content = Column(String(1000))