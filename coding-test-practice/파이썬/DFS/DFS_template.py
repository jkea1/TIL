# dfs 템플릿
visited = []

def dfs(cur_v):
  # *--------------------*
  # 그래프를 방문하여 처리해야 할 일을 여기서 한다. 
  # ex.
  # if cur_v == value:
  #   << 현재 노드가 특정 값을 만조할 때 해야할 일>>
  #   return cur_v

  visited.append(cur_v)

  for v in graph[cur_v]:
    if v not in visited:
      dfs(v)