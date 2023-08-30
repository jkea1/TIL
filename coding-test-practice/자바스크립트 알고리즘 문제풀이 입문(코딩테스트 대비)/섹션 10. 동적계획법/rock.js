// 개울은 N개의 돌로 다리를 만들어 놓았습니다.
// 돌 다리를 건널 때 한 번에 한 칸 혹은 두칸 씩 건너 뛰면서 돌다리를 건널 수 있다.
// 개울을 건너는 방법은 몇개인가?

function solution(n) {
  let answer = 0
  let dy = Array({ length: n + 2 }, () => 0)
  dy[1] = 1
  dy[2] = 2
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2]
  }
  answer = dy[n + 1]
  return answer
}

console.log(solution(7))

// 건너는 방법이 한칸 두칸 셋칸이라면?
function solution(n) {
  let answer = 0
  let dy = Array({ length: n + 2 }, () => 0)
  dy[0] = 1
  dy[1] = 2
  dy[2] = 3
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2] + dy[i - 3]
  }
  answer = dy[n + 1]
  return answer
}

console.log(solution(7))
