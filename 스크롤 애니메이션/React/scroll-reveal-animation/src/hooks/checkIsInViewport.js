export const checkIsInViewport = (elem) => {
  if (!elem || !window) {
    return false
  }

  const elementTop = elem.top
  const elementBottom = elem.bottom

  return elementBottom > 0 && elementTop <= window.innerHeight
}
