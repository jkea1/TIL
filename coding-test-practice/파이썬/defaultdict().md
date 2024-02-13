## defaultdict( )

- 파이썬의 collections 모듈에서 제공하는 기능 중 하나이다.
- 이를 사용하면 기본적으로 딕셔너리와 비슷하게 동작하지만, 존재하지 않는 키에 접근할 때마다 새로운 값을 생성할 수 있다는 특징이 있다.
- <code>( )</code> 안에는 새로운 값을 생성할 때 사용 할 자료형을 지정할 수 있다.

  - <code>d = defaultdict(list)</code>와 같이 선언하고 나서 <code>d['a'].append(1)</code>과 같이 사용하면, <code>'a'</code>라는 키에 해당하는 값이 없으면 빈 리스트가 자동으로 생성되고, 이 리스트에 <code>1</code>이 추가 된다.
  - <code>list</code> 말고도 다른 자료형이나 값도 가능하다.

    ```
    from collections import defaultdict

    # 문자열의 기본값을 빈 문자열로 설정
    d = defaultdict(str)
    print(d['a'])  # 출력: ''

    # 실수의 기본값을 0.0으로 설정
    d = defaultdict(float)
    print(d['a'])  # 출력: 0.0

    # 리스트의 기본값을 빈 리스트로 설정
    d = defaultdict(list)
    print(d['a'])  # 출력: []

    # 집합의 기본값을 빈 집합으로 설정
    d = defaultdict(set)
    print(d['a'])  # 출력: set()
    ```
