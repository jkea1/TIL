import { setItem, getItem, removeItem } from "./storage.js";

const TODO_TEMP_SAVE_KEY = "TODO_TEMP_SAVE_KEY";

export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);

  //서버가 통신 중일때는 버튼을 비활성화 시키거나 화면을 블락킹하거나 하는데
  //우리가 할 방식은 블락킹을 최소화 하고 UI 접근도 막지 않으면서 서버 통신 누락도 막는 방법이다.

  this.render = () => {
    $form.innerHTML = `
      <input type="text" placeholder="할일을 입력하세요.">
      <button>추가하기</button>
    `;
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $input = $form.querySelector("input");
    const content = $input.value;

    onSubmit(content);
    $input.value = "";

    removeItem(TODO_TEMP_SAVE_KEY);
  });

  this.render();

  const $input = $form.querySelector("input");
  $input.value = getItem(TODO_TEMP_SAVE_KEY, "");

  $input.addEventListener("keyup", (e) => {
    setItem(TODO_TEMP_SAVE_KEY, e.target.value);
  });
}
