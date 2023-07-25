import utils, { add, subtract } from "../js/myUtils.js";

const a = add(4, 7);
const b = utils.add(4, 7);
const c = subtract(9, 3);
const d = utils.subtract(9, 3);

console.log(a);
console.log(c);

// import _ from "lodash";

// const str = "I drink coffee~";
// const newStr = _.camelCase(str);
// console.log(newStr); // 'iDrinkCoffee'

// const nums = [1, 2, 3, 2, 2, 4];
// const newNums = _.uniq(nums);
// console.log(newNums);

// const obj = {
//   a: { x: 1 },
//   b: [7, 8],
// };

// const newObj = _.cloneDeep(obj);
// console.log(newObj);
