import {take, put, delay, takeLatest, all, fork, call} from 'redux-saga/effects'
import shortId from 'shortid';
import axios from 'axios';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, 
  REMOVE_POST_REQUEST,REMOVE_POST_SUCCESS,REMOVE_POST_FAILURE,
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS,  LOAD_POSTS_FAILURE, generateDummyPost,
  } from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME, FOLLOW_REQUEST,FOLLOW_SUCCESS ,FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS ,UNFOLLOW_FAILURE } from '../reducers/user';
import { throttle } from 'redux-saga/effects';

//addPost
function addPostAPI(data) {
  return axios.post('/post', { content: data });
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id, 
    });
  } catch (err) {
    console.log("에러확인",err)
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    })
  }
}

//removePost
function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function* removePost(action) {
  try {
    //const result = yield call(removePostAPI, action.data)
    yield delay(1000);
    //post reducer 조작 부분
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data, //게시글의 id가 담겨 있다. 
    });
    //user reducer 조작 부분
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    })
  }
}

//AddComment
function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data); //POST /post/1/comment
}

function* addComment(action) {
  try {
    const result = yield call(addPostAPI, action.data)
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log("addComment error", err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    })
  }
}

//loadPosts
function loadPostsAPI(data) {
  return axios.get('/api/posts', data);
}

function* loadPosts(action) {
  try {
    //const result = yield call(loadPoststAPI, action.data)
    yield delay(1000);
    //load post 성공하면 데이터 10개를 가짜로 만들어 준다. 
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10), //reducer의 action.data로 들어가서 원래 mainPosts와 합쳐진다. 
    });
  } catch (err) {
    console.log("loadPosts saga err 확인", err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

//follow
function followAPI(data) {
  return axios.post('/api/unfollow');
}

function* follow(action) {
  try {
    //const result = yield call(followAPI, action.data)
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data, //request 신호 받아서 success로 id data 넘겨준다. 
    });
  } catch (err) {
    console.log("😎");
    yield put({
      type: FOLLOW_FAILURE,
      data: err.response.data,
    });
  }
}

//unfollow
function unfollowAPI(data) {
  return axios.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    //const result = yield call(followAPI, action.data)
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.log("😎");
    yield put({
      type: UNFOLLOW_FAILURE,
      data: err.response.data,
    })
  };
}


//rootSaga 만들어 두고 원하는 비동기 action을 하나씩 넣어준다.
//ADD_xxx_xxx이라는 action이 실행될때 까지 take = 기다리겠다 는 의미이다. 
//action이 실행되면 addPost 함수를 실행한다.

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLoadPosts() {
  yield throttle(1000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga() {
  yield all([
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchAddPost),
    fork(watchLoadPosts),
    fork(watchRemovePost), 
    fork(watchAddComment),
  ])
}