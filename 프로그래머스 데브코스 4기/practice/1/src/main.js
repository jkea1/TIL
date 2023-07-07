import DocumentList from "./DocumentList.js";

const target = document.querySelector("#app");

const DUMMY_DATA = [
  {
    id: 1,
    title: 제목1,
  },
  {
    id: 2,
    title: 제목2,
  },
];

new DocumentList({
  target,
  initialState: DUMMY_DATA,
});
