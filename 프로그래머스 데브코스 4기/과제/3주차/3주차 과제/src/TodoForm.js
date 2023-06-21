function TodoForm({ $target, onSubmit }) {
  if (!new.target) {
    throw new Error("TodoForm은 반드시 new 키워드를 사용해주세요!");
  }

  const $form = document.createElement("form");

  $target.appendChild($form);

  //이벤트를 바인딩하는 코드가 render가 실행될때 마다 호출될 수 있으니까 안전하게
  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo" />
      <button>➕</button> 
    `;

    if (!isInit) {
      $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const $todo = $form.querySelector("input[name=todo]");
        const text = $todo.value;

        const minTextLength = 2;
        if (text.length >= minTextLength) {
          $todo.value = "";
          onSubmit(text);
        } else {
          alert("두 글자 이상 입력해 주세요! 😎");
        }
      });
      isInit = true;
    }
  };

  this.render();
}
