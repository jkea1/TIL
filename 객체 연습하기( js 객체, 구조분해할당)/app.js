//자바스크립트 객체, 구조분해 할당
const obj1 = {
  id: 1,
  name: 'ea',
  age: 3,
  habit: 'coding',
};

obj1.email = 'jinkyng7880@gmail.com';

const obj2 = obj1;

console.log("변경 전");
console.log("obj1 : ", obj1);
console.log("obj2 : ", obj2);

obj2.email = "empty";

console.log("변경 후");
console.log("obj1 : ", obj1);
console.log("obj2 : ", obj2);
