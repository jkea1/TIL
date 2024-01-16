# 반복문
def binary_search(nums, target):
  # 정렬
  nums.sort()
  
  l, r = 0, len(nums) - 1

  while l <= r:
    mid = (l + r) // 2

    if target > nums[mid]:
      l = mid + 1
    elif target < nums[mid]:
      r = mid - 1
    elif target == nums[mid]:
      print("found!", nums[mid])
      return 
  
  print("no target in the list")
  return 


nums = [2, 6, 9, 14, 15, 17, 19, 22, 25, 26, 37, 45, 58, 67, 82]
binary_search(nums, 58)