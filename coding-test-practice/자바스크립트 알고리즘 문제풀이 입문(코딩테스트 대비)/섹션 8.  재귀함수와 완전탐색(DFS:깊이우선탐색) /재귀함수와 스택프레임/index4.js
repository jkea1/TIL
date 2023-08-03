//배열의 모든 원소가 포함되게 두 묶음으로 나눠서 두 묶음의 합이 같아질 수 있으면 yes를 출력해라.

function solution(arr) {
  let answer = 'No'
  let total = arr.reduce((a, b) => a + b, 0)
  let n = arr.length
  let flag = 0

  function DFS(L, sum) {
    if (flag) {
      return
    }
    if (L === n) {
      if (total - sum === sum) {
        answer = 'Yes'
        flag = 1
      }
    } else {
      DFS(L + 1, sum + arr[L]) // 더하기
      DFS(L + 1, sum) // 안 더하기
    }
  }
  DFS(0, 0)
  return answer
}

let arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr))

// 어제 문제 복습

// function solution(n) {
//   let arr = Array.from({ length: n + 1 }, () => 0)
//   let tmp = ''
//   let answer = []
//   function DFS(v) {
//     if (v === n + 1) {
//       let tmp = ''
//       for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === 1) {
//           tmp += i + ' '
//         }
//       }
//       if (tmp.length > 0) {
//         // 공집합 제외
//         answer.push(tmp.trim())
//       }
//     } else {
//       arr[v] = 1
//       DFS(v + 1)
//       arr[v] = 0
//       DFS(v + 1)
//     }
//   }

//   DFS(1)
//   console.log(answer)
// }
// console.log(solution(3))
