// N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어짐
// 섬은 1, 바다는 0
// 상하좌우 및 대각선으로 이동 가능 총 8방향
// 섬 갯수 구해라
// 생각해보자 재귀가 호출되는 횟수가 곧 섬의 갯수네
// 지나간 섬(노드)는 0으로 바꾸고

function solution(board) {
  let answer = 0
  let n = board.length
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1] // 서쪽을 기준으로 시간 방향으로
  let dy = [0, 1, 1, 1, 0, -1, -1, -1]

  function DFS(x, y) {
    board[x][y] = 0
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k]
      let ny = y + dy[k]
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny)
      }
    }
  }
  //격자판을 한칸씩 이동해보는 이중 for문이다.
  // 섬이 나오면 DFS로 재귀돌려서 연결된 섬 찾아.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++
        // console.log(board)
        DFS(i, j)
      }
    }
  }
  return answer
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]

console.log(solution(arr))
