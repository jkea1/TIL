from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from app.schemas.memo_schema import MemoCreate, MemoUpdate
from app.api.dependencies.database import get_db
from app.services.memo_service import get_memos, create_memo, update_memo, delete_memo

router = APIRouter()

@router.get('/memos/')
async def list_memos(request: Request, db: Session = Depends(get_db)):
    username = request.session.get('username')
    if username is None:
        raise HTTPException(status_code=401, detail='Not authorized')
    return get_memos(username, db)

@router.post('/memos/')
async def create_new_memo(request: Request, memo: MemoCreate, db: Session = Depends(get_db)):
    username = request.session.get('username')
    if username is None:
        raise HTTPException(status_code=401, detail='Not authorized')
    return create_memo(username, memo, db)

@router.put('/memos/{memo_id}')
async def edit_memo(request: Request, memo_id: int, memo: MemoUpdate, db: Session = Depends(get_db)):
    username = request.session.get('username')
    if username is None:
        raise HTTPException(status_code=401, detail='Not authorized')
    return update_memo(username, memo_id, memo, db)

@router.delete('/memos/{memo_id}')
async def remove_memo(request: Request, memo_id: int, db: Session = Depends(get_db)):
    username = request.session.get('username')
    if username is None:
        raise HTTPException(status_code=401, detail='Not authorized')
    return delete_memo(username, memo_id, db)
