function App({ $target, initialState }) {
  new Header({ $target, text: "Simple Todo List" });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const id = Date.now();
      const nextState = [
        ...todoList.state,
        {
          text,
          isCompleted: false,
          id,
        },
      ];
      todoList.setState(nextState);
      todoCount.setState(nextState);

      storage.setItem("todos", JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,

    //toggle todo
    toggleTodo: (nextState) => {
      todoList.setState(nextState);
      todoCount.setState(nextState);
    },

    //remove todo
    removeTodo: (nextState) => {
      todoList.setState(nextState);
      todoCount.setState(nextState);
    },
  });

  const todoCount = new TodoCount({ $target, initialState });
}
