import { useEffect, useRef, useState } from 'react'

// useRef
// 1. 변수 효과적으로 관리하기
// useRef는 변화는 감지해야 하지만 그 변화가 렌더링을 발생시키면 안되는 어떤 값을 다룰 때 사용한다.
// 2. DOM 요소에 직접 접근하기
// ex. text box 같은 input 요소에 focus를 줄때 자주 사용 된다.
// Document.querySelector 같은 역할을 한다.
// const ref = useRef(value)
// <input ref={ref} />

function App() {
  const [count, setCount] = useState(1)
  const renderCount = useRef(1)
  const inputRef = useRef()

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log('렌더링 수: ', renderCount.current)
  })

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}`)
    inputRef.current.focus()
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올리기</button>
      <input
        style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}
        type='text'
        placeholder='username'
        ref={inputRef}
      />
      <button onClick={login}>로그인</button>
    </div>
  )
}

export default App
