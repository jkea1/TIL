function App({ $target, initialState }) {
  new Header({ $target, text: "Simple Todo List" });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [
        ...todoList.state,
        {
          text,
        },
      ];
      todoList.setState(nextState);

      localStorage.setItem("todos", JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
