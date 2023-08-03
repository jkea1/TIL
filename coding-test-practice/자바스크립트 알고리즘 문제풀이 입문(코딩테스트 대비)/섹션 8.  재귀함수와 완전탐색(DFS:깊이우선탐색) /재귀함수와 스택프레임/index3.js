// DFS: 깊이 우선 탐색
// L: level
// 재귀함수 : 자기가 자신을 호출하는 함수
// 함수가 호출되면 (콜)스택에 함수정보가 들어간다.
// 함수의 매개변수, 지역변수, 복귀주소(함수코드가 실행된 위치)를 저장한다. = stact frame = 스택에 들어가는 하나의 아이템
// ex) 스택 -> [DFS(3), DFS(2), DFS(1)] -> [DFS(3), DFS(2)] -> [DFS(3)] -> []

// function solution(n) {
//   function DFS(L) {
//     if (L === 0) {
//       return
//     } else {
//       // console.log(L);
//       DFS(L - 1)
//       console.log('재귀', L)
//     }
//   }

//   DFS(n)
// }

// solution(3) // 1 -> 2 -> 3

// 이진 트리의 전위순회와 후위순회
// 트리를 순회할때는 왼쪽부터 탐색(출력)한다.
// 💡 새로운 노드(vertex)로 이동할 때 마다 우선순위 생각하기
// 우선순위
// 1. 전위 순회 : 부모 -> 왼쪽 -> 오른쪽
// 2. 중위 순회 : 왼쪽 -> 부모 -> 오른쪽
// 3. 후위 순회 : 왼쪽 -> 오른쪽 -> 부모
//
// 규칙 >
// right node: 2r + 1
// left node: 2r
//
//       1
//     /  \
//    2    3
//  /  \  / \
// 4   5 6   7
//
// 1. 전위 순회 : 1,2,4,5,3,6,7
// 2. 중위 순회 : 4,2,5,1,6,3,7
// 3. 후위 순회 : 4,5,2,6,7,3,1
//
// 문제 풀때 if를 종료(종착)지점으로 생각하자

// 전위, 중위, 후위 -> root 출력 위치만 바꾸면 된다.
// 나중에 후위순회가 병합 정렬이 사용되므로 후위순회도 스택으로 그리면서 연습해보자..
// 중위 순회
// function solution(v) {
//   let answer
//   function DFS(v) {
//     if (v > 7) {
//       return
//     } else {
//       DFS(v * 2) // 왼
//       console.log(v) // root
//       DFS(v * 2 + 1) // 오
//     }
//   }

//   DFS(v)
//   return answer
// }

// console.log(solution(1))

// 부분 집합 구하기
// 공집합 = 빈 집합은 제외하고
//
function solution(n) {
  let answer = []
  let checkArr = Array.from({ length: n + 1 }, () => 0)
  function DFS(v) {
    if (v === n + 1) {
      let tmp = ''
      for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 1) {
          tmp += i + ' '
        }
      }
      if (tmp.length > 0) {
        answer.push(tmp.trim())
      }
    } else {
      checkArr[v] = 1
      DFS(v + 1)
      checkArr[v] = 0
      DFS(v + 1)
    }
  }
  DFS(1)
  console.log(answer)
}
console.log(solution(3))
