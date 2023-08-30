// BFS
// 상태 트리를 레벨탐색하고 최단거리를 구하는 방법이다.
// queue를 이용해서 구현한다.
// 출발지점에서 도착지점으로 가는 최단거리를 구할떄 BFS를 사용할 수 있다.
// 출발 지점에서 간선하나로 갈 수 있는 곳을 탐색하고 도착지점이 있는지 확인한다.
// 출발 지점에서 간선 두개로 갈 수 있는 곳을 탐색하고 도착지점이 있는지 확인한다.
// ... 각 레벨을 탐색하면서 최단거리를 구하면 된다.

// 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
function solution() {
  let answer = ''
  let queue = []
  queue.push(1)

  while (queue.length) {
    let v = queue.shift()
    answer += v + ''
    for (let nv of [[v * 2, v * 2 + 1]]) {
      if (nv > 7) continue
      queue.push(nv)
    }
  }
  return answer
}

console.log(solution())
// 1 2 3 4 5 6 7
