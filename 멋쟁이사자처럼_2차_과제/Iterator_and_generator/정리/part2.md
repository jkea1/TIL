The iteraation(반복) protocols
1. The iterable protocol
2. The iterator protocol
3. Iterable 예시
4. Iterator 예시

  1. The iterable protocol
  -> iterable protocol 은 JavaScript 객체들이, 예를 들어 for..of 구조에서 어떠한 value 들이 loop 되는 것과 같은 iteration(반복)동작을 정의하거나 사용자 정의하는 것을 허용합니다.
    1-1. 조건
      * [Symbol.iterator] 라는 property를 가져야 한다. 
      * 이는 전달인자가 없는 함수로 객체를 반환해야 한다. 
      * 이때 반환되는 값은 iterator protocol을 따른다. 

  2. The iterator protocol
  -> iterator protocol 은 value( finite 또는 infinite) 들의 sequence(연속된 값)를 만드는 표준 방법을 정의합니다.
    2-1. 조건
      * 반환된 값을 가지는데 그 값이 객체여야 한다.  
      * 객체는 내부에 next() 메소드를 가져야 합니다. 
        * next() 는 전달 인자가 없다. 
      * next()는 2개의 값(객체)을 반환해야 한다. 
        1. done(boolean)
          -> Iterator(반복자)가 마지막 반복 작업을 마쳤을 경우 true. 
          -> Iterator(반복자)의 작업이 남아있을 경우 false.
        2. value
          -> Iterator(반복자)으로부터 반환되는 모든 자바스크립트 값이 value로 사용될 수 있다. 
          -> done이 true일 경우(= 반복이 끝났을 경우) 생략될 수 있다.
    
    * 몇몇 iterator들은 iterable(반복 가능)하다. 
    
    ex1)
    var someArray = [1, 5, 7];
    var someArrayEntries = someArray.entries(); //iterator한 객체를 반환하여 someArrayEntries에 할당한다. array iterator를 따르는 객체가 생성된다. 
    someArrayEntries.toString(); // "[object ArrayIterator]"
    someArrayEntries === someArrayEntries[Symbol.iterator](); // true

    ex2) String 은 built-in iterable 객체의 한 예시입니다.
    var someString = "hi";
    typeof someString[Symboliterator]; // "function" 

    var iterator = someString[Symbol.iterator]();

      * 정리
        -> someString이라는 문자열 객체는 iterable protocol 이다. 
        -> iterable protocol는 [Symbol.iterator] 메서드를 가지고 있기 때문에 이 메서드를 실행하게 되면 반환되는게 iterator protocol이다. 
        -> iterator protocol은 내부에 next() 객체를 가진다. 
        -> next() 메서드를 실행하게 되면 done과 value 라는 객체를 반환한다. 
        -> next() 메서드는 반복이 끝날때 까지 값을 출력해 주는 sequence가 설정이 되어 있고, 마지막으로 반복이 마무리 되면 { value: undefined, done: true } 된다. 
    
    iterator + ""; // "[object String Iterator]"

    iterator.next(); // { value: "h", done: false }
    iterator.next(); // { value: "i", done: false }
    iterator.next(); // { value: undefined, done: true }

    ⭐️⭐️ spread operator와 같은 특정 내장 구조(built-in constructs)들은 실제로는 동일한 iterator protocol을 사용한다.
    -> string을 분해해서 배열 데이터로 만들어 준다. 
    [...someString] // ["h", "i"]

    사용자만의 @@iterator를 특정함으로써 (사용자가 직접 eterator라는 메서드를 설정할 수 있다.) 원하는 반복 행위(iteration behavior)을 설정할 수 있다.


  3. Iterable 예시
    -> String, Array, TypedArray, Map and Set 는 모두 내장 iterable이다. 이 객체들의 프로토타입 객체들은 모두 @@iterator 메소드(Symbol.iterator 함수)를 가지고 있기 때문이다.

    -> 사용자가 직접 고유한 iterables를 만들 수 있다. 
      * 객체를 생성한 다음에 [Symbol.iterator]라는 함수를 정의해 주면 된다. 
      ex)
      var myIterable = {};
      myIterable[Symbol.iterator] = function* () {
          yield 1;
          yield 2;
          yield 3;
      };
      [...myIterable]; // [1, 2, 3]





