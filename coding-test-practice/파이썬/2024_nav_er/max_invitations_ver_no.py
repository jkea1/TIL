a_list=[2,10,3]
b_list=[1,5,10]
delay_list = [
    [[2423, 10], [3423, 30], [1, 40], [450, 50], [1200, 60], [2781, 100]],
    [[10, 50000, 100], [1, 100000, 1100], [51, 100000, 2100], [90, 100000, 3100], [73, 50000, 4100]],
    [[1001, 110000], [1001, 120000], [1001, 130000], [3001, 140000], [3002, 150000], [3003, 160000], [3003, 170000], [9003, 180000], [9004, 190000], [9005, 200000]]
    ]

from bisect import bisect_left

def solution(a,b,delay):
    # 각 서버 마다 모아 두었다. 
    # [2423, 3423, 1, 450, 1200, 2781]
    # 이진 탐색 logn ...?
    # 투 포인터로 하면 N*M 으로 풀어도 될 것 같다. => 다시 포인터를 앞으로 보낼 필요 없이 뒤로 쭉 가는 구조가 맞다.

    server_list = [sorted([delay[i][j] for i in range(len(delay))]) for j in range(len(delay[0]))]
    print("서버 리스트", server_list)

    b *= 1000
    answer = [0,0]

    for server_num, server in enumerate(server_list):
        maximum = 0

        for low_idx,low in enumerate(server):
            high = min(low*a, low+b)
            high_idx = bisect_left(server, high) # 타겟의 왼쪽의 index를 return 한다. +1 안해도 될 것 같다...?
            maximum = max(maximum,high_idx-low_idx)

        if maximum > answer[0]:
            answer = [maximum,server_num+1]

    return answer


for a,b,delay in zip(a_list, b_list, delay_list):
    print(solution(a,b,delay))


# 큐 버전
from collections import deque

a = 2
b = 1
delay = [[2423, 10], [3423, 30], [1, 40], [450, 50], [1200, 60], [2781, 100]]
cnt = 1
server = 1

b *= 1000

for i in range(len(delay[0])):
    delay.sort(key = lambda x:x[i]) # 이건 위의 방법처럼 수정하면 될 것 같다. 
    print("delay", delay)

    q = deque()
    q.append(delay[0][i])

    for j in range(1, len(delay)):

        while q and ((q[0] * a) <= delay[j][i] or (q[0] + b) <= delay[j][i]):
            q.popleft()
        q.append(delay[j][i])

        if len(q) > cnt:
            cnt = len(q)
            server = i+1

print([cnt, server])