export default function TodoList({ $target, initialState }) {
  const $todoList = document.createElement("div");

  $target.appendChild($todoList);

  this.state = initialState;

  //아래 코드를 통해 투두리스트에 상태를 추가 할 수 있다.
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  //실제 컴포넌트를 그리는 부분
  this.render = () => {
    $todoList.innerHTML = `
      <ul>
        ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
      </ul>
    `;
  };

  this.render();
}
