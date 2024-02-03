from collections import deque, Counter
from itertools import combinations

# n, m = 7, 7

# board = [
#   [2, 0, 0, 0, 1, 1, 0],
#   [0, 0, 1, 0, 1, 2, 0], 
#   [0, 1, 1, 0, 1, 0, 0], 
#   [0, 1, 0, 0, 0, 0, 0], 
#   [0, 0, 0, 0, 0, 1, 1], 
#   [0, 1, 0, 0, 0, 0, 0],
#   [0, 1, 0, 0, 0, 0, 0]
# ]

n, m = 4, 6
board = [
  [0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 2],
  [1, 1, 1, 0, 0, 2],
  [0, 0, 0, 0, 0, 2]
]

# 안전지대(0) 수
answer = 0

def Solution(n, m, board):

  # 빈칸, 바이러스 위치 저장
  virus, empty = [], []
  for r in range(n):
    for c in range(m):
      if board[r][c] == 0:
        empty.append([r, c])
      elif board[r][c] == 2:
        virus.append([r, c])

  # 유효성 범위 검사
  def in_range(next_r, next_c):
    return 0 <= next_r < n and 0 <= next_c < m

  def bfs():
    global answer # bfs 함수에서 전역 변수 answer를 사용하겠다고 선언
    tmp = [row[:] for row in board] # 리스트 컴프리헨션
    queue = deque(virus) # 큐 생성

    # bfs를 통해 바이러스 전파 
    while queue:
      r, c = queue.popleft()

      for dr, dc in [[-1,0], [1, 0], [0, -1], [0, 1]]:
        next_r, next_c = r + dr, c + dc

        # 범위 유효성 검사   
        if in_range(next_r, next_c):
          if tmp[next_r][next_c] == 0:
            tmp[next_r][next_c] = 2
            queue.append((next_r, next_c))

    # 전파 완료 후 차례대로 0, 1, 2 개수 세기 
    count = Counter([])
    for row in tmp:
      count += Counter(row)

    # 빈칸 개수를 통해 정답 갱신
    answer = max(answer, count[0])
    return 
      
  # 빈 곳(0)에 벽 3개를 세울 때 가능한 모든 조합(combinations). 
  for new_wall in combinations(empty, 3):
    row, col = [], []

    for r, c in new_wall:
      row.append(r)
      col.append(c)
    
    if board[r][c] != 0: # 빈벽(0) 재 확인 => 꼭 필요하나?
      break
    else:
      # 위에서 만들었던 조합으로 벽을 세운다.  
      for i in range(3):
        board[row[i]][col[i]] = 1
      
      bfs()

      # 다시 벽을 초기화 시킨다. 
      for i in range(3):
        board[row[i]][col[i]] = 0

  print("정답", answer)

Solution(n, m, board)













