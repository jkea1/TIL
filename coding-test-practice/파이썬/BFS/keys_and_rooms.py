from collections import deque

class Solution:
    def canVisitAllRooms(self, rooms):

        isVisited = [False] * len(rooms)

        def BFS(start_v):
            q = deque()
            
            q.append(start_v)
            isVisited[start_v] = True  

            while q:
                cur_v = q.popleft()
                
                for next_v in rooms[cur_v]:
                    if not isVisited[next_v]:
                        q.append(next_v)
                        isVisited[next_v] = True

        BFS(0)                

        return all(isVisited)  