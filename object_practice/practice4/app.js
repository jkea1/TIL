//펼침 연산자 (배열)
const arr1 = [
  1,
  'ea', 
  3,
  'coding',
];

// arr1.push('jinkyung@gmail.com');
// const arr2 = arr1; //얕은 복사 된다. 

//펼침 연산자를 사용한다. 
//깊은 복사 된다.
const arr2 = [...arr1, 'jinkyung@gmail.com'];

console.log("변경 전");
console.log("arr1 : ", arr1);
console.log("arr2 : ", arr2);

arr2[4] = 'empty';

console.log("변경 후");
console.log("arr1 : ", arr1);
console.log("arr2 : ", arr2);
console.log(arr1 === arr2);
