(function(name) {
  console.log(`hello ${name}`);
})('roto')

// 'hello roto'라 출력된다. 
// js 특성이 변수나 함수를 선언하게 되면 해당 변수와 함수는 선언한 곳은 감싸고 있는 함수에 묶이게 된다. 
// 만약 별다른 function으로 묶지 않고 변수와 함수를 선언해서 <script src=""> 문법으로 끌어와 쓰게 되면 window 객체에 모든 선언들이 묶이게 된다. -> window 전역 객체가 계속 오염되 버린다. 
// 같은 힘수명인데 다른 스크립트에 있는 것을 불러왔을때 두개가 겹쳐지거가 덮씌어져 버린다. 
// ()() 즉시 실행 함수를 쓰게 되면 
// 그 안에 선언된 함수나 변수들은 즉시 실행 함수 내에 묶이게 된다. 
// -> window를 침범하지 않게 된다. 

//logger라는 함수 
//선언하자마자 실행 하고 있다. 
const logger = (function(){
  // logCount는 밖에서 접근할 수 없다. 일종의 private 효과
  let logCount = 0;
  function log(message) {
    console.log(message);
    logCount = logCount + 1;
  }
  function getLogCount() {
    return logCount;
  }
  return {
    log: log, //log 로만 나타낼 수 있수도 있어.
    getLogCount: getLogCount //getLogCount 로만 나타낼 수 있어.
  }
})()

logger.log('gg'); //gg
logger.log('hhh'); //hhh
console.log(logger.getLogCount()); //2
console.log(logger.logCount); //undefined로 접근이 안된다. -> 이런식으로 만약 외부에서 수정 못하게 막아야 하는 경우 이런식으로 사용을 했다. 
