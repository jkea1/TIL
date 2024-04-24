# 문자열은 무조건 앞에서 부터 잘라야 한다. 
# 1개 단위부터 ~ len(s) // 2 단위로 잘라야 한다. 

def solution(s):
    s_len = len(s)
    
    def compress(s, unit):
        # 우선 unit 단위별로 s를 잘라야 한다.
        # aabbaccc => aa, bb, ac, cc
        sliced_s = [s[i:i+unit] for i in range(0, s_len, unit)]
        
        # stack에 prev_v 값으로 미리 넣어둔다. 
        stack = [[sliced_s[0], 1]]
        new_arr = sliced_s[1:]
        
        for cur_value in new_arr:
            if cur_value == stack[-1][0]:
                prev_value = stack.pop()
                prev_value[1] += 1
                
                stack.append(prev_value)
            else:
                stack.append([cur_value, 1])
        
        # print(''.join([str(v[1]) + v[0] if v[1] > 1 else v[0] for v in stack]))
        
        return len(''.join([str(v[1]) + v[0] if v[1] > 1 else v[0] for v in stack]))
    
    # 이거 안하면 런타임에러 뜬다. 
    # 아래 range() 코드부터 range(1, 1) => range의 두번째 인자는 그 값을 포함 하지 않으므로 이렇게 하면 아래의 return 값 안의 min() 내의 배열은 빈 배열이 된다. 

    if len(s) == 1:
        return 1
    
    print("이렇게 하면 min 안나오나?", [v for v in range(1, 1)])
    
    # 먼저 1개 단위부터 ~ len(s) // 2 로 자르는 경우의 반복문을 돌려서 그 중 가장 짧은 길이로 압축 되는 값을 return 해야 한다. 
    return min([compress(s, unit) for unit in range(1, s_len // 2 + 1)])