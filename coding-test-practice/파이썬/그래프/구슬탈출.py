from collections import deque

# 예제 1 => 1
# n, m = 5, 5

# board = [
#   ["#","#","#","#","#"],
#   ["#",".",".","B","#"],
#   ["#",".","#",".","#"],
#   ["#","R","O",".","#"],
#   ["#","#","#","#","#"]
# ]

# 예제 7 => 0
n, m = 3, 10

board = [
  ["#","#","#","#","#","#","#","#","#","#"],
  ["#",".","O",".",".",".",".","R","B","#"],
  ["#","#","#","#","#","#","#","#","#","#"]
]

# 빨간 구슬(R)을 꺼내야 구멍을 통해 꺼내야 한다. 
# 상, 하, 좌, 우
# 10번 이하로 기울려서 구멍을 통해 빠져나가게 해야한다. 

answer = 0
queue = deque() 

# 집합을 나타내는 자료구조
# 순서가 존재 하지 않는다는 점에서 dictionary와 동일하다. 
# 중복되는 데이터를 제거하여, 유일한 데이터만을 담을 수 있도록 설계되었다. 
# mutable 객체이므로 데이터 삽입과 제거가 가능하다. 
# https://wikidocs.net/91520#immutable-mutable
visited = set()

# 구슬 위치 확인
for r in range(n):
  for c in range(m):
    if board[r][c] == "R":
      rr, rc = r, c
    elif board[r][c] == "B":
      br, bc = r, c

# 첫 번째 위치 예약 
# red 와 blue 위치를 한꺼번에 생각해야 한다.  
queue.append([rr, rc, br, bc, 1]) 

# 방문 표시
visited.add((rr, rc, br, bc))

# 현재 위치 = r, c
# 다음 위치를 반환해준다. 
def move(r, c, dr, dc):
  count = 0

  # 다음 위치가 벽(#)이기 전 까지 + 현재 위치가 구멍일때 = 0 
  while board[r+dr][c+dc] != "#" and board[r][c] != "O":
    r += dr
    c += dc
    count += 1

  return r, c, count
  
while queue:
  cur_rr, cur_rc, cur_br, cur_bc, level = queue.popleft()

  if level > 10:
    break

  for dr, dc in [[-1, 0], [1, 0], [0, -1], [0, 1]]:
    next_rr, next_rc, r_count = move(cur_rr, cur_rc, dr, dc)
    next_br, next_bc, b_count = move(cur_br, cur_bc, dr, dc)

    # 파란 구슬이 구멍에 들어간 경우
    if board[next_br][next_bc] == 'O':
      continue

    # 만약 이미 방문한 곳이라면 다시 확인 할 필요 없다. 
    if (next_rr, next_rc, next_br, next_bc) in visited:
      continue

    # 빨간 구슬이 구멍에 들어간 경우 
    if board[next_rr][next_rc] == "O":
      answer = 1
      break

    # 두 구슬의 위치가 동일한 경우 => 더 멀리서 이동된 구슬을 이전 칸으로 이동시킨다.
    # 왜 멀리서 이동된 구슬을 옮겨야 하는 걸 어떻게 캐치하지

    if next_rr == next_br and next_rc == next_bc:
      if r_count > b_count:
        next_rr -= dr
        next_rc -= dc

      else:
        next_br -= dr
        next_bc -= dc

    queue.append([next_rr, next_rc, next_br, next_bc, level+1])
    visited.add((next_rr, next_rc, next_br, next_bc))

  else:
    continue

  break
      
print("정답", answer)
