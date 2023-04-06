//자바스크립트 객체 연습

const a = "age";

const obj1 = {
  id: 1, 
  name: "ea",
  "my name" : "developer", //스페이스나 기호를 key에 넣고 싶다면 ""로 감싸서 만들어 준다./ js에서는 띄어쓰기 문법을 허용하지 않는다. 
  [a]: 3, //객체 내에 key값을 변수로 하고 싶다면 대괄호 []로 감싸서 선언해 준다. 
  
  //function의 this는 객체의 값 들을 전부 가지고 있다. 
  getNameFunction() {  //이렇게 나타내는게 더 좋다. 
    console.log("ea입니다.");
    console.log("function this : ", this);
  },
  getNameWithFunction: function() {//이렇게 나타낼 수 있다.
    console.log(this.id); //객체(this) 안에 name 값을 출력하고 싶다면 this.property 하면 된다. 
  },

  //arrow function의 this는 undefined이다.
  //자신의 상위 스코프의 값을 가진다. 
  //여기서는 상위 스코프가 전역 범위이기 때문에 undefined가 출력된다. 
  getNameWithArrowFunction: () => {
    console.log("arrow function this :", this);
    console.log(this.name);
  }
}

console.log(obj1.id);
console.log(obj1['my name']);
console.log(obj1.age);
console.log(obj1[a]);
obj1.getNameFunction(); //함수 실행된다. 
obj1.getNameWithFunction();
obj1.getNameWithArrowFunction();
