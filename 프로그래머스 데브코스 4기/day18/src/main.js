import App from './App.js';
import Editor from './Editor.js';
import { setItem, getItem } from './storage.js';

const $target = document.querySelector('#app');

const TEMP_POST_SAVE_KEY = 'temp-post';

const post = getItem(TEMP_POST_SAVE_KEY, {
  title: '',
  content: '',
});

let timer = null;

new Editor({
  $target,
  initialState: post,
  onEditing: (post) => {
    // 수정 할때 마다 onEditing이 발생한다.
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setItem(TEMP_POST_SAVE_KEY, {
        ...post,
        tempSaveData: new Date(),
      });
    }, 1000);
  },
});

// const DUMMY_DATA = [
//   {
//     id: 1,
//     title: '테스트1',
//   },
//   {
//     id: 2,
//     title: '테스트2',
//   },
//   {
//     id: 3,
//     title: '테스트3',
//   },
//   {
//     id: 4,
//     title: '테스트4',
//   },
// ];
