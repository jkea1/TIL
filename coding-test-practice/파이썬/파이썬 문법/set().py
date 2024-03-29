# set
# s = set('1233455666')
# print(s) # {'3', '5', '1', '4', '6', '2'}

# add
# s.add(7)
# print(s) # {'3', 7, '5', '6', '4', '1', '2'}

# discard
# s.discard('3')
# print(s) # {'5', 7, '2', '4', '1', '6'}

# difference
# 차집합 만들어 준다. 
# set1 - set2
# set1.difference(set2)

# union
# 합집합

# ex 차집합
# 판콜에이 = {'a', 'b', 'c', 'f'}
# 타이레놀 = {'a', 'b', 'd'}

# print("판콜에이 - 타이레놀", 판콜에이.difference(타이레놀))
# {'c', 'f'}

# ex 합집합
# print("판콜에이 + 타이레놀", 판콜에이.union(타이레놀))
# {'d', 'a', 'c', 'b', 'f'}

# ex 교집합
# print("교집합", 판콜에이.intersection(타이레놀))
# {'a', 'b'}

# 예제 문제 
# 단톡방에 x마리의 동물이 대화를 하고 있다. 
# 각각의 동물들이 톡을 전송할 때마다 서버에는 아래와 같이 저장된다. 
# 1. 단톡방에는 모두 몇 마리의 동물이 있을까요? 톡은 무조건 1회 이상 전송합니다. => set + len
# 2. 단톡방에 동물들마다 몇 번의 톡을 울렸을까요? => dictionary

serverData = '개리 라이캣 개리 개리 라이캣 자바독 자바독 파이 썬'

# 1
s = serverData.split(' ')
print(s) # ['개리', '라이캣', '개리', '개리', '라이캣', '자바독', '자바독', '파이', '썬']

s = set(s)
print(s) # {'개리', '파이', '자바독', '라이캣', '썬'}

print(len(s)) # 5

# 2
list = serverData.split()
s = set(list)

d = {}
for v in s:
  # print(v, list.count(v))
  d[v] = list.count(v)

print(d)
# 라이캣 2
# 썬 1
# 파이 1
# 개리 3
# 자바독 2

# {'썬': 1, '자바독': 2, '파이': 1, '개리': 3, '라이캣': 2}

