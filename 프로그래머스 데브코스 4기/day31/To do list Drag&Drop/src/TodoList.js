export default function TodoList({ target, initialState }) {
  const todoList = document.createElement("div");
  target.appendChild(todoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { title, todos } = this.state;
    todoList.innerHTMl = `
    <h2>${title}</h2>
    <ul>
      ${todos
        .map(
          (todo) =>
            `
            <li>${todo}</li>
          `
        )
        .join("")}
    </ul>
    `;
  };
  this.render();
}
