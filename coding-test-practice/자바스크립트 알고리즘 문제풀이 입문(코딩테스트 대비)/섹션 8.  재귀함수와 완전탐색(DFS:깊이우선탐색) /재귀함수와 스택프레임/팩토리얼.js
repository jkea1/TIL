// 팩토리얼 구현 문제

function solution(n) {
  let answer = 1
  function DFS(n) {
    if (n === 1) {
      return
    } else {
      answer *= n
      DFS(n - 1)
    }
  }
  DFS(n)
  return answer
}
console.log(solution(5))

function solution(n) {
  let answer = 1
  function DFS(n) {
    if (n === 1) {
      return
    } else {
      return n * DFS(n - 1)
    }
  }
  DFS(n)
  return answer
}
console.log(solution(5))
