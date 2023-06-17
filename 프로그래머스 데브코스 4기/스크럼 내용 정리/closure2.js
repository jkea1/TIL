//그래서 var을 let으로 바꾸면 해결된다. 혹은 즉시 실행 함수를 이용해서 해결 가능하다 라고만 생각하고 간다.
// 문제: var과 for과 비동기의 환상의 콜라보
// 해결법1: var 유지 => 즉시실행함수로 클로저 생성
//  해결법2: var -> let

function a() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

a();
