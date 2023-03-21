import { useEffect, useState } from 'react';

//fetch : 기본으로 제공하는 라이브러리
//axios 

function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/api/todo')
      .then((response) => response.json()) //json으로 한번 정제해 줘야 한다. 
      .then((data) => setTodoList(data));
  }
  //처음 렌더링 했을때 더미 데이터로 보여준다. 
  useEffect(() => {fetchData()}, []);

  const onSubmitHandler = (e) => {
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json' 
      },
      body: JSON.stringify({
        text, 
        done,
      }),
    }).then(() => fetchData());
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="todo 추가"/>
      </form>
      {todoList?.map((todo) => (
        <div key={todo.id} style={{display: 'flex'}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'done' : 'doing'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
