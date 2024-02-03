from collections import deque

# 예제 1 => 1
n, m = 5, 5

board = [
  ["#","#","#","#","#"],
  ["#",".",".","B","#"],
  ["#",".","#",".","#"],
  ["#","R","O",".","#"],
  ["#","#","#","#","#"]
]

# 예제 7 => 0
# n, m = 3, 10

# board = [
#   ["#","#","#","#","#","#","#","#","#","#"],
#   ["#",".","O",".",".",".",".","R","B","#"],
#   ["#","#","#","#","#","#","#","#","#","#"]
# ]

# 10번 이하로 굴려서 빼낼 수 있으면 1, 없으면 0
answer = 0
queue = deque()
visited = set()

# 여러 방법 중에서 가능한 짧게 도착 할 수 있도록 시도해 봐야 하므로 
# bfs를 생각했음

# 우선 현재 R 와 B 위치를 파악해서 queue에 예약해 둬야 한다. 
for r in range(n):
  for c in range(m):
    # rr, rc, br, bc 위치 파악
    if board[r][c] == "R":
      rr, rc = r, c
    if board[r][c] == "B":
      br, bc = r, c

queue.append([rr, rc, br, bc, 1])
visited.add((rr, rc, br, bc))

print(queue, visited)

# 벽이 닿을때 까지 혹은 0에 들어가지 전까지 이동 해야한다. 
def move(r, c, dr, dc):
  distance = 0

  while board[r+dr][c+dc] != "#" and board[r][c] != 0:
    r += dr
    c += dc
    distance += 1
  
  return r, c, distance        

while queue:
  cur_rr, cur_rc, cur_br, cur_bc, level = queue.popleft()

  if level >= 10:
    break
  # 상,하,좌,로 보드를 움직일 수 있다. 
  for dr, dc in [[-1, 0], [1, 0], [0, -1], [0, 1]]:
    next_rr, next_rc, r_distance = move(cur_rr, cur_rc, dr, dc)
    next_br, next_bc, b_distance = move(cur_br, cur_bc, dr, dc)

    print("red ball", next_rr, next_rc, r_distance)
    break

