import {all, fork} from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

//all은 배열 안의 것들을 한번에 실행해 준다. 
//fork는 함수를 실행해 준다. 
export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(userSaga),
  ]);
}