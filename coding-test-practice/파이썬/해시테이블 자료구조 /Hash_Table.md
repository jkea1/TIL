## 해시 테이블

Hash table은 효율적인 탐색(탐색)을 위한 자료구조로써 key-value 쌍의 데이터를 입력받습니다. hash function h에 key값을 입력으로 넣어 해시값 h(k)를 위치(인덱스)로 지정하여 key-value 데이터 쌍을 저장합니다. 저장, 삭제, 검색의 시간복잡도 모두 **O(1)**입니다.

- 파이썬의 경우에는 **Dictionary(딕셔너리)** 를 사용한다.
- key 값이 **문자열**인 경우에 해시 테이블을 사용하는 경우가 많다.

<br/>

  <img width="300" src="./img/Screenshot 2024-02-29 at 1.54.35 PM.png">

<br/>

- 예제

  - [Two Sum](https://leetcode.com/problems/two-sum/description/)

  ```
  # sol1. 완전 탐색
  class Solution:
    def twoSum(self, nums, target):
        nums = [[v, i] for i, v in enumerate(nums)]
        print("nums", nums)

        nums.sort(key = lambda x:x[0])
        print("nums", nums)


        # 포인터 초기화
        l, r = 0, len(nums) - 1

        while l < r:
            num_sum = nums[l][0] + nums[r][0]

            if num_sum > target:
                r -= 1
            elif num_sum > target:
                l += 1
            elif num_sum == target:
                return [nums[l][1], nums[r][1]]

  # sol2. hash table
  class Solution:
    # 해시 테이블
    def twoSum(self, nums, target):
        # 딕셔너리로 해시 테이블 구현
        memo = {}

        for i, num in enumerate(nums):
            needed = target - num

            if needed in memo:
                return [memo[needed], i]

            memo[num] = i
  ```

<br/>

- HashMap과 TreeMap, HashSet과 TreeSet
  </br>

  [비교 자료 링크](https://growth-coder.tistory.com/112)
