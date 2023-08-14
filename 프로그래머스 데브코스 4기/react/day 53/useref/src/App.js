import { useRef } from 'react'
import Input from './components/Input'

function App() {
  const inputRef = useRef()

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default App
