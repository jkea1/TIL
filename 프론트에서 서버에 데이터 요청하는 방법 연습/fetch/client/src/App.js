//fetch : 기본으로 제공하는 라이브러리
//axios 

import { useEffect, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/todo';
function App() {
  const [todoList, setTodoList] = useState([]);

  //axios/(async+await)을 사용하면 axios/then을 사용 하지 않고 return 값을 받아서 처리 할 수 있다. 
  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
    
    /* fetch('http://localhost:4000/api/todo')
      .then((response) => response.json()) //json으로 한번 정제해 줘야 한다. 
      .then((data) => setTodoList(data)); */
  }
  //처음 렌더링 했을때 더미 데이터로 보여준다. 
  useEffect(() => {fetchData()}, []);

  const onSubmitHandler = async(e) => {
    const text = e.target.text.value;
    const done = e.target.done.checked;
    //axios post의 첫번째 인자는 서버 url, 두번째 인자에는 넣고 싶은 데이터를 넣는다. 
    await axios.post(SERVER_URL, { text, done }); //서버에 추가된 data를 보내준다. 
    fetchData(); //서버에 저장된 추가된 데이터를 불러온다. (get)
    /* fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json' 
      },
      body: JSON.stringify({
        text, 
        done,
      }),
    }).then(() => fetchData()); */
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
