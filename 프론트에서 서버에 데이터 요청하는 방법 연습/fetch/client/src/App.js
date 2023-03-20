import { useEffect, useState } from 'react';

//fetch : 기본으로 제공하는 라이브러리
//axios 

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/todo')
      .then((response) => response.json()) //json으로 한번 정제해 줘야 한다. 
      .then((data) => setTodoList(data));
  }, []);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'done' : 'doing'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
