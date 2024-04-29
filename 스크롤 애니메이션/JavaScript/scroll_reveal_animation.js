const scrollElements = document.querySelectorAll('.js-scroll')

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top

  // viewport 기준 element top이 보이기 시작할때는 감지한다.
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight / dividend) // dividend // 4/5 배
  )
}

// el가 viewport 아래로 사라질때를 감지한다.
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top

  return (
    elementTop > window.innerHeight || document.documentElement.clientHeight
  )
}

const displayScrollElement = (el) => {
  el.classList.add('scrolled')
}

const hideScrollElement = (el) => {
  el.classList.remove('scrolled')
}

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el)
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener('scroll', () => {
  handleScrollAnimation()
})
