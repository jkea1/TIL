# 팩토리얼
# 
# n!
# ex
# n = 5
# 5 * 4 * 3 * 2 * 1 = 120 

def factorial(n):
  if n == 1:
    return 1
  
  return n * factorial(n - 1)

print(factorial(5))

