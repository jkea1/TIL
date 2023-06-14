//다음 코드를 실행하면 숫자가 0부터 4까지 출력이 되지 않고 undefined가 5번 출력이 됩니다. 
//그 이유는 무엇일까요? 

// const numbers = [0, 1, 2, 3, 4]

// for(var i = 0; i < numbers.length; i++) {
//   setTimeout(function() {
//     console.log( `[${i}] number ${numbers[i]} turn!`)
//   }, i * 1000)
// }

//[5] number undefined turn!
//setTimeout이 실행되는 시점의 i는 for 루프가 끝난 이후의 i이기 때문에 항상 5인 상태이다.
//즉 i는 setTimeout이 끝난 이후의 i 이기 때문에 항상 5이다. 
//전형적인 클로저 문제 중 하나이다. 

//해결법1 IIFE
//i가 0일 때, 1일 때, 2일 때, 3일 때, 4일 때를 각각의 function scope로 가두어서 처리
//이렇게 되면 setTimeout 실행 시점에 참고하는 index는 IIFE에서 인자로 넘긴 i의 값을 쓰기 때문에 문제 해결 

// const numbers = [0, 1, 2, 3, 4]

// for(var i = 0; i < numbers.length; i++) {
//   (function(index) {
//     setTimeout(function() {
//       console.log( `[${index}] number ${numbers[index]} turn!`)
//     }, i * 1000)
//   })(i)
// }

//해결법2 var 대신 let 쓰기
//var는 function scope 안에서 돌아가는 scope 
//let과 const는 function scope가 아니라 block scope 이다. 
//let을 사용하면 for 루프내 블럭에서만 유효하다.  
//let으로 선언할 경우 setTimeout 내에서 let i가 0일때, 1일 때 각각 참조되기 때문에 정상 작동한다. 
//IIFE로 해결한 것과 유사한 케이스이다. 
// const numbers = [0, 1, 2, 3, 4]

// for(let i = 0; i < numbers.length; i++) {
//   setTimeout(function() {
//     console.log( `[${i}] number ${numbers[i]} turn!`)
//   }, i * 1000)
// }

//해결법3 for 대신 forEach 쓰기
//forEach로 numbers를 순회하면서 각각 function을 만들기 때문에 i의 값이 고유해짐
const numbers = [0, 1, 2, 3, 4]

numbers.forEach(function (number, i) {
  setTimeout(() => {
    console.log(`[${i}] number ${number} turn!`)
  }, i * 1000)
})

