function Component() {
  const [state, setState] = useState(0)

  function handleClick() {
    // useState 호출은 위에서 끝났지만
    // setState는 계속 내부의 최신값(prev)을 알고 있다.
    // 이는 클로저를 활용했기 때문에 가능하다.
    setState((prev) => prev + 1)
  }
}

function outer(country) {
  let language = '한국어'

  return function inner(name, age) {
    console.log(`제 이름은 ${name} 입니다. 저는 ${age}살 입니다. 
      저는 ${country}에 살고 ${language}를 사용해요.`)
  }
}

let a = outer('한국')

a('철수', 25)
