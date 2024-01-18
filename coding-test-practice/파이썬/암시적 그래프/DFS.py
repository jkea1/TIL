def isValid(r, c):
  # 그래프 내의 값이고 그 vertex 값이 1 인 경우만 True 반환한다.  
  return 0 <= r < row_len and 0 <= c < col_len and grid[r][c] == 1


def dfs(r, c):
  visited[r][c] = True
  
  for i in range(4):
    next_r = r + dr[i]
    next_c = c + dc[i]

    if isValid(next_r, next_c):
      if not visited[next_r][next_c]:
        dfs(next_r, next_c)
    
grid = [[1, 1, 1, 1], [0, 1, 0, 1], [0, 1, 0, 1], [1, 0, 1, 1]]
row_len, col_len = len(grid), len(grid[0])

visited = [[False] * col_len for _ in range(row_len)]

# 동, 남, 서, 북 => 시계 방향
dr = [0, 1, 0, -1]
dc = [1, 0, -1, 0]

dfs(0, 0)

print("dfs 결과", visited)
