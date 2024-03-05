### 💡 클로저에 대해서 설명해 주세요.

> “A closure is the combination of a function and the lexical environment within which that function was declared.”

**클로저 = 함수 + 그 함수가 선언됐을 때의 렉시컬 환경**(Lexical environment)과의 조합이다.

- Execution Context = Variable Environment + **Lexical Environment**
  - **Lexical Environment** = Environment Records + Reference to the outer environment
    - Environment Records : Lexical Environment 내에 식별자 바인딩을 기록하는 객체
    - Reference to the outer environment : lexical scope(정적 스코프)를 기준으로 상위 scope의 Lexical Environment를 참조한다. 각 참조는 단방향 Linked List의 형태로 구현되어 있다.

또한 함수가 속한 **렉시컬 스코프**를 기억하여 함수가 렉시컬 스코프 밖에서 실행 될 때도 그 스코프에 접근할 수 있게 하는 기능을 말한다.
<br>

> [⚙️ 렉시컬 스코프](https://m.blog.naver.com/sion00705/222049714456) [⚙️ 스코프](https://poiemaweb.com/js-scope)
>
> 정리하면, **스코프**는 **참조 대상 식별자**(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)**를 찾아내기 위한 규칙**이다. 자바스크립트는 이 규칙대로 식별자를 찾는다.
>
> **렉시컬 스코프**란 함수를 어디서 호출하는 지가 아닌 **어디서(어떤 스코프에서) 선언**했느냐에 따라 변수의 실제 값이 결정된다는 내용이다.

<br>

#### 🔗 Closure 클로저

JS는 Lexical Environment(= 어휘적 환경 = 정적 환경)을 갖는다.

- 예시

```
let one;
one = 1;

function addOne(num) {
  console.log(one + num);
}

addOne(5);
```
