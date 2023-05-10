let name = prompt('당신의 이름은?');
let age = prompt('당신의 나이는?');

//es6 문법
//console.log(`안녕 나는 ${name} 다. 내 나이는 ${age} 이다.` )

//method 1
alert("width".includes("id"));
//true
alert("width".startsWith("wi"));
//true
alert("width".endsWith("th"));
//true

//slice(start, end) -> 가장 많이 사용한다. 
//start부터 end까지 (end는 미포함)
"stringify".slice(0,3);
//출력 결과 str

//끝에서 부터 카운팅 할 수 있다. 
"stringify".slice(0,-1);
//출력 결과 stringif

//substring(start, end)
//start부터 end까지 (end는 미포함)
//slice와 유사하지만 start가 end 보다 커도 괜찮다. 
//음수는 쓸수 없다. 
"012345678".substring(0,3);
//'012'
"012345678".substring(8,2);
//'234567'

//substr(start,length) -> 요즘에 잘 안쓴다. 
//start 부터 length개의 글자 
//음수 허용
"01234567".substr(5,3);
//'567'