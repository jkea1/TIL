import math
from heapq import heappop, heappush

def dijkstra(graph, start_v, dest, n):
  # 방문 표시하고 갱신하는 비용이 낮은 경로로 계속 갱신하는 역할을 하는 리스트이다. 
  distances = [float("inf")] * (n + 1)

  # 시작점 노드에 0 할당
  distances[start_v] = 0

  # 우선 순위 큐 
  # => heap(들어온 순서에 상관없이, 일정한 기준(우선순위)에 따라 요소들이 나오도록 할 수 있는 Queue)을 통해 구현할 수 있다. 
  pq = [(0, start_v)]

  while pq:
    cur_dist, cur_v = heappop(pq) # 자동으로 cost값이 낮은 순으로 정렬된다. 
    # 만약 현재 distances cost 값이 여전히 더 작다면 다시 갱신 할 필요 없다.   
    if distances[cur_v] < cur_dist:
      continue

    # cur_dist 보다 
    for next_v, cost in graph[cur_v]: # 인접한 노드
      next_dist = distances[cur_v] + cost

      if next_dist < distances[next_v]:
        distances[next_v] = next_dist
        heappush(pq, (next_dist, next_v))

  return distances[dest]

# 인접 리스트 
graph = {
  1: [(2, 2), (1, 4)],
  2: [(1, 3), (9, 5), (6, 6)],
  3: [(4, 6)],
  4: [(3, 3), (5, 7)],
  5: [(1, 8)],
  6: [(3, 5)],
  7: [(7, 6), (9, 8)],
  8: []
}

dijkstra(graph, 1, 8, len(graph))

# break는 반복문 자체를 빠져나오고, 
# continue는 한 주기마다 실행해야 할 코드를 넘어가고 다시 조건을 판단하는 곳으로 건너뛰기 된다.

