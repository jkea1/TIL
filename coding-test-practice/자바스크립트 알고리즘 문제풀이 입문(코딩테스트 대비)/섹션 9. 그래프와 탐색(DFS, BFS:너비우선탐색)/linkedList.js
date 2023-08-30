//경로 탐색 인접리스트로 구현하기
//정점 갯수가 너무 많아지게 되면 정점 끼리의 연결 여부를 확인하기 위해 반복문이 많이 돌아야 한다.
//만개의 정점 중 연결이 5개만 되어 있다면 반복문을 돌기에는 너무 메모리 낭비이고 시간복잡도가 커져 비효율적이다.
//인접 리스트를 사용해서 각 노드에 연결된 노드를 넣어주면 된다.

// 1번 정점에서 n번 정점으로 갈 수 있는 가짓수

function solution(n, arr) {
  let answer = 0
  let graph = Array.from(Array(n + 1), () => Array())
  let ch = Array.from({ length: n + 1 }, () => 0)
  // 인접 리스트 만들기
  for (let [a, b] of arr) {
    graph[a].push(b)
  }
  console.log(graph) // [ [], [ 2, 3, 4 ], [ 1, 3, 5 ], [ 4 ], [ 2, 5 ], [] ]

  function DFS(v) {
    if (v === n) {
      answer++
    } else {
      for (let i = 0; i <= graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1
          DFS(graph[v][i])
          ch[graph[v][i]] = 0
        } // 방문한 노드면 콜 스택에서 pop 된다.
      }
    }
  }

  ch[1] = 1
  DFS(1)
  return answer
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
