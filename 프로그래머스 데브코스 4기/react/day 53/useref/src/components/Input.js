import React from 'react'

const Input = React.forwardRef((_, ref) => {
  return (
    <>
      Input: <input ref={ref} />
    </>
  )
})

export default Input
