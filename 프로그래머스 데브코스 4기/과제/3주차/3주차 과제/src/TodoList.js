function TodoList({ $target, initialState, removeTodo, toggleTodo }) {
  if (!new.target) {
    throw new Error("TodoList는 반드시 new 키워드를 사용해주세요!");
  }

  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.state = initialState;

  //상태를 업데이트 기능
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
            <ul>
                ${this.state
                  .map(({ text, isCompleted, id }) => {
                    const textStyle = isCompleted ? "line-through" : "";

                    return `
                      <li>
                        <span style= "text-decoration: ${textStyle}" id=${id} class="text-area">${text}</span>
                        <button id=${id} class="delete-button">❌</button>
                      </li>
                    `;
                  })
                  .join("")}
            </ul>
        `;
  };

  this.render();

  $todoList.addEventListener("click", (e) => {
    e.preventDefault();

    const $target = e.target;
    //toggle
    if ($target.tagName === "SPAN") {
      this.state.map((todo) => {
        if (todo.id.toString() === $target.id) {
          return (todo.isCompleted = !todo.isCompleted);
        }
      });

      storage.setItem("todos", JSON.stringify(this.state));
      toggleTodo(this.state);
      this.render();
    }
    //delete
    if ($target.tagName === "BUTTON") {
      console.log(this.state);
      const nextState = this.state.filter((todo) => {
        return todo.id.toString() !== $target.id;
      });
      storage.setItem("todos", JSON.stringify(this.state));
      removeTodo(nextState);
      this.render();
    }
  });
}
