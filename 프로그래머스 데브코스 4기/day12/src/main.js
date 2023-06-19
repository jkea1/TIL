const data = [
  {
    text: "JavaScript 공부하기",
  },
  {
    text: "JavaScript 복습하기",
  },
];

const $app = document.querySelector(".app");

new App({
  $target: $app,
  initialState: data,
});
