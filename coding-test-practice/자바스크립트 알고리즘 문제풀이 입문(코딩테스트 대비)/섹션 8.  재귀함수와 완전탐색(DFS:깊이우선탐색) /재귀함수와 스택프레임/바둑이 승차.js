// 바둑이를 태울건지 안태울건지 경우의 수 따져서 하는 문제
// 부분집합 문제 / 선택할지 않할지 문제
// DFS 이용하자

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTERGER
  let n = arr.length
  function DFS(L, sum) {
    if (sum > c) return
    console.log(sum)
    if (L === n) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return answer
}
let arr = [81, 58, 42, 33, 61]
