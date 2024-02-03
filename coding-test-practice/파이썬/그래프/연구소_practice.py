from itertools import combinations
from collections import deque, Counter

# n, m = 4, 6
# board = [
#   [0, 0, 0, 0, 0, 0],
#   [1, 0, 0, 0, 0, 2],
#   [1, 1, 1, 0, 0, 2],
#   [0, 0, 0, 0, 0, 2]
# ]

answer = 0

n, m = 7, 7
board = [
  [2, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 2, 0], 
  [0, 1, 1, 0, 1, 0, 0], 
  [0, 1, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 1, 1], 
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0]
]

def Solution(n, m, board):
  virus, empty = [], []

  for r in range(n):
    for c in range(m):
      if board[r][c] == 0:
        empty.append([r, c])
      elif board[r][c] == 2:
        virus.append([r, c])
  
  def isValid(next_r, next_c):
    return 0 <= next_r < n and 0 <= next_c < m
  
  def bfs():
    global answer
    temp_graph = [ row[:] for row in board ]
    # print("check", temp_graph)

    queue = deque(virus)

    while queue:
      r, c = queue.popleft()
      for dr, dc in [[-1, 0], [1, 0], [0, -1], [0, 1]]:
        next_r, next_c = r + dr, c + dc
        
        if isValid(next_r, next_c):
          if temp_graph[next_r][next_c] == 0:
            temp_graph[next_r][next_c] = 2
            queue.append([next_r, next_c])
    
    count = Counter([]) 
    for row in temp_graph:
      count += Counter(row)

    answer = max(answer, count[0])


  # 1이라는 벽 3개를 세워야한다. 
  for wall in combinations(empty, 3):
    row, col = [], []
    for r, c in wall:
      row.append(r)
      col.append(c)
    
    for i in range(3):
      board[row[i]][col[i]] = 1
      print("new", board)
    
    bfs()

    for i in range(3):
      board[row[i]][col[i]] = 0
    

  # 세운 3개의 벽의 그래프로 bfs를 돌려서 바이러스(2)가 퍼지게해서(4방향) 
  # 그 결과 count 되는 0(안전지대)의 수를 세면 될것 같네요.   
  
  # 구해야 하는 값 = 최대 안전지대 수 
  print("최대 안전지대 수", answer)


Solution(n, m, board)