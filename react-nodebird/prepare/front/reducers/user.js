import produce from 'immer';

export const initialState = {
  followLoading: false, //팔로우 시도중
  followDone: false,
  followError: null, 
  unfollowLoading: false, //언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false, //로그인 시도중, true면 로딩창을 띄운다. 
  logInDone: false,
  logInError: null, //false로 해도 된다. 
  logOutLoading: false, //로그아웃 시도중, true면 로딩창을 띄운다.
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, //회원가입하기 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false, //닉네임 변경 시도중
  changeNicknameDone: false, 
  changeNicknameError: null, 
  me: null, //me는 로그인한 사용자 정보이다. 
  signUpDate: {},
  loginDate: {},
}

//오타에 취약한 애들은 변수로 만들자. 
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

//user reducer 상태를 바꿀 수 있는 action 
//reducer를 바꾸기 위해서는 action을 줘야 한다. 
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
  ...data,
  nickname : '정진경',
  id: 1, 
  //시퀄라이즈에서 합쳐주기 때문에 대문자이다. 
  Posts: [{id: 1}],
  Followings: [{nickname: '부기초'}, {nickname: 'ea'}, {nickname: 'gang'}],
  Followers: [{nickname: '부기초'}, {nickname: 'ea'}, {nickname: 'gang'}],
})

//동적 action (=action creator)
//SUCCESS와 FAILURE 는 saga가 put으로 호출해 준다. 
export const loginRequestAction = (data) => {
  return {
    type : 'LOG_IN_REQUEST',
    data,
  }
};

export const logoutRequestAction = () => {
  return {
    type : 'LOG_OUT_REQUEST',
  }
};

//case 로그인 요청
//data를 보여줄 것인가는 정책에 따라서 다르다. 
//1. 로딩창이 돌아가고 있을때 배경화면에 데이터를 유지해서 보여줄것인가 
//2. 그 데이터마저 없애서 보여줄것인가 me : null 을 추가해준다.

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => { //state라는 이름이 draft로 바뀐다. 
    switch (action.type) {
      //로그인
      case LOG_IN_REQUEST : 
        draft.logInLoading = true;
        draft.logInError = null; //로딩할때는 error는 없애준다. 
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS : 
        draft.logInLoading =  false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE : 
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      
      //로그아웃
      case LOG_OUT_REQUEST : 
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      
      case LOG_OUT_SUCCESS : 
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE : 
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      
        //사인업
      case SIGN_UP_REQUEST : 
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS : 
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE : 
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

        //닉네임 변경
      case CHANGE_NICKNAME_REQUEST : 
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS : 
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE : 
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      
      //프로필 정보 
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({id: action.data});
        break;
        /* return {
            //불변성 지켜줘야 한다. 
            ...state,
            me: {
              ...state.me, 
              Posts: [{id: action.data}, ...state.me.Posts]
            },
          }; */
        
        //remove action과 같은 같은 id를 가진 게시글이 있으면 지운다. 
        case REMOVE_POST_OF_ME:
          draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
          break;
          /* return {
            ...state,
            me: {
              ...state.me, 
              Posts: state.me.Posts.filter((v) => v.id !== action.data), 
            },
          }; */

        //follow
        case FOLLOW_REQUEST : 
          draft.followLoading = true;
          draft.followError = null; //로딩할때는 error는 없애준다. 
          draft.followDone = false;
          break;
        case FOLLOW_SUCCESS : 
          draft.followLoading =  false;
          draft.followDone = true;
          draft.me.Followings.push({id: action.data});
          break;
        case FOLLOW_FAILURE : 
          draft.followLoading = false;
          draft.followError = action.error;
          break;  
        
        //unfollow
        case UNFOLLOW_REQUEST : 
          draft.unfollowLoading = true;
          draft.unfollowError = null; //로딩할때는 error는 없애준다. 
          draft.unfollowDone = false;
        break;
        case UNFOLLOW_SUCCESS : 
          draft.unfollowLoading =  false;
          draft.unfollowDone = true;
          draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data); //action.data id인 사람만 빠지게 된다. 
          break;
        case UNFOLLOW_FAILURE : 
          draft.unfollowLoading = false;
          draft.unfollowError = action.error;
          break;
  
      default:
        break;
    }
  });
}

export default reducer;
