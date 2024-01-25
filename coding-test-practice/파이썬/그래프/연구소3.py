# 연구소의 모든 빈 칸에 바이러스가 있게 되는 최소 시간을 출력한다
from itertools import combinations
from collections import deque 

# 첫 번째 예제 => 4
# n, m = 7, 3

# board = [
#   [2, 0, 0, 0, 1, 1, 0],
#   [0, 0, 1, 0, 1, 2, 0],
#   [0, 1, 1, 0 ,1, 0 ,0],
#   [0, 1, 0, 0, 0 ,0, 0],
#   [0 ,0 ,0, 2, 0, 1, 1],
#   [0, 1, 0, 0, 0, 0, 0],
#   [2, 1, 0 ,0 ,0 ,0 ,2]
# ]

# 일곱 번째 예제 => 0
# n, m = 5, 1
# board = [
#   [2, 2, 2, 1, 1], 
#   [2, 1, 1, 1, 1], 
#   [2, 1, 1, 1, 1], 
#   [2, 1, 1, 1, 1], 
#   [2, 2, 2, 1, 1]
# ]

# 다섯 번째 예제 => 5
# n, m = 7, 3
# board = [
# [2, 0, 2, 0, 1, 1, 0],
# [0, 0, 1, 0, 1, 0, 0],
# [0, 1, 1, 1, 1, 0, 0],
# [2, 1, 0, 0, 0, 0, 2],
# [1, 0, 0, 0, 0, 1, 1],
# [0, 1, 0, 0, 0, 0, 0],
# [2, 1, 0, 0, 2, 0, 2]
# ]

# 여섯 번째 예제 => -1
n, m = 7, 2
board = [
[2, 0, 2, 0, 1, 1, 0],
[0, 0, 1, 0, 1, 0, 0],
[0, 1, 1, 1, 1, 0, 0],
[2, 1, 0, 0, 0, 0, 2],
[1, 0, 0, 0, 0, 1, 1],
[0, 1, 0, 0, 0, 0, 0],
[2, 1, 0, 0, 2, 0, 2]
]

def Solution(n, m, board):
  virus = []
  answer = 1000000

  # 바이러스 위치 파악
  for r in range(n):
    for c in range(n):
      if board[r][c] == 0: # 빈 공간
        board[r][c] = "_"
      elif board[r][c] == 1: # 벽
        board[r][c] = "|"
      elif board[r][c] == 2: # 바이러스
        virus.append([r, c])
        board[r][c] = '*'
  
  def isValid(next_r, next_c):
    return 0 <= next_r < n and 0 <= next_c < n
  
  def bfs(virus_group):
    nonlocal answer

    queue = deque()

    for r, c in virus_group:
      queue.append([r, c, 0])
    
    test_map = [ board[i][:] for i in range(n) ]
    max_level = 0


    while queue:
      r, c, level = queue.popleft()
      
      # 상 하 좌 우
      for dr, dc in [[-1, 0], [1,0], [0, -1], [0, 1]]:
        next_r, next_c, next_level = r + dr, c + dc, level + 1
        
        # 그리드 안의 값이고, 빈 칸이어야 한다. 
        if isValid(next_r, next_c) :
          if test_map[next_r][next_c] == "_" :
            # 빈 칸(_)에는 next_level 값이 들어간다. 
            test_map[next_r][next_c] = next_level
            # 맥스로 걸리는 시간 갱신해 주기 
            max_level = max(max_level, next_level)
            queue.append([next_r, next_c, next_level])
          elif test_map[next_r][next_c] == "*" :
            test_map[next_r][next_c] = next_level
            queue.append([next_r, next_c, next_level])
    
    # 모든 칸에 바이러스가 전파가 안된 경우
    for r in range(n):
      for c in range(n):
        if test_map[r][c] == '_':
          return 
    
    # 정답 갱신
    answer = min(answer, max_level)
    return
          
  # 활성화 시킬 바이러스 선정      
  for virus_group in combinations(virus, m):
    for r, c in virus_group:
      board[r][c] = 0

    bfs(virus_group)

    for r, c in virus_group:
      board[r][c] = "*"

  if answer == 1000000:
    answer = -1

Solution(n, m, board)