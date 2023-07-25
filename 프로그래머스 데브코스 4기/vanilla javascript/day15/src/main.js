import ProductOptions from "./ProductOptions.js";
import { request } from "./api.js";

const $target = document.querySelector("#app");

const DEFAULT_PRODUCT_ID = 1;

const fetchOptionData = (productId) => {
  return request(`/products/${productId}`)
    .then((product) => {
      return request(`/product-options?product.id=${product.id}`);
    })
    .then((productOptions) => {
      return Promise.all([
        Promise.resolve(productOptions), //값 자체를 감싸면 promise가 된다.
        Promise.all(
          //option의 제고 확인용 promist.all
          productOptions
            .map((productOption) => productOption.id)
            .map((id) => {
              return request(`/product-option-stocks?productOption.id=${id}`);
            })
        ),
      ]);
    })
    .then((data) => {
      const [productOptions, stocks] = data;
      const optionData = productOptions.map((productOption, i) => {
        const stock = stocks[i][0].stock;

        return {
          optionId: productOption.id,
          optionName: productOption.optionName,
          optionPrice: productOption.optionPrice,
          stock,
        };
      });

      productOptionsComponent.setState(optionData);
    });
};

fetchOptionData(DEFAULT_PRODUCT_ID);

const productOptionsComponent = new ProductOptions({
  $target,
  initialState: [],
  onSelect: (option) => {
    alert(option.optionName);
  },
});

// new ProductPage({
//   $target,
//   initialState: {
//     productId: 1,
//   },
// });

// const dummyData = [
//   {
//     optionId: 1,
//     optionName: "더미 데이터다!",
//     optionPrice: 10000,
//     stock: 10,
//   },
//   {
//     optionId: 2,
//     optionName: "더미 데이터다2!",
//     optionPrice: 15000,
//     stock: 10,
//   },
//   {
//     optionId: 3,
//     optionName: "더미 데이터다3!",
//     optionPrice: 10000,
//     stock: 0,
//   },
// ];
