// Counter 컴포넌트 기능
// 1. 증감하는 기능
// 2. 부모 컴포넌트에게 메시지를 전달하는 기능
import { useState } from 'react'
import PropTypes from 'prop-types'

function Counter({ onIncrease, onDecrease }) {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
    if (onIncrease) {
      onIncrease(count + 1)
    }
  }

  const handleDecrease = () => {
    setCount(count - 1)
    if (onDecrease) {
      onDecrease(count + 1)
    }
  }

  return (
    <div>
      <span style={{ fontSize: 40 }}>{count}</span>
      <br />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}

Counter.propTypes = {
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
}

export default Counter
