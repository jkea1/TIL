function solution(x, y, z) {
  const arr = [x, y, z]
  let sArr = arr.sort((a, b) => a - b)

  if (sArr[0] + sArr[1] > sArr[2]) {
    return 'YES'
  } else {
    return 'NO'
  }
}

console.log(solution(3, 4, 4))
