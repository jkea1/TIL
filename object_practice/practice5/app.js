// 깊이가 깊은 객체 복사 

const obj1 = {
  id: 1, 
  name: 'ea',
  age: 3,
  habit: 'coding',
  deepObj: {
    deep: 'abc', 
  }
};

//펼침 연산자가 깊이가 있는 객체 안에 객체까지 펼쳐 주지 않는다. -> JSON.stringify를 사용한다. 
// const obj2 = { ...obj1, email: 'jinkyung@gmail.com'};

//깊은 복사가 필요하면 JSON 형태의 문자열로 한번 바꾸고 다시 객체로 바꿔서 이용한다.
const stringObj1 = JSON.stringify(obj1); //객체 ➡️ JSON 형태의 문자열로 바꿔준다. 
const obj2 = JSON.parse(stringObj1); //JSON 형태의 문자열로 바꾼 객체를 다시 ➡️ 객체로 만들어 준다.

console.log("obj2 :", obj2);
console.log("변경 전");
console.log("obj1 :", obj1.deepObj);
console.log("obj2 :", obj2.deepObj);

obj2.deepObj.deep = 'deep';

console.log("변경 후");
console.log("obj1 :", obj1.deepObj);
console.log("obj2 :", obj2.deepObj);

console.log(obj1.deepObj === obj2.deepObj);