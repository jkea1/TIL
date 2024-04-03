# 재귀를 이용하여 DFS를 구현한 문제이다. (bfs로도 구현할 수 있다. 둘다 돌려보면 시간은 dfs가 더 적게 걸리기는 하다.)
# 지금 전체적으로 이해가 안되고 있었던게 재귀에 대한 이해가 부족해서 그런거 같은데
# 그리고 텍스트로 적은걸 코드로 구현하는 능력이 떨어져서 이해하는데 시간이 걸리는 것 같아.
# 숫자를 잘 활용할 수 있다는 생각이 든다. => 여기에서도 -1를 초기화 색깔로 사용하고, 1, 0을 set색깔로 사용하면서 next_vertex_color(= color[next_v])를 1 - c 로 표현했자나?
# 제일 간단한 숫자(-1, 1, 0)를 요리조리 잘 굴려서 잘 이용해 볼 생각을 해보자. 

# 여기서 색깔은 
# -1 : 아직 색칠되지 않은 상태, 초기화 상태 
# 1 : Set A 색깔
# 0 : Set B 색깔 

class Solution(object):
    def isBipartite(self, graph):
        #✅ color의 모든 요소를 -1로 초기화한다.
        n = len(graph)
        color = [-1] * n

        # c = before_color, v = vertex, next_vertex
        # 원래대로 라면 이 부분이 isvisited에 대한 처리가 있었을텐데 이 문제는 -1 이냐 아니냐로 대신하였다.
        def dfs(c, v):
            #✅ 현재 노드와 연결된 다른 노드들에 대해 반복한다.
            for next_v in graph[v]:
                # 처음 방문하는 노드일때 
                #✅ 만약 color[next] == -1 이라면, 
                if color[next_v] == -1:
                    #✅ 다음 노드를 현재 노드와 다른 집합에 넣는다.
                    color[next_v] = 1 - c 
                    # color[next_v] = 1 - c => 이 부분 때문에 더 헷갈리는 거 같아. 
                    # 이렇게 이전 상태(= 이전 vertex color = c)를 dfs에 함께 넘겨줘서 사용할 수 있다는 걸 인지하고 잘 사용해 보자.

                    #✅ 다음 노드를 탐색한다.
                    if not dfs(color[next_v], next_v):
                        return False
                
                # 처음 방문하는 노드가 아닌 경우 (= 이미 0 또는 1로 색칠 되어 있는 경우) 
                #✅ 아닐 때, 만약 다음 노드가 현재 노드와 같은 집합에 이미 포함되어 있으면 false를 리턴한다.
                elif color[next_v] != 1 - c: # 0 != (1 - 0 === 1) or 1 != (1 - 1 === 0)
                    return False
                
            return True

        #✅ 모든 노드에 대해 반복한다. 
        # => 왜 모든 노드에 대해서 다 dfs를 하는거냙
        # The graph may not be connected 
        # => 어느 노드와도 연결 되어 있지 않은 노드가 있을 수 있기 때문에 모든 노드에 대해서 dfs를 돌려야 한다. 

        # for문을 돌면서 각 노드에 대해 bfs를 하면서 조건에 부합하는지 확인한다. 
        # 해당 for문의 목적은 조건에 부합하지 않는 상황을 걸러내기 위함이다. 
        # for문을 다 돌면서 확인했는데도 False로 return 되는 상황이 없다면 Bipartite가 맞다. => True를 return 한다. 
        for v in range(len(graph)):
            #✅ 만약 color[i] == -1 이라면 탐색을 시작한다.
            if color[v] == -1:
                #✅ 첫 노드를 0으로 표시한다. DFS를 시작한다.
                color[v] = 0

                if not dfs(color[v], v): # 만약 dfs 결과가 False면 => False다. <=> ⭐️ Bipartite 조건을 만족하지 않으면 False를 반환한다. ⭐️
                    return False

        return True
    
graph = [[1,3],[0,2],[1,3],[0,2]] # True
# graph = [[1,2,3],[0,2],[0,1,3],[0,2]] # False