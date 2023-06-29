import { request } from "./api.js";
import UserList from "./UserList.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { parse } from "./querystring.js";

export default function App({ $target }) {
  const $userListContainer = document.createElement("div");
  const $todoListContainer = document.createElement("div");

  $target.appendChild($userListContainer);
  $target.appendChild($todoListContainer);

  this.state = {
    userList: [],
    selectedUsername: null,
    todos: [],
    isTodoLoading: false,
  };

  const userList = new UserList({
    $target: $userListContainer,
    initialState: this.state.userList,
    onSelect: async (username) => {
      history.pushState(null, null, `/?selectedUsername=${username}`);
      this.setState({
        ...this.state,
        selectedUsername: username,
      });
      await fetchTodos();
    },
  });

  const header = new Header({
    $target: $todoListContainer,
    initialState: {
      isLoading: this.state.isTodoLoading,
      selectedUsername: this.state.selectedUsername,
    },
  });

  new TodoForm({
    $target: $todoListContainer,

    onSubmit: async (content) => {
      //낙관적 업데이트를 해서 isFirstTodoAdd 코드를 위로 올리는 게 맞다.
      const isFirstTodoAdd = this.state.todos.length === 0;
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

      console.log(isFirstTodoAdd, this.state.todos.length);
      await request(`/${this.state.selectedUsername}`, {
        method: "POST",
        //request body 부분은 백엔드와 잘 협의 해야 한다.
        body: JSON.stringify(todo),
      });
      await fetchTodos(); //init() 해 줘야

      if (isFirstTodoAdd) {
        await fetchUserList();
      }
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      isLoading: this.state.isTodoLoading,
      selectedUsername: this.state.selectedUsername,
    });

    todoList.setState({
      isLoading: this.state.isTodoLoading,
      todos: this.state.todos,
      selectedUsername: this.state.selectedUsername,
    });

    userList.setState(this.state.userList);

    this.render();
  };

  this.render = () => {
    const { selectedUsername } = this.state;
    $todoListContainer.style.display = selectedUsername ? "block" : "none";
  };

  const todoList = new TodoList({
    $target: $todoListContainer,
    initialState: {
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
      selectedUsername: this.state.selectedUsername,
    },

    onToggle: async (id) => {
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);

      const nextTodos = [...this.state.todos];
      nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted;

      //낙관적 업데이트
      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.selectedUsername}/${id}/toggle`, {
        method: "PUT",
      });
      await fetchTodos();
    },
    onRemove: async (id) => {
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);
      const nextTodos = [...this.state.todos];
      nextTodos.splice(todoIndex, 1);

      //낙관적 업데이트
      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.selectedUsername}/${id}`, {
        method: "DELETE",
      });
      await fetchTodos();
    },
  });

  const fetchUserList = async () => {
    const userList = await request("/users");
    console.log(userList);
    this.setState({
      ...this.state,
      userList,
    });
  };

  const fetchTodos = async () => {
    const { selectedUsername } = this.state;
    if (selectedUsername) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });
      const todos = await request(`/${selectedUsername}`);
      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  const init = async () => {
    await fetchUserList();

    //url에 특정사용자를 나타내는 값이 있을 경우
    const { search } = location;
    console.log("search.substring", search.substring(1));

    if (search.length > 0) {
      const { selectedUsername } = parse(search.substring(1)); // ❗️❗️❗️ 원래 객체로 감싸는데 걍 에러 떠서 뺐어.

      if (selectedUsername) {
        this.setState({
          ...this.state,
          selectedUsername, // /euna -> euna
        });
        await fetchTodos(); //이거 안 넣으면 해당 user의 todos 렌더 안된다
      }
    }
  };

  this.render();
  init();

  window.addEventListener("popstate", () => {
    init();
  });
}
