from collections import Counter

def solution(participant, completion):
    # 해시 테이블
    h = dict(Counter(participant))
    
    # for문 돌면서 삭제 
    for v in completion:
        h[v] -= 1
    
    # value가 1인 key 반환하기
    return [key for key, value in h.items() if value == 1][0]