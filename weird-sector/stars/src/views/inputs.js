import readLineAsync from './readLineAsync.js'

export const inputHeartNumber = async () => {
  const heartNum = await readLineAsync(
    '♥️ 하트 ♥️ 탑을 생성해드립니다! 원하는 하트탑의 층수를 숫자로 입력해주세요! (음수로 입력시에 거꾸로 된 탑을 만들어드려요!)> '
  )

  return heartNum
}
