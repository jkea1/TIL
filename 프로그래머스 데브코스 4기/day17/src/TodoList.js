export default function TodoList({
  $target,
  initialState,
  onToggle,
  onRemove,
}) {
  const $todo = document.createElement("div");

  $target.appendChild($todo);

  //initialState
  // {
  //   todos: []
  // }

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { isLoading, todos } = this.state;

    if (!isLoading && todos.length === 0) {
      $todo.innerHTML = `Todo가 없습니다.`;
      return;
    }

    $todo.innerHTML = `
      <ul>
        ${todos
          .map(
            ({ _id, content, isCompleted }) => `
              <li data-id="${_id}" class = "todo-item">
                ${isCompleted ? `<s>${content}</s>` : content}
                <button class="remove">❌</button>
              </li>
            `
          )
          .join("")}
      </ul>
    `;
  };

  //li의 event를 감지하게 되면 너무 자주 렌더링해야 하므로 $todo에 거는게 좋다.
  $todo.addEventListener("click", (e) => {
    //e.target을 통해 실제 event가 일어난 곳을 찾는다.
    const $li = e.target.closest(".todo-item"); //가장 가까운 li를 불러온다.

    const { className } = e.target;
    if ($li) {
      const { id } = $li.dataset; //dataset은 data 접두사가 붙은 것을 모두 뽑아 올 수 있다.
      if (className === "remove") {
        onRemove(id);
      } else {
        onToggle(id);
      }
    }
  });
  this.render();
}
