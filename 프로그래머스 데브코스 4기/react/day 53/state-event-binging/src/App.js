// 요구사항
// 1. Counter 컴포넌트 구현하기
// 2. 모든 Counter 컴포넌트의 합 구하기

// 무엇을 배울 것인가?
// 1. 컴포넌트에서 지역 상태 관리하는 법
// 2. 컴포넌트에 이벤트 바인딩하기
// 3. 부모 컴포넌트에게 메시지 전달하기
import Counter from './components/Counter'
import { useState } from 'react'

function App() {
  const [totalCount, setTotalCount] = useState(0)
  return (
    <div>
      TotalCount: {totalCount}
      <Counter
        onIncrease={(count) => setTotalCount(totalCount + 1)}
        onDecrease={(count) => setTotalCount(totalCount - 1)}
      />
      <Counter
        onIncrease={(count) => setTotalCount(totalCount + 1)}
        onDecrease={(count) => setTotalCount(totalCount - 1)}
      />
      <Counter
        onIncrease={(count) => setTotalCount(totalCount + 1)}
        onDecrease={(count) => setTotalCount(totalCount - 1)}
      />
    </div>
  )
}

export default App
