import { useRef } from 'react'
import AutoCounter from './components/AutoCounter'
import Input from './components/Input'

function App() {
  const inputRef = useRef()

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <AutoCounter />
    </div>
  )
}

export default App
