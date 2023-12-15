function solution(x, y, z) {
  let smallNumber = 100000
  let arr = [x, y, z]

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item < smallNumber) {
      smallNumber = item
    }
  }

  return smallNumber
}

console.log(solution(6, 5, 1))
