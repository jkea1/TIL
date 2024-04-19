# 우선 순위 큐 이용
# 시간 복잡도가 이건 애매하다. n + m + n
# set을 사용해서 happy를 표현하는게 더 편함
# plants 2,3,1,2
# watered 3,1,2,1,4,1
# last_watered 2,3,1,2

# 초기 우선 순위 큐
# q=[[1, 2], [2, 0], [2, 3], [3, 1]] + [2, 2]

# last_watered 갱신 2,3,2,2

# 히피파이..?

import heapq

plants = [2,3,1,2]
watered = [3,1,2,1,4,1]

result = []
happy = [True for _ in range(len(plants))]
happy_cnt = len(plants)
last_watered = [value for value in plants]
q = [(remain, i) for i, remain in enumerate(plants)]
heapq.heapify(q)

for day, plant_num in enumerate(watered):

    if happy[plant_num-1]:
        heapq.heappush(q, (plants[plant_num-1] + day + 1, plant_num -1)) # 1부터 시작하니까 1을 넣어줌
        last_watered[plant_num-1] = plants[plant_num-1] + day + 1

    while q and q[0][0] <= day + 1:
        last, p_num = heapq.heappop(q)

        if last != last_watered[p_num]:
            continue
        
        happy[p_num] = False
        happy_cnt -= 1

    result.append(happy_cnt)

print(result)

# 해시 테이블을 잘 사용한 풀이 
# java

# public class Solution {
#     public int[] solution(int[] plants, int[] watered) {
#         Map<Integer, Integer> leftDays = new HashMap<>(); // key는 기분 안좋아지는 날짜, value는 그 날짜에 해당하는 식물의 수
#         int[] result = new int[watered.length + 1];
#         int[] nextUnhappyDays = plants.clone(); // 식물별 기분 안좋아지는 날짜
#         Arrays.fill(result, plants.length); // result[0] = plants.length;
        
#         for (int plant : plants) { // O(N) -> N = plants.length
#             leftDays.put(plant, leftDays.getOrDefault(plant, 0) + 1);
#         }
        
#         for (int day = 1; day <= watered.length; day++) { // O(M) -> M = watered.length
#             int index = watered[day - 1] - 1;
#             int nextUnhappyDay = nextUnhappyDays[index];
            
#             if (nextUnhappyDay >= day) { // 아직 해당 식물이 기분이 좋다면
#                 leftDays.put(nextUnhappyDay, leftDays.get(nextUnhappyDay) - 1);
#                 int addedDay = nextUnhappyDay + plants[index]; // 물을 받았기 때문에 기분 안좋아지는 날짜를 업데이트한다.

#                 leftDays.put(addedDay, leftDays.getOrDefault(addedDay, 0) + 1);
#                 nextUnhappyDays[index] = addedDay;
#             }
#             result[day] = result[day - 1] - leftDays.getOrDefault(day, 0);
#         }
        
#         return Arrays.copyOfRange(result, 1, result.length);
#     }
# }