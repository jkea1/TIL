import {take, put, call, delay, takeLatest, all, fork} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_SUCCESS, LOG_OUT_SUCCESS, LOG_IN_REQUEST,
  LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_FAILURE, 
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  } from '../reducers/user';

function loginAPI(data) {
  return axios.post('/api/login', data);
}

//요청이 실패할 것을 대비해서 try, catch로 감싸줘야 한다. 
//yield call해서 loginAPI를 실행한고 return 값을 result로 받는다. 
//yield put은 action을 dispatch 하는 기능을 한다. 

//LogIn
function* logIn(action) {
  try {
    //서버가 아직 안 만들어진거다. 
    //const result = yield call(logOutAPI);
    console.log("login saga 확인", action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    })
  }
}

//LogOut
function logOutAPI() {
  return axios.post('/api/logOut');
}

function* logOut() {
  try {
    //const result = yield call(logOutAPI)
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    })
  }
}

//SignUp
function signUpAPI() {
  return axios.post('/api/signUp');
}

function* signUp() {
  try {
    //const result = yield call(signUpAPI)
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    })
  }
}


//rootSaga 만들어 두고 원하는 비동기 action을 하나씩 넣어준다.
//LOG_IN_xxx이라는 action이 실행될때 까지 take = 기다리겠다 는 의미이다. 
//action이 실행되면 logIn 함수를 실행한다.

//eventListener 같은 역할을 한다. 
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUP() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUP),
  ])
}