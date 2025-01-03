# cap = 최대 점수, 모든 참가자는 0과 cap 사이의 점수를 가진다. 
# k, = 현재 점수
# score = 본인을 제외한 모든 참가자의 점수를 내림차순으로 담은 1차원 정수 배열
# m = 본선 진출 기준 등수
# 여러 동점자는 같은 등수로 취급한다. 

# 본인을 m등 이상이 되도록 점수를 옮겼을 때, 점수가 바뀌는 참가자 수의 최솟값을 반환하시오. 
# 만약 본선 진출이 아예 불가능하다면, -1을 반환하시오.

def solution(cap, k, score, m):
  print(cap, k, score, m)

# cap, k, score, m
solution(100, 70, [95, 90, 80, 80, 80, 70, 70, 30, 10], 4) # result 3
# solution(100, 82, [100, 97, 97, 92, 87, 77, 77, 72, 72], 4) # result 4
# solution(2000, 1998, [2000, 2000, 2000, 2000, 1999], 5) # result -1

# ❗️의문 : 점수 옮기기는 본인 점수도 가능한가?
# test case 1
# 100, 70, [95, 90, 80, 80, 80, 70, 70, 30, 10], 4
  # 우선 안 된다고 가정하고 하면 [95, 90, 80, 80, 80, 70, 70, 30, 10]

  # 4명 까지 본선에 진출이 가능하므로 80점인 사람 두명의 점수가 70점 까지 낮아져야 한다. 
  # [95, 90, 80, 80, 80, 70, 70, 30, 10]
  # [95, 90, 80, 80, 70, 70, 70, 30, 20]
  # [95, 90, 80, 70, 70, 70, 70, 30, 30]
  # 3명의 점수를 바꿨다. 

# test case 2
# 100, 82, [100, 97, 97, 92, 87, 77, 77, 72, 72], 4
  # 4명 본선 진출 가능
  # [100, 97, 97, 92, 87, ❗️82 ,77, 77, 72, 72]
  # [100, 97, 97, 92, 📍82, ❗️82 ,77, 77, 📍77, 72]
  # [100, 97, 97, 92, 📍82, ❗️82 ,77, 77, 📍77, 72]
  # [100, 97, 97, 92 - 10, 📍82, ❗️82 ,77, 77, 📍77, 72 + 10]
  # [100, 97, 97, 📍82, 📍82, ❗️82, 📍82, 77, 77, 📍77]

# 코드를 어떻게 짜야할 지 감을 못 잡겠네