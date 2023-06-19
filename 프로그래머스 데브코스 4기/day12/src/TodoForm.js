function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);

  //이벤트를 바인딩하는 코드가 render가 실행될때 마다 호출될 수 있으니까 안전하게
  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo" />
      <button>Add</button>
    `;

    if (!isInit) {
      $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const $todo = $form.querySelector("input[name=todo]");
        const text = $todo.value;

        if (text.length > 1) {
          $todo.value = "";
          onSubmit(text);
        }
      });
      isInit = true;
    }
  };

  this.render();
}
