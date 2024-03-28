# sorted()

testCaseOne = ['abc', 'def', 'hello world', 'hello', 'python']
testCaseTwo = 'Life is too short. You need python'.split()
testCaseThree = list(zip('anvfe', [1,2,3,4,5]))

# 길이순 정렬
# print(sorted(testCaseOne, key=len))
# ['abc', 'def', 'hello', 'python', 'hello world']

# 길이순으로 정렬 => 배열 뒤집기 
# print(sorted(testCaseOne, key=len, reverse=True))
# ['hello world', 'python', 'hello', 'abc', 'def']

# 앞파벳 순 정렬
# print(sorted(testCaseTwo, key=str.lower))
# ['is', 'Life', 'need', 'python', 'short.', 'too', 'You']

# key 값에 함수를 줄 수 도 있다. 
# lambda를 사용하여 함수로 바로 사용 가능하다. 
# print(sorted(testCaseThree, key=lambda x: x[1]))
# [('a', 1), ('n', 2), ('v', 3), ('f', 4), ('e', 5)]

