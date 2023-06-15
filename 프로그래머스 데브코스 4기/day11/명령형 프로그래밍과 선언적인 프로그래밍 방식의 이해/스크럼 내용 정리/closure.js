//cnt를 cntPlus로만 바꿔야 하는 상황일때
//1억개의 코드 아래 처럼 cnt에 접근이 가능해져 버리면 우리가 생각하는 상황을 완벽하게 구할 수 없습니다.
//우리가 생각한 상황을 구현하려면 -> cnt로의 접근을 막으면 된다. -> 이 막는 방법이 closure 이다.
//지금은 cnt가 전역 변수이기 때문에 어디에서든 접근이 가능하다.
//변수 cnt와 함수cntPlus를 지역변수 처럼 만들어 주자. -> 함수로 한 번 감싸주면 된다.
//cntPlus는 closure 함수의 지역범위에 있는 함수기 때문에 참조할 수 없어졌다.
//cntPlus 함수를 따로 return 해 줘야 한다.
//cntClosure에는 그러면 cntPlus라는 key 값을 가지는 cntPlus 함수가 들어있는 객체를 볼 수 있다.
//이렇게 클로저를 쓰게 되면  cntPlus나 printCnt를 통해 접근하는 경우를 제외하고 cnt에 접근하는 경우는 없다.

function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }

  function printCnt() {
    console.log("cnt", cnt);
  }

  return {
    cntPlus,
    printCnt,
  };
}

const cntClosure = closure();
console.log(cntClosure);
cntClosure.printCnt();
cntClosure.cntPlus();
cntClosure.printCnt();
