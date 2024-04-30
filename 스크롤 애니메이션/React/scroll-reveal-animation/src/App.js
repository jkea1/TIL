import { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import './App.css'
import { checkIsInViewport } from './hooks/checkIsInViewport'
import { useWindowScrollEvent } from './hooks/useWindowScrollEvent'
import logo from './logo.svg'

const goup = keyframes`
  from { transform: translateY(5rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

const Container = styled.div`
  animation: ${({ animation }) => animation && goup} 2s ease-out;
`

function App() {
  const [animation, setAnimation] = useState(true)
  const areaRef = useRef()

  const handleScrollAnimation = () => {
    const element = areaRef?.current?.getBoundingClientRect()

    setAnimation(checkIsInViewport(element))
  }

  useWindowScrollEvent(handleScrollAnimation)

  return (
    <div className='App'>
      <header className='App-header'>
        <Container ref={areaRef} animation={animation.toString()}>
          <img src={logo} className='App-logo' alt='logo' />
        </Container>
        <p>scroll reveal animation</p>
        <div>Let's check!</div>
      </header>
    </div>
  )
}

export default App
