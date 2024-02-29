test_dict = {
  2: True,
  4: True,
  5: True,
  6: True
}

test_list = [2, 4, 5, 6]

# 딕셔너리에서 5의 탐색은 key 값의 탐색이기 때문에 O(1)으로 알 수 있다.  
if 5 in test_dict:
  print("is in here!")

# 리스트에서의 5의 탐색은 O(n)이 걸린다. 
if 5 in test_list:
  print("is in here!")

