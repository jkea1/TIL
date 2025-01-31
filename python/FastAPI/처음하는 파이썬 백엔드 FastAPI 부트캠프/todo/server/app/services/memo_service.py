from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.memo import Memo
from app.models.user import User
from app.schemas.memo_schema import MemoCreate, MemoUpdate

def get_memos(username: str, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')

    memos = db.query(Memo).filter(Memo.user_id == user.id).all()
    return {
        "username": username,
        "memos": [{'id': memo.id, 'title': memo.title, 'content': memo.content} for memo in memos]
    }

def create_memo(username: str, memo_data: MemoCreate, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')

    new_memo = Memo(user_id=user.id, title=memo_data.title, content=memo_data.content)
    db.add(new_memo)
    db.commit()
    db.refresh(new_memo)

    return new_memo

def update_memo(username: str, memo_id: int, memo_data: MemoUpdate, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')

    db_memo = db.query(Memo).filter(Memo.user_id == user.id, Memo.id == memo_id).first()
    if not db_memo:
        raise HTTPException(status_code=404, detail='Memo not found')

    if memo_data.title:
        db_memo.title = memo_data.title
    if memo_data.content:
        db_memo.content = memo_data.content

    db.commit()
    db.refresh(db_memo)

    return db_memo

def delete_memo(username: str, memo_id: int, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')

    db_memo = db.query(Memo).filter(Memo.user_id == user.id, Memo.id == memo_id).first()
    if not db_memo:
        raise HTTPException(status_code=404, detail='Memo not found')

    db.delete(db_memo)
    db.commit()

    return {"message": "Memo deleted"}
