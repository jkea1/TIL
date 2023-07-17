import TodoList from "./TodoList.js";
import { request } from "./api.js";
import SyncTaskManager from "./SyncTaskManager.js";

export default function App({ target }) {
  const tasks = new SyncTaskManager();

  // 이 App의 state 모양
  this.state = {
    todos: [],
  };

  const handleTodoDrop = async (todoId, updateValue) => {
    console.log(`완료처리된 Todo에서 ${todoId}가 넘어옴!`);
    const nextTodos = [...this.state.todos];
    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos[todoIndex].isCompleted = updateValue;

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    // tasks.addTask(async () => {
    //   await request(`/${todoId}/toggle`, {
    //     method: "PUT",
    //   });
    // });

    tasks.addTask({
      url: `/${todoId}/toggle`,
      method: "PUT",
    });
  };

  const handleTodoRemove = (todoId) => {
    const nextTodos = [...this.state.todos];

    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos.splice(todoIndex, 1);

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    tasks.addTask({});
  };

  const incompletedTodoList = new TodoList({
    target,
    initialState: {
      title: "완료되지 않은 일들",
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, false),
  });
  const completedTodoList = new TodoList({
    target,
    initialState: {
      title: "완료된 일들",
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, true),
  });

  this.setState = (nextState) => {
    this.state = nextState;

    const { todos } = this.state;

    // 완료되지 않은
    incompletedTodoList.setState({
      ...incompletedTodoList.state,
      todos: todos.filter((todo) => !todo.isCompleted),
    });
    // 완료된
    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter((todo) => todo.isCompleted),
    });
  };

  const fetchTodos = async () => {
    const todos = await request("");

    this.setState({
      ...this.state,
      todos,
    });
  };

  fetchTodos();

  const button = document.createElement("button");
  button.textContent = "변경 내용 동기화";
  target.appendChild(button);

  button.addEventListener("click", () => tasks.run());
}
