### ☘️ Execution Context (실행 컨텍스트)

JS 엔진이 코드를 실행하기 위해서는 코드가 실행되는 위치 대한 정보가 필요하다. 이에 대한 정보를 담고 있는 묶음을 **Execution Context(실행 컨텍스트)** 라고 하고, 코드에 선언된 변수와 함수, 스코프, this, arguments 등을 담고 있다.

JS 엔진은 **Execution Context(실행 컨텍스트)** 를 객체로 관리하며 코드를 Execution Context(실행 컨텍스트)내 에서 실행한다.

#### Execution Context (실행 컨텍스트) 종류

> 1.  Global Execution Context 전역 실행 컨텍스트
>     코드를 실행하며 단 한 개만 정의되는 전역 Context이다. global object를 생성하며 this 값에 global object를 참조한다. 전역 실행 컨텍스트는 Call Stack에 가장 먼저 추가되며 앱이 종료 될 때 삭제한다.
>
> 2.  Functional Execution Context 함수 실행 컨텍스트
>     함수가 실행 될 때 마다 정의되는 Context이다. 전역 실행 컨텍스트가 단 한 번만 정의되는 것과 달리, 함수 실행 컨텍스트는 매 실행시마다 정의되며 함수 실행이 종료(return)되면 Call Stack에서 제거됩니다.
>
> 3.  Eval Context
>     eval 함수로 실행한 코드의 Context입니다. 보안상 취약한 점이 있어 비권장 함수이기 때문에 중요도가 낮다.

<br/>

#### Execution Context의 관리: CallStack(호출 스택)

JS 엔진은 생성된 Execution Context를 관리하는 목적의 Call Stack(호출 스택)을 갖고 있다. JS는 단일 스레드 형식이기 때문에 <u>런타임</u>에 단 하나의 Call Stack이 존재한다.

JS 엔진은 전역 범위의 코드를 실행하며 Global Execution Context를 생성해 Call Stack에 push한다. 그리고 함수가 실행 또는 종료 될 때마다 Global Execution Context의 위로 Functional Execution Context stack을 push(추가), pop(제거)한다.

⚙️ **Stack Overflow**

- Call Stack은 최대 stack 사이즈가 정해져 있다. Call Stack에 쌓인 Context Stack이 최대치를 넘게 될 경우 <code>RangeError: Maximum call stack size exceeded</code > 라는 에러가 발생한다. 이 에러를 **Stack Overflow**라고 부른다.

<br/>

    🔗 Runtime 런타임

    코드가 실행되는 환경으로 여러 구성 요소를 포함한다.

    1.  실행 환경 (≠ 실행 컨텍스트)
        코드가 실행되는 특정 환경이다. 브라우저에서는 브라우저 엔진이 런타임 환경을 제공하고, Node.js에서는 Node.js 런타임이 이를 담당한다.
    2.  웹 API(Web APIs)
        브라우저 환경에서는 DOM(Document Object Model) 및 XMLHttpRequest와 같은 웹 API가 제공된다. 이러한 API는 비동기적인 작업을 처리하고 브라우저 이벤트를 관리하는 데 사용된다.
    3.  콜 스택(Call Stack)
        코드의 실행 순서를 추적하는 데 사용되는 데이터 구조이다. 함수 호출이 발생할 때마다 해당 함수의 호출 정보가 스택에 푸시되며, 함수가 종료되면 스택에서 팝된다.
    4.  이벤트 루프(Event Loop)
        비동기 작업을 관리하고 콜 스택에 있는 작업이 완료될 때까지 대기하는 메커니즘입니다. 이벤트 루프는 콜 스택이 비어있을 때 큐(Queue)에서 다음 작업을 가져와 실행합니다.

  <br />

#### Execution Context(실행 컨텍스트)의 구성

#### **📌 Execution Context = Lexical Environment + Variable Environment**

    ExecutionContext:{
        LexicalEnvironment:{
            Environment Records,
            Reference to the outer environment,
        },
        VariableEnvironment:{
            Environment Records,
            Reference to the outer environment,
        }
    }

Lexical Environment과 Variable Environment 모두 공통적으로 <code>Reference to the outer environment 외부 환경에 대한 참조</code>와 <code>Environment Records</code>를 받는다.

<br>

##### 1. 외부 환경 참조

> 외부 환경 참조는 lexical scope (정적 스코프)를 기준으로 상위 scope의 Lexical Environment를 참조한다. 각 참조는 단방향 Linked List의 형태로 구현되어 있다.

- <code>Global Execution Context</code> 의 경우

  - JS 엔진은 전역 범위의 코드를 실행하며 Global Execution Context를 생성해 Call Stack에 push하는데, 이때 가장 먼저 생성되는 Global Execution Context는 외부 환경 참조 값으로 null을 갖는다.

- <code>Functional Execution Context</code> 의 경우

  - Functional Execution Context는 상위 Scope에 해당하는 Lexical Environment를 외부 환경 참조 값으로 갖는다.

  - 다음으로 함수가 실행되면 Global Execution Context 위로 Functional Execution를 Context stack으로 push하는데, 이때 Functional Execution Context는 상위 Scope에 해당하는 Lexical Environment를 외부 환경 참조 값으로 갖는다. 이 연결 고리는 변수 탐색 시 사용된다.

    <img src="./img/Screenshot 2024-03-03 at 9.00.03 PM.png" />

##### 2. Environment Record

Environment Record는 **Lexical Environment 내에 식별자 바인딩을 기록하는 객체**이다. Environment Record를 상속하는 세개의 서브 클래스로 구성되어 있다.

    Environment Record: {
      Declarative Environment Record,
      Object Environment Record,
      Global Environment Record
    }

- Declarative Environment Record

  - 함수와 변수, this, super 등의 식별자 바인딩이 저장된다.
    <br/>

    > Variable Environment와 Lexical Environment는 각각 다른 방식으로 선언된 변수들을 관리한다.

    > ⚙️ Variable Environment (부모)는 <-- Lexical Environment (자식)를 상속하는 관계이다.
    >
    > 상속 : 자식은 생성자와 초기화 블럭을 제외한 부모의 모든 멤버를 상속받는다.
    >
    > Lexical Environment ⊃ Variable Environment

  1. Variable Environment

     - var로 선언된 변수가 메모리에 매핑되며 초기값으로 undefined가 할당된다. 변수 값 할당 코드가 실행되기 전 변수에 접근하게 되면 undefined 값을 얻게 된다. 할당 코드가 실행되고 난 뒤에는 해당 값으로 수정된다.

     - 선언형 함수가 메모리에 매핑되며 함수 전체가 메모리에 할당된다.

  <br>

  2. Lexical Environment
     - let, const로 선언된 변수가 메모리에 매핑되지만 초기값은 할당되지 않는다. 변수 값 할당 코드가 실행되기 전 변수에 접근하게 되면 Reference Error가 발생한다. 초기 값 할당 코드가 실행되고 난 뒤에 메모리에 값이 추가 된다.

#### 실행 컨텍스트 생성 과정과 Hoisting

[참고 할 만한 블로그 글](https://dkje.github.io/2020/08/30/ExecutionContext/#context%EC%9D%98-%EC%83%9D%EC%84%B1-%EA%B3%BC%EC%A0%95)

##### 참고 자료

[자바스크립트의 스코프와 클로저](https://meetup.nhncloud.com/posts/86)
[Execution Context(실행 컨텍스트)란?](https://dkje.github.io/2020/08/30/ExecutionContext/#context%EC%9D%98-%EC%83%9D%EC%84%B1-%EA%B3%BC%EC%A0%95)
