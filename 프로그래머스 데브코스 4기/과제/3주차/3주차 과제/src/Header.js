function Header({ $target, text }) {
  if (!new.target) {
    throw new Error("new 키워드를 사용해 주세요!");
  }

  const $header = document.createElement("h1");

  $target.appendChild($header);

  this.render = () => {
    $header.textContent = text;
  };

  this.render();
}
