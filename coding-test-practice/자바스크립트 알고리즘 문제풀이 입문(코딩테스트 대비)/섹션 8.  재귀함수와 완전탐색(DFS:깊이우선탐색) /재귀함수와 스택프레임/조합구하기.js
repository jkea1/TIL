// 1부터 N까지 번호가 적힌 구슬이 있다.
// 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.

//ex) 4 2
// D(0, 1) -> 1, 2, 3, 4 -> 가지 1 D(1, 2) -> 2, 3, 4 -> 가지 2 D(2, 3) 2개 뽑은 거니까 끝! 다시 상위 요소로 돌아간다.

function solution(n, m) {
  let answer = []
  let tmp = Array.from({ length: n }, () => 0)
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice()) // 깊은 복사
    } else {
      for (let i = s; i <= 4; i++) {
        tmp[L] = i
        DFS(L + 1, i + 1)
      }
    }
  }
  DFS(0, 1) //for문 i를 0부터 돌자!
  return answer
}

console.log(solution(4, 2))
