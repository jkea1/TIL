// 그래프와 인접행렬
// 인접 행렬 나타내기
// Array.from(Array(n + 1), () => Array(n + 1).fill(0))
// n+1 * n+1 의 0으로 초기화된 2차원 배열 생성
//
// 1. 무방향 그래프
// 방향이 없는 그래프
// graph[a][b] 와 graph[b][a] 의 값이 동일하다.
// 2. 방향 그래프
// 방향이 있다.
// 행(a) -> 렬(b)
// graph[a][b] 와 graph[b][a] 의 값이 단방향인 경우 같지 않다.
// 3. 가중치 그래프
// 행렬 그래프에 가중치 값이 존재한다.
// ex) graph[a][b] = x

//경로 탐색(인접 행렬)
// 방향 그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
// 아래 그래프(방향 그래프)에서 1번 정점에서 5번 정점으로 가는 가지 수는 6가지 입니다.
// 방문한 노드는 체크하고 가면 안 된다.
// 더이상 확인 할 노드가 없어서 상위 노드로 돌아갈때는 체크했던 노드를 풀어 줘야 한다.
function solution(n, arr) {
  let answer = 0
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)) // 행렬 모두 1번 인덱스 부터 시작
  let ch = Array.from({ length: n + 1 }, () => 0)
  for (let [a, b] of arr) {
    graph[a][b] = 1 // 방향 그래프인 인접 행렬
  }
  function DFS(v) {
    if (v === n) {
      answer++
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1
          DFS(i)
          ch[i] = 0 // 다시 상위노드로 올라감(백)
        }
      }
    }
  }

  ch[1] = 1 // 실수 하지 말자
  DFS(1)
  console.log(graph, ch)
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]
console.log(solution(5, arr))
