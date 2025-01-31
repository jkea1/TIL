from app.api.dependencies.database import Base
from sqlalchemy import Column, Integer, String

# Base를 상속받는 클래스는 SQLAlchemy가 DB 테이블과 매핑된 ORM 모델로 인식한다.
class User(Base):
  __tablename__ = 'users'
  id = Column(Integer, primary_key=True, index=True)
  username = Column(String(100), unique=True, index=True)
  email = Column(String(200))
  hashed_password = Column(String(512))