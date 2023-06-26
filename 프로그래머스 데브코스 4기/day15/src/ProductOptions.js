export default function ProductOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement("select");
  $target.appendChild($select);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName} ${
      optionPrice > 0 ? `(옵션가 ${optionPrice})` : ""
    } | ${stock > 0 ? `재고 ${stock}` : "재고없음"}`;
  };

  //선택한 값이 바뀐 경우
  $select.addEventListener("change", (e) => {
    const optionId = parseInt(e.target.value);

    const option = this.state.find((option) => option.optionId === optionId);
    if (option) {
      onSelect(option);
    }
  });

  //render 함수는 parameter가 없어야 한다. 외부에의 개입이 없어야 한다.
  this.render = () => {
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
        <option>선택하세요</option>
        ${this.state
          .map(
            (option) =>
              `<option ${option.stock === 0 ? "disabled" : ""} value="${
                option.optionId
              }"> ${this.createOptionFullName(option)}</option>`
          )
          .join("")}
      `;
    }
  };
  this.render();
}

// 상품옵션 이름 렌더링 시 상품명 + 오션명 + (재고: n)개 이런 형식으로 보여줘야함
// 재고가 0인 상품의 경우 옵션을 선택하지 못하게 함.
// this.state는 아래와 같은 형태이다 .
// [
//   {
//     optionId: 1,
//     optionName: '옵션 상품',
//     optionPrice: 1000,
//     stock: 10
//   },
// ]
