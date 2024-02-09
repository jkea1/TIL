from collections import deque


def topological_sort(node_num, prerequisites):
    visited = []
    graph = [[] for _ in range(node_num)]
    indegree = [0] * node_num

    # prerequisites의 원소 [v, u]는 u->v 의 방향을 가진 edge를 뜻한다.
    for v, u in prerequisites:
        graph[u].append(v)
        # indegree을 기록한다.
        indegree[v] += 1

    # 위상정렬을 수행한다.
    # indegree == 0 인 정점부터 탐색이 시작된다.
    q = deque()
    for v in range(node_num):
        if indegree[v] == 0:
            q.append(v)
    while q:
        cur_v = q.popleft()
        visited.append(cur_v)

        # 해당 정점과 연결된 노드들의 진입차수에서 1빼기
        for next_v in graph[cur_v]:
            indegree[next_v] -= 1

            # 진입차수가 0이면 이제 방문해도 된다는 뜻이기 때문에 queue에 추가해준다.
            if indegree[next_v] == 0:
                q.append(next_v)
    
    return visited