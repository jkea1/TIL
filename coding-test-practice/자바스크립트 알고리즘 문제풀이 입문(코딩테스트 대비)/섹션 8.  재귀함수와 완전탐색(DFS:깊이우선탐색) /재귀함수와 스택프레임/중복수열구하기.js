// 1부터 N까지 번호가 적힌 구슬
// 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력하라

function solution(n, m) {
  let answer = []
  let tmp = Array.from({ length: m }, () => 0)
  function DFS(L) {
    if (L === m) {
      // m중 for문과 비슷한 원리이다.
      answer.push(tmp.slice())
    } else {
      for (let i = 0; i <= n; i++) {
        tmp[L] = i
        DFS(L + 1)
      }
    }
  }
  DFS(0)
  return answer
}

console.log(solution(3, 2))
