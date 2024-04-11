def isValid(standard_num, num, a, b):
  if standard_num != num and standard_num / a < num and num < standard_num * a and standard_num - b < num and num < standard_num + b:
    return True
  else:
    # print("값 확인", standard_num / a < num, num > standard_num * a, standard_num - b < num, num > standard_num + b)
    return False

# isValid(100, 60, 2, 1000)

test = [[2423, 10], [3423, 30], [1, 40], [450, 50], [1200, 60], [2781, 100]]
arr = [ x[0] for x in test ]
# print("새로운 배열", arr)

# server2 로 테스트

def solution(arr):
  answer = 0
  max_num = 0

  for candidate in arr:
    for other_candidate in arr:
      if isValid(candidate, other_candidate, 2, 1000) and isValid(other_candidate, candidate, 2, 1000):
        # print("true")
        max_num += 1 

    print(answer, max_num)

    answer = max(answer, max_num)
    max_num = 0
  
  print(answer)
  # return answer

solution(arr)


# 서버1로 하면 최대 2명, 서버2로 하면 최대 3명

# 3명, server 2번