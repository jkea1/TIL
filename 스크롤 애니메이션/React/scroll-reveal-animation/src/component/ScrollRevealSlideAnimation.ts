import React, { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { checkIsInViewport } from '../hooks/checkIsInViewport'
import { useWindowScrollEvent } from '../hooks/useWindowScrollEvent'

export type DirectionType = 'top' | 'bottom' | 'right' | 'left'

export type ScrollRevealSlideAnimationProps = {
  children: React.ReactNode
  direction?: DirectionType
}

const Wrapper = styled.div<{
  isInViewPort: boolean
  direction: DirectionType
}>`
  ${({ isInViewPort, direction }) => {
    const axis = direction === 'top' || direction === 'bottom' ? 'Y' : 'X'
    const dir = direction === 'bottom' || direction === 'right' ? -1 : 1

    const [translateFrom, translateTo] = [
      `translate${axis}(${4 * dir}rem)`,
      `translate${axis}(0)`,
    ]
    const defaultStyle = css`
      transform: ${translateFrom};
      opacity: 0;
    `
    const keyframe = keyframes`
        from { transform: ${translateFrom}; opacity: 0; }
        to { transform: ${translateTo}; opacity: 1; }
    `
    const animationRule = css`
      ${keyframe} 2s ease
    `

    // isInViewPort가 true라면
    // 방향에 따라 translate(이동) 애니메이션을 실행한다.
    return css`
      ${!isInViewPort && defaultStyle}
      animation: ${isInViewPort && animationRule};
    `
  }}
`

function ScrollRevealSlideAnimation({
  children,
  direction = 'top',
}: ScrollRevealSlideAnimationProps) {
  const elemRef = useRef<HTMLDivElement>(null)
  const [isInViewPort, setIsInViewPort] = useState(
    checkIsInViewport(elemRef?.current)
  )

  useEffect(() => {
    // elemRef이 초기에 값이 바로 들어오지 않아
    // elemRef가 undefined가 아닐때 isInViewPort값을 다시 할당한다.
    setIsInViewPort(checkIsInViewport(elemRef?.current))
  }, [elemRef?.current === undefined])

  // 스크롤이 될때마다 element가 뷰포트 영역 안인지 체크한다.
  useWindowScrollEvent(() => {
    setIsInViewPort(checkIsInViewport(elemRef?.current))
  })

  // return (
  //   <Wrapper ref={elemRef} isInViewPort={isInViewPort} direction={direction}>
  //     {children}
  //   </Wrapper>
  // )
}

export default ScrollRevealSlideAnimation
