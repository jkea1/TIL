import heapq

plants = [2, 3, 1, 2]
list_plants = [[i] for i in plants] # [[5], [5], [5]]

watered = [3, 1, 2, 1, 4, 1]
max_day = len(watered) # 마지막 날
new_plants = []
result = [] # [4, 2, 2, 2, 2, 1]

# 주어진 식물에서 call by ref를 할 수 있게 각 수를 list에 담아줌. 
# 이렇게 했을 때, heap에 값을 list형태로 저장하고
# list_plants 변수의 값에 변화를 주면 heap 내의 값도 변하기 때문에 
# 추후에 식물의 물을 주는 일 수를 list_plants의 인덱스로 접근해서 값을 늘려도
# heap에서 값을 접근할 수 있음.

# heap에 ([각 식물들의 물을 줘야하는 일수], index) 형태로 저장함.
for index, plant in enumerate(list_plants):
    new_plants.append((plant, index)) # heap [([5], 0), ([5], 1), ([5], 2)]

def give_water_to_plants():
    count_day = 1
    heapq.heapify(new_plants) # [([5], 0), ([5], 1), ([5], 2)]

    while count_day <= max_day: 
        list_plants[watered[count_day-1]-1][0] = count_day + plants[watered[count_day-1]-1]
        # print("list_plants", list_plants) # [[6], [5], [5]]
        
        # print("new_plants", new_plants) # [([6], 0), ([5], 1), ([5], 2)]
        heapq.heapify(new_plants)
        # print("new_plants", new_plants) # [([5], 1), ([6], 0), ([5], 2)]

        if new_plants:
            print("값 확인", new_plants, new_plants[0][0][0], count_day)

            while new_plants and new_plants[0][0][0] == count_day:
                heapq.heappop(new_plants)

            print("new_plants 결과 확인", new_plants)
            result.append(len(new_plants))
        else:
            result.append(0)

        count_day += 1

give_water_to_plants()

print(result)

# 다른 우선 순위 큐 풀이 방법
import heapq

def count_happy_plants(watered, plants):
    n = len(plants)
    m = len(watered)
    
    # 우선 순위 큐를 사용하여 다음으로 물을 줘야하는 날짜를 저장
    next_watering = [(plants[i], i) for i in range(n)]
    heapq.heapify(next_watering)
    
    # 결과를 저장할 배열
    result = []
    
    # 식물들의 기분 상태를 저장할 배열
    happy = [True] * n
    
    for day in range(m):
        # 해당 날짜에 물을 줄 식물의 인덱스
        watered_plant = watered[day] - 1
        
        # 해당 식물의 기분을 나쁘게 변경
        happy[watered_plant] = False
        
        # 주기에 맞게 기분 좋은 식물들의 개수를 세기
        count = 0
        while next_watering and next_watering[0][0] == day + 1:
            _, plant_index = heapq.heappop(next_watering)
            if happy[plant_index]:
                count += 1
            heapq.heappush(next_watering, (day + 1 + plants[plant_index], plant_index))
        
        # 결과에 추가
        result.append(count)
    
    return result

# 예시 입력
watered = [1, 2, 3, 1, 2]
plants = [2, 1, 3]

# 결과 출력
print(count_happy_plants(watered, plants))  # 출력: [2, 2, 1, 1, 1]
