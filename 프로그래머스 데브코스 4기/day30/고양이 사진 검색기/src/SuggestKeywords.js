export default function SuggestKeywords({
  target,
  initialState,
  onKeywordSelect,
}) {
  const suggest = document.createElement("div");
  suggest.className = "Keywords";
  target.appendChild(suggest);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    suggest.innerHTML = `
    <ul>
      ${this.state
        .map(
          (keyword) => `
        <li>${keyword}</li>
      `
        )
        .join("")}
    </ul>
    `;
    // 추천할 검색어가 있으면 보여주고 아니면 숨겨주는 처리
    // 이게 왜 render안에 들어있는지도 생각해봐
    suggest.style.display = this.state.length > 0 ? "block" : "none";
  };
  this.render();

  suggest.addEventListener("click", (e) => {
    const li = e.target.closest("li");

    if (li) {
      onKeywordSelect(li.textContent);
    }
  });
}
