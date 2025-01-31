from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DATABASE_URL = "mysql+pymysql://root:wlsrud123!@localhost/memo_app"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
  db = SessionLocal()

  try:
    yield db
  finally:
    db.close()

# db 테이블 자동 생성
def init_db():
  Base.metadata.create_all(bind=engine)