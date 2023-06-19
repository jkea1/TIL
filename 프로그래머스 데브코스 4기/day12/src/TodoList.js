//params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼드
//params.initialState - 해당 컴포넌트의 초기 상태

// function TodoList(params) {
//   const $todoList = document.createElement("div");
//   const $target = params.$target;
//   $target.appendChild($todoList);

//   this.state = params.initialState;

//   //실제 컴포넌트를 그리는 부분
//   this.render = () => {
//     $todoList.innerHTML = `
//       <ul>
//         ${this.state.map((todo) => `<li>${todo.text}</li>`).join("")}
//       </ul>
//     `;
//   };

//   this.render();
// }

// 좀 더 간단하게 사용할 수 있다.
//객체 구조분해 할당
function TodoList({ $target, initialState }) {
  const $todoList = document.createElement("div");

  $target.appendChild($todoList);

  this.state = initialState;

  //아래 코드를 통해 투두리스트에 상태를 추가 할 수 있다.
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  //실제 컴포넌트를 그리는 부분
  this.render = () => {
    $todoList.innerHTML = `
      <ul>
        ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
      </ul>
    `;
  };

  this.render();
}
