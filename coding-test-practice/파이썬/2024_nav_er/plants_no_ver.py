# 광고 삽입 문제 와 유사하다. 
# https://school.programmers.co.kr/learn/courses/30/lessons/72414
# 누접합
# 한번 n으로 훑으면서 할 수 있으면 시간 복잡도를 줄이는데 제일 좋다. 
# O(n)
# 윤석님 코드로 풀면 좋은 것 같다. 

plants_list = [[2,3,1,2],[5,5,5],[5,5,5],[2,1,3,4,3]]
watered_list = [[3,1,2,1,4,1],[1,2,1,2,3],[1,2,1,2,1],[2,2,2,2,5,5,5]]

# plants = [2,3,1,2]
# watered = [3,1,2,1,4,1]

def solution(plants, watered):
    n, m = len(plants), len(watered)
    plants = [0] + plants # 이렇게 앞에 0을 index에 0을 넣어줬다. 식물이 1부터 시작하니까.
    # print("for check", plants) 

    last_watered_date =[0 for _ in range(n+1)]

    # 각 일자 별 죽어가는 식물 수를 담은 리스트
    dead_plant=[0 for _ in range(m)]
    # print("dead_plant", dead_plant)

    # 물을 하나하나 준다. O(m)
    for i, plant in enumerate(watered):
        cur_date = i+1

        # 현재 물을 주는 식물이 죽어버렸으면 dead_plant에 추가.
        if cur_date - last_watered_date[plant] > plants[plant]:
            due_date = last_watered_date[plant] + plants[plant]-1
            dead_plant[due_date] += 1
            plants[plant] = m+1 # 그냥 큰 값을 넣어줘도 된다. plants에 죽어 버린 식물에 max 값을 넣는다. => 물 준 날짜를 죽어도 기록하기 위해서
        
        # (마지막으로)물 준 날짜를 기록해둔다.
        last_watered_date[plant] = cur_date
        # print("확인", dead_plant, last_watered_date)

    # 죽은 식물이 있는지 하나하나 살펴본다. O(n)
    for plant in range(1, n+1):
        if m+1 - last_watered_date[plant] > plants[plant]:
            due_date = last_watered_date[plant]+plants[plant]-1
            dead_plant[due_date] += 1

    count = 0
    answer = []
    for dead in dead_plant:
        count+=dead
        answer.append(n-count)

    return answer

for plants, watered in zip(plants_list,watered_list):
    print(solution(plants,watered))
# solution(plants, watered)