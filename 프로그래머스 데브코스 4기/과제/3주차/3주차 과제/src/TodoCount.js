function TodoCount({ $target, initialState }) {
  if (!new.target) {
    throw new Error("new 키워드를 사용해 주세요!");
  }

  const $todoCount = document.createElement("div");

  $target.appendChild($todoCount);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    let completedTodo = 0;
    this.state.map(({ isCompleted }) => {
      if (isCompleted) {
        completedTodo++;
      }
    });
    $todoCount.textContent = completedTodo + "/" + this.state.length;
  };

  this.render();
}
