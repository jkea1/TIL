// 주어진 동전으로 거스름돈 거슬러 줄 수 있는 가짓수 중 동전의 수가 최소가 되는 법
// DFS(L, sum) 동전 L개로 sum 만듬

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER
  function DFS(L, sum) {
    if (sum > m) return
    if (m === sum) {
      answer = Math.min(answer, L)
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, (sum += arr[i]))
      }
    }
  }
  DFS(0, 0)
  return answer
}

let arr = [1, 2, 5]
console.log(15, arr)
