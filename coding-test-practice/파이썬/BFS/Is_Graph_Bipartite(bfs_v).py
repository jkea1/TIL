from collections import deque

class Solution:
    def isBipartite(self, graph):
        n = len(graph)
        color = [-1] * n
        
        # 각 노드에 대해서 BFS를 돌아야 한다. 
        for i, c in enumerate(color):
            if color[i] == -1:
                # 방문 안한 노드를 큐에 넣고 색깔을 0으로 바꾼다. 
                q = deque([i])
                color[i] = 0

            while q:
                cur_v = q.popleft()

                for next_v in graph[cur_v]:
                    if color[next_v] == -1:
                        q.append(next_v)

                        color[next_v] = 1 - color[cur_v]
                    
                    elif color[next_v] == color[cur_v]:
                        return False

        return True

# bipartite인 그래프일 경우  
graph = [[1,3],[0,2],[1,3],[0,2]]

# 아닌 경우
# graph = [[1,2,3],[0,2],[0,1,3],[0,2]]

