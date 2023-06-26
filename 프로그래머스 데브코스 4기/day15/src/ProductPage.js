import { request } from "./api.js";
import ProductOptions from "./ProductOptions.js";

export default function ProductPage({ $target, initialState }) {
  const $product = document.createElement("div");
  $target.appendChild($product);
  this.state = initialState;

  const productOptions = new ProductOptions({
    $target: $product,
    initialState: [],
    onSelect: (option) => {
      console.log(option);
    },
  });

  this.setState = (nextState) => {
    console.log(nextState);
    // if (nextState.productId !== this.state.productId) {
    //   fetchOptionData(nextState.productId);
    //   return;
    // }
    // this.state = nextState;
    // productOptions.setState(this.state.optionData);
  };

  this.render = () => {};
  this.render();

  //fetchOptionData(this.state.productId);
}

//state 구조
// {
//   productId: 1,
//   product: Product,
//   optionData: []
// }
