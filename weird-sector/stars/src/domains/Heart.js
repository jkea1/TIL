export const printHearts = (heartNum) => {
  let hearts = ''

  if (heartNum > 0) {
    for (let i = 1; i <= heartNum; i++) {
      hearts += '❤️'.repeat(i)
      hearts += '\n'
    }
  } else if (heartNum < 0) {
    for (let i = -heartNum; i > 0; i--) {
      hearts += '❤️'.repeat(i)
      hearts += '\n'
    }
  } else {
    console.log('양수 또는 음수를 입력해주세요! ☺️')
  }

  return hearts
}
