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
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  this.render = () => {
    const { keywords, cursor } = this.state;
    suggest.innerHTML = `
    <ul>
      ${keywords
        .map(
          (keyword, i) => `
        <li class="${cursor === i ? "active" : ""}">${keyword}</li>
      `
        )
        .join("")}
    </ul>
    `;
    // 추천할 검색어가 있으면 보여주고 아니면 숨겨주는 처리
    // 이게 왜 render안에 들어있는지도 생각해봐
    suggest.style.display = keywords.length > 0 ? "block" : "none";
  };
  this.render();

  suggest.addEventListener("click", (e) => {
    const li = e.target.closest("li");

    if (li) {
      onKeywordSelect(li.textContent);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (suggest.style.display !== "none") {
      const { key } = e;
      if (key === "ArrowUp") {
        const nextCursor = this.state.cursor - 1;
        this.setState({
          ...this.state,
          cursor: nextCursor < 0 ? this.state.keywords.length - 1 : nextCursor,
        });
      } else if (key === "ArrowDown") {
        const nextCursor = this.state.cursor + 1;
        this.setState({
          ...this.state,
          cursor: nextCursor > this.state.keywords.length - 1 ? 0 : nextCursor,
        });
      } else if (key === "Enter") {
        onKeywordSelect(this.state.keywords[this.state.cursor]);
      }
    }
  });
}
