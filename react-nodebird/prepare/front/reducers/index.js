import {HYDRATE} from 'next-redux-wrapper';
import { combineReducers } from 'redux';
//쪼갰던 reducer 2개 불러오기
import user from './user';
import post from './post';

//reducer
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE :  
        console.log('HYDRATE : ', action);
        return {...state, ...action.payload};
      default : 
        return state;
    }
  },
  user, 
  post,
});
  
    
    

export default rootReducer;
