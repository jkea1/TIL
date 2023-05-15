//언더바로 끊어서 써도 똑같이 숫자로 나온다. 
//언더바는 인식이 되지 않는다. 
let billion1 = 1_000_000_000;

//지수
let billion2 = 10e9;

console.log(billion1)

//8가지 자료형들은 각자 가지고 있는 능력들이 있다. 
// => method

//숫자형에서 사용할 수 있는 메서드들중 하나가 parseInt() 와 parseFloat()이다. 
let width = '20e0.1235px';

//정수로 해석해서 정수의 값만 내보내준다. 
//정수 중간에 문자가 있다면 문자가 오기 전까지의 값만 정수로 계산한다. 
parseInt();
//문자는 제거하고 원하는 숫자의 소숫점까지도 같이 표현을 해준다. 
parseFloat();

console.log(parseInt(width));
//출력 결과 200
console.log(parseFloat(width));
//출력 결과 200.1235

//랜덤의 수를 반환해 준다. 
console.log( "난수", Math.random());
//0~100 까지의 랜덤한 값을 출력하고 싶다면
console.log(Math.random() * 100);