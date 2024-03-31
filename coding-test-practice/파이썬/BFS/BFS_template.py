# BFS template
from collections import deque

def BFS(graph, start_v):
  q = deque()
  q.append(start_v)
  visited = [start_v]

  while q:
    cur_v = q.popleft()

    print(visited)

    if cur_v == 2:
      print("2 다!")

    # 각 node를 돌면서 처리해야 하는 부분
    for next_v in graph[cur_v]:
      if next_v not in visited:
        visited.append(next_v)
        q.append(next_v)

graph = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [1, 4],
  3: [0],
  4: [2]
}

BFS(graph, 0)

