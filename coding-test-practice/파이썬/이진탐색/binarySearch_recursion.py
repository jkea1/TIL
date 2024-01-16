def binary_search(nums,target):
  nums.sort()
  l, r = 0, len(nums) - 1

  print("nums", nums) 
  
  def recursion(list,target,l,r):
    if l > r:
      print("no target is in list")
      return 
    
    mid = (l + r) // 2

    if target > list[mid]:
      recursion(list, target, mid + 1, r)
    elif target < list[mid]:
      recursion(list, target, l, mid - 1)
    else:
      print("found!", list[mid])
      return 
    
  
  recursion(nums, target, l, r)
    
  
nums = [2, 6, 9, 14, 15, 17, 19, 22, 25, 26, 37, 45, 67, 82]
binary_search(nums, 9)