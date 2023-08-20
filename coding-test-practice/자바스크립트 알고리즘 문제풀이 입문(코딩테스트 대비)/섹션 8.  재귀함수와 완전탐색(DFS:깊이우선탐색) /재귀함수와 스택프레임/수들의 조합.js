// 수들의 조합
// N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
// 5개 중에 3개 고르기
// start num 3부터 i 시작
// 3 레벨 내려가기

function solution(n, k, arr, m) {
  let answer = 0
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) {
        answer++
      }
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i])
      }
    }
  }
  DFS(0, 0, 0)
  return answer
}

let arr = [2, 4, 5, 8, 12]
console.log(solution(5, 3, arr, 6))
