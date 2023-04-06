//구조분해 할당

const obj1 = {
  id: 1, 
  name: "ea", 
  age: 3,
  habit: "coding",
};

//const id = obj1.id;
//const name = obj1.name;
//const age = obj1.age;
//const habit = obj1.habit;


//⭐️객체의 구조 분해 할당⭐️
//❗️객체의 key 값과 변수의 이름을 동일하게 해야 한다. 
const {id, age, name, habit} = obj1;


console.log( "name: ", name );
console.log( "id: ", id );

const arr1 = [8, 'ea', 3];

// const myId = arr1[0];
// const myName = arr1[1];
// const myAge = arr1[2];

//⭐️배열의 구조 분해 할당⭐️
//❗️arr1의 원소의 순서대로 변수에 각각 할당된다. 
const [myId, myName, myAge] = arr1;

console.log("myId: ", myId);
