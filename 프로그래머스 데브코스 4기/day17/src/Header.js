export default function Header({ $target, initialState }) {
  const $h1 = document.createElement("h1");
  $target.appendChild($h1);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    const { username, isLoading } = this.state;
    $h1.innerHTML = `${username} 님의 할일 목록 ${
      isLoading ? "로딩 중..." : ""
    }`;
  };
  this.render();
}
