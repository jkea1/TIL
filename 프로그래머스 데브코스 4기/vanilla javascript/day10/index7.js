//클로저는 무엇인가요?
//자바스크립트의 강력한 특성 중 하나이다.
//클로저를 얼마나 잘 이해하느냐가 작성하는 코드의 품질을 높여주고, 혹시 모를 버그를 잡아낼 수 있게 해주고, 메모리 누수 같은 문제를 해결하게 해준다.
//⭐️⭐️⭐️ 클로저를 이해하는 것은 굉장히 중요하다.

function outerFunction() {
  const name = "roto";

  return function () {
    alert(name);
  };
}
const printName = outerFunction();
printName();

//outerFunction 실행 후 name 변수는 소멸해야하나 alert(name)이 잘 동작 합니다.
//printName과 같이 만들어진 것을 클로져라고 한다.
//클로저는 함수와 함수가 선언된 어휘적 조합이라고도 한다.

//1. 클로져를 이용한 private 효과
//외부에 노출하면 안되는 값들을 보호하고, 내부에서만 값을 조작해서 return 하는 식으로 많이 쓰인다.
function Counter() {
  let count = 0;

  function increase() {
    count++;
  }
  function printCount() {
    console.log(`count: ${count}`);
  }
  return {
    increase,
    printCount,
  };
}

const counter = Counter();

counter.increase(); //count 변수 조작 중
counter.increase();
counter.increase();
counter.increase();
counter.printCount();

// 외부에서는 Counter 함수 내의 count에 접근 불가
// counter에는 Counter에서 return한 increase, printCount 함수만 return 하고 있기 때문에 당연히 count에는 접근 못한다.
console.log(counter.count);
