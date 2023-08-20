// 10 이하의 N개의 자연수가 주어지면 이 중 M를 뽑아 일렬로 나열하는 방법을 모두 출력해랴
// 중복하면 안됨
// 중복 체크하는 배열 따로 필요

function solution(m, arr) {
  let answer = []
  let n = arr.length
  let ch = Array.from({ length: n }, () => 0)
  let tmp = Array.from({ length: n }, () => 0)
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()) // 깊은 복사 해줘야 함
    } else {
      for (let i = 0; i < n; i++) {
        // n개의 가지
        if (ch[i] === 0) {
          ch[i] = 1
          tmp[L] = arr[i]
          DFS(L + 1)
          ch[i] = 0 // 다시 상위 레벨로 올라감
        }
      }
    }
  }
  DFS(0)
}

let arr = [3, 6, 9]
console.log(solution(2, arr))
