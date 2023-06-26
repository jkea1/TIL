import { request } from "./api.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({ $target }) {
  this.state = {
    username: "ea",
    todos: [],
    isTodoLoading: false,
  };

  const header = new Header({
    $target,
    initialState: {
      isLoading: this.state.isTodoLoading,
      username: this.state.username,
    },
  });
  new TodoForm({
    $target,
    onSubmit: async (content) => {
      const todo = {
        content,
        isCompleted: false,
      };

      // 낙관적 업데이트
      // api가 잘 동작할거다 라고 낙관적으로 보고
      // 클라이언트에 먼저 추가 하고 서버와 통신한 것이다.
      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });

      await request(`/${this.state.username}?delay=3000`, {
        method: "POST",
        //request body 부분은 백엔드와 잘 협의 해야 한다.
        body: JSON.stringify(todo),
      });
      await fetchTodos(); //init() 해 줘야
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    header.setState({
      isLoading: this.state.isTodoLoading,
      username: this.state.username,
    });
    todoList.setState({
      isLoading: this.state.isTodoLoading,
      todos: this.state.todos,
    });
  };

  const todoList = new TodoList({
    $target,
    initialState: {
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
    },
    onToggle: async (id) => {
      await request(`/${this.state.username}/${id}/toggle`, {
        method: "PUT",
      });
      await fetchTodos();
    },
    onRemove: async (id) => {
      await request(`/${this.state.username}/${id}`, {
        method: "DELETE",
      });
      await fetchTodos();
    },
  });

  const fetchTodos = async () => {
    const { username } = this.state;
    if (username) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });
      const todos = await request(`/${username}?delay=5000`);
      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  fetchTodos();
}
