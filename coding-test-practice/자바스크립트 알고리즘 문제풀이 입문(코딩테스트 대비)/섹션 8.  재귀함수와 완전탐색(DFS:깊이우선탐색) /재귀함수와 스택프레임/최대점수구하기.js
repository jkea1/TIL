// 제한 시간내 최대 점수를 딸 수 있는 경우 구하기
// 이 문제도 해당 문제를 풀지 안 풀지 경우의 수를 생각하는 이진트리 문제로
// DFS 문제다.
// Level이 너무 깊어지면 동적계획법으로 푸는게 낫겠다.

function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = ps.length
  function DFS(L, sum, time) {
    if (time > m) return
    if (L === n) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L])
      DFS(L + 1, sum, time)
    }
  }
  DFS(0, 0, 0)
  return answer
}
let ps = [10, 25, 15, 6, 7]
let pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt))
