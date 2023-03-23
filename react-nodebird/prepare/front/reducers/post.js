import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

//대문자로 시작하는 애들은 서버에서 주는 데이터이다. 
//id가 다 붙어있어야 한다. 
export const initialState = {
  mainPosts: [], //서버에서 data 받아온다. 
  imagePaths: [],
  hasMorePosts: true, //처음에는 true로 둬서 처음 데이터는 무조건 겨져오게 한다. false면 dummyposts를 가져오려는 시도를 막는다. 
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};


//서버에서 정보를 불러오는 것을 아래로 대체 한다. 
//말 그대로 dummydata를 만들어 주는 함수이다. 
/* export const generateDummyPost = (number) => Array(number).fill().map(() => ({
  id: shortId.generate(),
  User: {
    id: shortId.generate(),
    nickname: faker.name.findName()
  },
  content: faker.lorem.paragraph(),
  Images: [{
    src: faker.image.image(),
  }],
  Comments: [{
    User: {
      id : shortId.generate(),
      nickname: faker.name.findName()
    },
    content: faker.lorem.sentence(),
  }],
})); */

/* initialState.mainPosts = initialState.mainPosts.concat(); */

//action
//이렇게 변수로 빼주면 재활용할 수 있고 오타가 났을때 재활용 할 수 있다. 
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

//동적 action creator
export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data, //쓴 게시글을 받아서 보내준다. 
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data, //쓴 글을 받아서 보내준다. 
});

/* const dummyPost = (data) => ({
  id : data.id,
  content: data.content,
  User: {
    id: 1, 
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
}); */

/* const dummyComment = (data) => ({
  id : shortId.generate(),
  content: data,
  User: {
    id: 1, 
    nickname: '제로초',
  },
}) */

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      
      //loadPost
      case LOAD_POSTS_REQUEST :
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null; //null 아니라 false 된다. 
        break;
      case LOAD_POSTS_SUCCESS : 
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data); //여기 주의하자!
        draft.hasMorePosts = draft.mainPosts.length < 50; //이렇게 숫자를 제한 할 수 있네, 결과값으로 true 혹은 false가 들어간다. 
        break;
      case LOAD_POSTS_FAILURE : 
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      
      //addPost
      case ADD_POST_REQUEST :
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null; //null 아니라 false 된다. 
        break;
      case ADD_POST_SUCCESS : 
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data); //mainPost가 앞에 들어가야 한다. 그래야 새로운 글이 위에 올라간다. 
        break;
      case ADD_POST_FAILURE : 
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      //remove post
      case REMOVE_POST_REQUEST :
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null; //null 아니라 false 된다. 
        break;
      case REMOVE_POST_SUCCESS : 
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data),//조건에 맞는 게시글을 지워주고(filter) 나머지는 남는다. 
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE : 
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      //addComment
      //먼저 게시글의 id를 찾아서 게시글에 접근 -> 그 안에 Comments에 접근해서 정보를 넣어준다. 
      case ADD_COMMENT_REQUEST : 
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null; //null 아니라 false도 된다.   
        break;
      case ADD_COMMENT_SUCCESS : {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        /* 불변성의 유지하기 위한 코드이다. 
        원래 있던 comment들은 유지가 되고 새로운 comment가 추가 된다. 
        const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        const post = {...state.mainPosts[postIndex]};
        post.Comments = [dummyComment(action.data.content), ...post.Comments]; //mainPost가 앞에 들어가야 한다. 그래야 새로운 글이 위에 올라간다. 
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post; */
      }
      case ADD_COMMENT_FAILURE : 
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
}

export default reducer;

//faker 없을때 만들었던 dummydata
/* {
  id: 1,
  User: {
    id: 1,
    nickname: '제로초',
  },
  content: '첫 번째 게시글 #해시태그 #익스프레스',
  Images: [{
    id: shortId.generate(),
    src: 'https://www.theglobetrottingteacher.com/wp-content/uploads/2019/09/Cordoba-Spain-Roman-Bridge.jpg',
  }, {
    id: shortId.generate(),
    src: 'https://www.theglobetrottingteacher.com/wp-content/uploads/2019/09/Cordoba-Spain-Roman-Bridge.jpg',
  }, {
    id: shortId.generate(),
    src: 'https://www.theglobetrottingteacher.com/wp-content/uploads/2019/09/Cordoba-Spain-Roman-Bridge.jpg',
  }],
  Comments: [{
    id: shortId.generate(),
    User: {
      nickname: 'nero',
    },
      content: '스페인 가고 싶다.',
  }, {
    id: shortId.generate(),
    User: {
      nickname: 'hero',
    },
    content: '나도 가고 싶다.'
  }]
} */