# arr = [2,7,11,15]
# target = 9

# sol1
# def twosome(arr, target):
#   for i in range(len(arr)):
#     for j in range(i + 1, len(arr)):
#       if arr[i] + arr[j] == target:   
#         print([i, j]) 
#
# twosome([2,7,11,15], 9)

# sol2 재귀
nums = [4, 9, 7, 5, 1]
target = 14
ans = []

def backtracking(startIndex):
  if len(ans) == 2:
    # print(nums[ans[0]], nums[ans[1]])

    if nums[ans[0]] + nums[ans[1]] == target:
      print(ans) 
    return 
  
  for i in range(startIndex, len(nums)):
    ans.append(i)
    backtracking(i+1)
    ans.pop()

backtracking(0)

# backtracking([2,7,11,15], 9)


