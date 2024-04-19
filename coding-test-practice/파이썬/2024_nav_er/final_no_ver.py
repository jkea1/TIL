# cap을 고려하지 않는 코드이다.

cap_list = [100,100,2000]
k_list = [70,82,1998]
score_list = [[95, 90, 80, 80, 80, 70, 70, 30, 10],[100, 97, 97, 92, 87, 77, 77, 72, 72],[2000, 2000, 2000, 2000, 1999]]
m_list = [4,4,5]

from bisect import bisect_left, bisect_right

def solution(cap,k,score,m):
    n = len(score)
    high_idx, low_idx = n-1-bisect_right(score[::-1],k), n-1
    high_count, low_count = high_idx+1, bisect_left(score[::-1],k)
    answer = 1
    if high_count < m:
        return 0
    while high_count >= m:
        answer+=1
        if low_count == 0:
            return -1
        if score[high_idx]-k < k-score[low_idx]:
            score[high_idx] = k
            score[low_idx] += score[high_idx]-k
            high_idx-=1
            high_count-=1
        else:
            score[high_idx] -= k-score[low_idx]
            score[low_idx] = k
            low_idx-=1
            low_count-=1
    return answer

for cap,k,score,m in zip(cap_list,k_list,score_list,m_list):
    print(solution(cap,k,score,m))

print(solution(100,100,[90,80],1))

# [100, 97, 97, 92, 87, ❗️82 ,77, 77, 72, 72]
  # [100, 97, 97, 92, 📍82, ❗️82 ,77, 77, 📍77, 72]
  # [100, 97, 97, 92, 📍82, ❗️82 ,77, 77, 📍77, 72]
  # [100, 97, 97, 92 - 10, 📍82, ❗️82 ,77, 77, 📍77, 72 + 10]
  # [100, 97, 97, 📍82, 📍82, ❗️82, 📍82, 77, 77, 📍77]

  # 우선순위 큐로 구현한 방식이다. 
import heapq
cap = 100
k = 82
score = [100, 97, 97, 92, 87, 77, 77, 72, 72]
m = 4
visited = set()
start = m-1
difference = 0
answer = 0

while start < len(score) and score[start] >= k:
    visited.add(start)
    difference += score[start] - k
    
    if score[start] > k:
        answer += 1
    start += 1

heap = []
for i in range(len(score)):
    if i in visited:
        continue

    if score[i] >= k:
        if cap - score[i] != 0:
            heapq.heappush(heap, -(cap - score[i])) # 파이선은 최소 힙이므로 - 해줘야 한다. 
    else:
        heapq.heappush(heap, -(k - score[i]))

while heap and difference > 0:
    print(heap)
    difference += heapq.heappop(heap)
    answer += 1

if difference > 0:
    print(-1)
else:
    print(answer)
