//함수
//함수는 return이 없으면 무조건 undefined를 반환한다. 

function showMessage() {
  return '안녕 난 js야!'
}

console.log(showMessage());


function sum(a, b) { //여기서 a,b는 인자(parameter)이다. 
  return a+b
}

let number = sum(2, 7); //여기에 들어가는 값은 인수(argument)이다. 