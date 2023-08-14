import { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  // count의 변활르 감지한다.
  useEffect(() => console.log(`clicked ${count}`), [count])

  // 컴포넌트가 처음 로드될때 실행된다.
  useEffect(() => {
    console.log('Component Loaded')
    const handleScroll = () => {
      console.log(window.scrollY)
    }

    document.addEventListener('scroll', handleScroll) // 전역적인 event를 사용할때 쓸 수 있다.
    // 전역적으로 event를 잡았을 경우에는 event를 해제해줘야 한다.
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div>You clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>

      <div style={{ height: 10000 }}></div>
    </div>
  )
}

export default App
