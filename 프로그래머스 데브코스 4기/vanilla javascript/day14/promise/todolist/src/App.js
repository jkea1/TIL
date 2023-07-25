import TodoList from "./TodoList.js";
import TodoComments from "./TodoComments.js";
import { request } from "./api.js";

export default function App({ $app }) {
  this.state = {
    todos: [],
    selectedTodo: null,
    comments: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);

    todoComments.setState({
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    });
  };

  const todoList = new TodoList({
    $target: $app,
    initialState: this.todos,
    onClick: async (id) => {
      const selectedTodo = this.state.todos.find((todo) => todo.id === id);
      this.setState({
        ...this.state,
        selectedTodo,
      });

      try {
        // 댓글 목록 불러오기
        // 로딩중 보여주기 처리
        const data = await request(
          `https://kdt-frontend.programmers.co.kr/comments?todo.id=${id}`
        );
        this.setState({
          ...this.state,
          comments: data,
        });
      } catch (e) {
        //promise의 .catch와 비슷한 역할을 한다.
      } finally {
        // promise .finally 와 비슷한 역할
        // 위의 코드가 성공했던 실패했던 무조건 실행되는 역할
        // 로딩중 숨겨주는 처리
      }
    },
  });

  const todoComments = new TodoComments({
    $target: $app,
    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    },
  });

  //todos 불러오기
  this.init = async () => {
    const data = await request("https://kdt-frontend.programmers.co.kr/todos");
    this.setState({
      ...this.state,
      todos: data,
    });
  };

  this.init();
}
