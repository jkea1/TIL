# 한 case 당 10ms 제한시간 있다.

def solution(plants, watered):
  answer = [] 
  deadPlant = set()
  # print("죽은 식물", deadPlant)

  # plants 스케쥴
  pS = plants[::]

  for p_num in watered:
    # 하루 지남
    plants = [ d - 1 for d in plants]

    # v = 식물 번호
    if p_num not in deadPlant:
      # 물 줌
      plants[p_num - 1] += pS[p_num - 1] 

      # 죽은 식물 기록
      for i, left_day in enumerate(plants):
        if left_day == 0:
          deadPlant.add(i + 1)
        else: 
          continue

    tmp  = len([ d for d in plants if d > 0])
    answer.append(tmp)

  return answer

# 테스트 1
# plants = [2,3,1,2]
# watered = [3,1,2,1,4,1]
# 정답
# [4, 2, 2, 2, 2, 1]

# 테스트 2
# plants = [5, 5, 5]
# watered = [1, 2, 1, 2, 3]
# 정답
# [3, 3, 3, 3, 3]

# 테스트3
# plants = [5, 5, 5]
# watered = [1, 2, 1, 2, 1]
# 정답
# [3, 3, 3, 3, 2]]

# 테스트4
plants = [2, 1, 3, 4, 3]
watered = [2, 2, 2, 2, 5, 5, 5]

# 정답
# [5, 4, 2, 1, 0, 0, 0, 0]

solution(plants, watered)





