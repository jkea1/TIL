//펼침 연산자 객체 
//원본 객체를 훼손하지 않고 객체 변경을 원할 경우 펼침연산자(spread)를 사용하면 된다. 

const obj1 = {
  id: 1, 
  name: 'ea',
  age: 3,
  habit: 'coding',
};

// obj1.email = 'jinkyung@gmail.com';

// 얕은 복사가 일어나 obj1과 obj2가 같아지다. 
// const obj2 = obj1; 

//펼침 연산자 사용 객체 생성
const obj2 = {...obj1, email: 'jinkyung@gmail.com'}; //깊은 복사가 일어난 것이다 

arr1.

console.log("변경 전");
console.log("obj1 : ", obj1);
console.log("obj2 : ", obj2);

obj2.email = "empty"; 
//얕은 복사가 일어난 상태이기 때문에 obj2만 바꿔도 obj1(원본 객체)도 같이 바뀐다. 

console.log("변경 후");
console.log("obj1 : ", obj1);
console.log("obj2 : ", obj2);

console.log("동일 여부 확인", obj1 === obj2);


