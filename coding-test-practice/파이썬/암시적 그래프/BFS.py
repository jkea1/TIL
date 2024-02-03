from collections import deque

# 8 방향으로 이동 가능하다. 
def bfs(grid, r, c):
  row_len, col_len = len(grid), len(grid[0])
  visited = [[False] * col_len  for _ in range(row_len)]
  dr = [0, 1, 1, 1, 0, -1, -1, -1]
  dc = [1, 1, 0, -1, -1, -1, 0, 1]

  def isValid(r, c):
    return 0 <= r < row_len and 0 <= c < col_len and grid[r][c] == 1

  queue = deque()
  queue.append((r, c))

  visited[r][c] = True
  while queue:
    cur_r, cur_c = queue.popleft()

    for i in range(8):
      next_r = cur_r + dr[i]
      next_c = cur_c + dc[i]
      
      if isValid(next_r, next_c):
        if not visited[next_r][next_c]: # 여기 까지가 유효한 vertex 인가(길)를 증명하는 단계이다.
          queue.append((next_r, next_c))
          visited[next_r][next_c] = True

  print("방문 기록", visited)

grid = [[1, 1, 1, 1], [0, 1, 0, 1], [0, 1, 0, 1], [1, 0, 1, 1]]
bfs(grid, 0, 0)
