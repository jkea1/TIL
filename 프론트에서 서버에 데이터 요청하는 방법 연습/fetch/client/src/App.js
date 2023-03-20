//fetch : 기본으로 제공하는 라이브러리
//axios 

function App() {
  fetch('http://localhost:4000/api/todo')
  .then((response) => response.json()) //json으로 한번 정제해 줘야 한다. 
  .then((data) => console.log(data) )
  return (
    <div className="App">
      <h1>TODO LIST</h1>
    </div>
  );
}

export default App;
