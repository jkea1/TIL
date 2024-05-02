## for ~ of 사용시, 주의할 점!
  * 유사 배열 객체 
  let like_array_obj = { length: 3, 0: '조깅화', 1: '축구화', 2: '농구화' };

  -> 유사 배열 객체는 반복 가능한 객체(iterator)가 아니다. 
  -> for ~ of 문을 사용 할 수 없다. 
  for(let v of like_array_obj) {
    //Uncaught TypeError: like_array_obj is not iterable
  }

  -> like_array_obj는 Iterable한 객체가 아니기 때문에 내부에 [Symbol.iterator] 메서드가 없기 때문에 for ~ of 문을 사용할 수 없다. 
  -> 유사 배열 객체를 반복 가능한 객체(Iterator)로 변경해야 for ~ of 문 사용 가능하다. 
  -> Array.from() 메서드를 사용하면 유사 배열 객체를 배열 객체로 변경하능하다. 
  -> entries()를 통해 array iterator 객체를 반환 받게 된다. 
    for(let v of Array.from(like_array_obj).entries()) {

    }

## for ~ of문을 var,let,const와 사용할 때 주의할 점!
  1. const, let 을 for ~ of 에서 사용 할 경우
    -> 변수가 지역내에서만 쓸 수 있는 변수 이기 때문에 밖에서 출력이 안된다.
  2. var를 사용할 경우 
    -> for 문 자체가 block구문으로써 외부에서 출력이 가능하다. 

##iterator
  : ES6부터 새롭게 추가된 프로토콜인 반복 가능한 객체와 연속된 값을 만드는 표준 방법 정의(iterator)에 관한 개념 이해가 필요하다. 
    1. Iterable 프로토콜
      * 반복 가능한 객체 
        -> 반복 가능한 빌트인 객체는 Array, Array-Like, String, Typed Array, Set, Map, WeakSet, WeakMap 등이 있다. 
        -> 이와 같은 객체는 for ~ of문을 통해 값들을 반복하여 처리하는 동작을 정의하거나 사용자 정의하는 것을 허용한다. 
      * 반복 가능한 객체의 조건
        -> 반복 가능한 조건은 객체에 @@iterator 메소드가 구현되어 있어야 한다. 
          -> 즉, 객체가 [Symbol.iterator] 속성(메서드)을 가져야 하며 인자 없이 호출되고 Iterator 객체(= ㄴnext()를 가지고 있는 객체)를 반환해야 한다.
    
    2. Iterator 프로토콜  
      * Iterator 객체
        -> 객체가 next 메서드를 통해 {value, done}을 반환한다. 
        -> value는 js의 모든 유형이 가능하며 done은 Boolean 값을 반환합니다.

    3. 빌트인 Iterator 객체 
      * 반복 가능한(Iterable) 빌트인 객체 에는 Array가 있다. 
        ex) 
          const array = [99, 9, 0]; 

          //Iterator 객체 참조 
          const iterator = array[Symbol.iterator]();
          
          //Iterator 객체의 next 메서드 사용
          iterator.next(); //{value: 99, done: false}
          iterator.next(); //{value: 9, done: false}
          iterator.next(); //{value: 0, done: false}
          iterator.next(); //{value: undefined, done: true}
    
    4. 사용자 정의 Iterator 객체 

    5. Generator & yield
      : generator 객체는 제너레이터 함수로 부터 반환된 값이며 반복자와 반복자 프로토콜을 준수합니다.(= 반환된 값이 next()를 가지고 있다.)
      -> generator 함수를 정의할때는 *을 붙인다. 

      ex)
        //제너레이터 함수
        function* idMaker() {
          let index = 0;
          while(true) {
            yeild index++; //제너레이터 함수는 yeild 값을 통해서 sequence 값을 내보내게 된다. 
          }
        }
        
        // 제너레이터 객체 참조
        var gen = idMaker(); // "Generator { }"

        // 제너레이터 객체의 next() 메서드 사용
        console.log(gen.next().value); //0
        console.log(gen.next().value); //1
        console.log(gen.next().value); //2

    6. 사용자 정의 Iterator + generator
      이 부분 강의 다시 들으면 좋을 거 같아. 

    7. 피보나치 수열 제너레이터 
      //피보나치 수열을 반환하는 제너레이터 함수 
      function 


