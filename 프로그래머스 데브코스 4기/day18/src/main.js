import PostEditPage from './PostEditPage.js';
import App from './App.js';
import Editor from './Editor.js';
import { setItem, getItem } from './storage.js';

const $target = document.querySelector('#app');

new App({
  $target,
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
