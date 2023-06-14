//var, let const 의 차이는 무엇일까?

//var
//function scope로 동작한다.
//변수 재할당 가능하다.

//let
//block scope
//변수 재할당 가능하다.

//const
//block scope
//변수 재할당 불가능하다.

//호이스팅 hoisting?
//var로 선언한 변수, 함수는 호이스팅이 일어납니다.

function hoistingExample(value) {
  var name = "hoisting";

  if (value === "what") {
    var type = "what type";
  }

  var language = "javascript";

  for (var i = 0; i < language.length; i++) {
    console.log(i);
  }

  var somethingDo = function () {
    alert("javascript study");
  };
}

//const와 let은 block scope 이기 때문에  if,for,while 등의 block 구문 단위로 범위를 갖습니다.
//만약 if문 안에서 선언했다면 if 문 밖에서는 사용이 불가하다.
//실행할 때 function scope상 맨 위로 var 선언이 끌어올려집니다. = 호이스팅
//위의 코드가 아래와 처럼 읽혀 진다고 생각하면 된다.
function hoistingExample(value) {
  var name, type, language, i, somethingDo;

  name = "hoisting";

  if (value === "what") {
    type = "what type";
  }

  language = "javascript";

  for (i = 0; i < language.length; i++) {
    console.log(i);
  }

  somethingDo = function () {
    alert("javascript study");
  };
}

//함수 선언부 위로 끌어올려지기 때문에 값 할당 전에 호출될 수 있습니다.
//이 부분을 잘 생각해두지 않으면 예기치 못한 버그를 만날 수 있습니다.
function hoistingBug() {
  alert(name); // 'undefined' elert 뜸
  alert(i);

  if (true) {
    var name = "roto";
  }

  alert(name);

  for (var i = 0; i < 10; i++) {
    var name = "idiots";
  }

  alert(name);
}

//💡 let, const의 경우에도 hoisting은 일어나지만
//Temporary Dead Zone이라는 개념 덕분에
//할당되기 전에 호출하면 에러가 난다.
function tdzTest() {
  alert(name);

  const name = "roto";
}

tdzTest();
