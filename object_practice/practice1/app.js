//자바스크립트 객체 연습, 구조분해 할당

const a = "age";

const obj1 = {
  id: 1, 
  name: "ea",
  "my name" : "developer", //스페이스나 기호를 key에 넣고 싶다면 ""로 감싸서 만들어 준다. 
  [a]: 3, //객체 내에 key값을 변수로 하고 싶다면 대괄호 []로 감싸서 선언해 준다. 
  
  getNameFunction() {  //이렇게 나타내는게 더 좋다. 
    console.log("ea입니다.")
  },
  getNameWithFunction: function() {//이렇게 나타낼 수 있다.
    console.log("ea입니다!");
  },
}

console.log(obj1);
obj1.getNameFunction(); //함수 실행된다. 
obj1.getNameWithFunction();
