# 검사 
def isValid(standard_num, num, a, b):
  if standard_num != num and standard_num / a < num and num < standard_num * a and standard_num - b < num and num < standard_num + b:
    return True
  else:
    return False
    
# 테케 1만 되고 나머지는 안되네
def max_invitations(a, b, delay):
  answer = 0
  max_num = 0
  q = []

  for idx in range(len(delay[0])):
    arr = [x[idx] for x in delay]  
    print("new", arr)

    for candidate in arr:
      for other_candidate in arr:
        if isValid(candidate, other_candidate, a, b*1000) and isValid(other_candidate, candidate, a, b*1000):
          max_num += 1 

      answer = max(answer, max_num)
      max_num = 0
    
    q.append(answer)
  
  max_num = max(q)
  idx = q.index(max_num)

  print([max_num, idx+1])



# max_invitations(2, 1, [[2423, 10], [3423, 30], [1, 40], [450, 50], [1200, 60], [2781, 100]])
# max_invitations(10, 5, [[10, 50000, 100], [1, 100000, 1100], [51, 100000, 2100], [90, 100000, 3100], [73, 50000, 4100]])
max_invitations(3, 10, [[1001, 110000], [1001, 120000], [1001, 130000], [3001, 140000], [3002, 150000], [3003, 160000],
                  [3003, 170000], [9003, 180000], [9004, 190000], [9005, 200000]])

    # # 후보 수
    # m = len(delay)
    # # 서버 수
    # n = len(delay[0])

    # max_candidates = 0
    # selected_server = -1

    # for server_idx in range(n):
    #     candidates_count = 0

    #     for candidate in range(m):
    #         can_invited = True

    #         for other_candidate in range(m):
    #             # 후보 간의 통신 시간을 확인하여 초대 가능 여부 판단
    #             if candidate != other_candidate:
    #                 if delay[candidate][server_idx] <= a * delay[other_candidate][server_idx] or delay[candidate][server_idx] <= delay[other_candidate][server_idx] + b:
    #                     can_invited = False

    #         if can_invited:
    #             candidates_count += 1

    #     if candidates_count > max_candidates:
    #         max_candidates = candidates_count
    #         selected_server = server_idx + 1

    # return [max_candidates, selected_server]

# 테스트
test_cases = [
    {
        'a': 2,
        'b': 1,
        'delay': [[2423, 10], [3423, 30], [1, 40], [450, 50], [1200, 60], [2781, 100]],
        'expected_result': [3, 2]
    },
    {
        'a': 10,
        'b': 5,
        'delay': [[10, 50000, 100], [1, 100000, 1100], [51, 100000, 2100], [90, 100000, 3100], [73, 50000, 4100]],
        'expected_result': [4, 1]
    },
    {
        'a': 3,
        'b': 10,
        'delay': [[1001, 110000], [1001, 120000], [1001, 130000], [3001, 140000], [3002, 150000], [3003, 160000],
                  [3003, 170000], [9003, 180000], [9004, 190000], [9005, 200000]],
        'expected_result': [6, 1]
    }
]

# 테스트
# for idx, test_case in enumerate(test_cases):
#     result = max_invitations(test_case['a'], test_case['b'], test_case['delay'])
#     print(f"Test Case {idx+1}: {'Pass' if result == test_case['expected_result'] else 'Fail'}")
