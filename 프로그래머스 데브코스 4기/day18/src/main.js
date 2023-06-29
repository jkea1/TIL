import App from './App.js';
import Editor from './Editor.js';

const $target = document.querySelector('#app');

// new App({ $target });
new Editor({
  $target,
  initialState: {
    title: '오늘의 학습일지',
    content: '자바스크립트',
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
