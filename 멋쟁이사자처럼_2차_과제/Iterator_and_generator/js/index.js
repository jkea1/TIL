//반복 가능한 객체(배열, 유사 배열, 문자열, 맵, 세트 등)
//let sports_shoes = ['조깅화', '축구화', '농구화'];

//let string = 'this is string literal';

//반복 가능한 객체 순환
/* for(let x of string) {
  if(x === 'g') {
    break;
  }
  console.log(x);
} */

//forEach
//forEach 에서는 break를 사용할 수 없다. 
// sports_shoes.forEach(x => {
//   console.log(x);
// })

//[].entries() -> Array Iterator라는 {}객체를 반환한다. 
//index와 item을 빼올 수 있다.
//비구조화할당(구조분해할당)을 이용해서 index를 사용 할 수 있게 되었다. 
// for (let [index, item] of sports_shoes.entries()) {
//   console.log(`index: ${index}, item: ${item}`)
// }

//[...arguments].entries() -> Array Iterator라는 {}객체를 반환한다.
//arguments : 인수를 저장해 놓은 공간. 함수에 전달되는 인수들을 배열 형태로 나타낸 객체이다. (변수 X)
// function loopArguments() {
//   console.log("arguments", arguments)
//   let args = [...arguments].entries();
//   for( let [i, arg] of args) {
//     console.log(`${i} => ${arg}`);
//   }
// }

//loopArguments('first', [], 8);

//전개 연산자를 사용할 경우
function loopArguments(...args) {
  console.log("args", args);
  for(let [i, arg] of args.entries()) {
    console.log(`${i} => ${Array.isArray(arg)}`);
  }
}
loopArguments('first', [], 8);

//for ~ of 사용시 주의할 점!
//배열 객체
let sports_shoes = ['조깅화', '축구화', '농구화'];

//유사 배열 객체
//유사 배열 객체는 반복 가능한 객체(Iterator)가 아니다. 
//for ~ of 문에 사용 할 수 없다. 
let like_arr_obj = { length: 3, 0: '조깅화', 1: '축구화', 2: '농구화'}
for( let v of like_arr_obj) {
  console.log(v)
  //Uncaught TypeError: like_array_obj is not iterable
}