const obj = { name: 'ea', company: 'ea. Inc.'};

//객체에 값 추가 방법1
obj['email'] = "ea@gmail.com";

//객체에 값 추가 방법2
obj.phone = "01012345678";

//객체에 값 삭제 
delete obj.phone;

//객체내 key 확인
console.log('email' in obj); //true

//객체내 key들을 알 수 있다. -> 배열의 형태로 key 들을 확인 가능하다. 
console.log(Object.keys(obj));

//객체내 value들을 알 수 있다. -> 배열의 형태로 value 들을 확인 가능하다. 
console.log(Object.values(obj));

//객체 순회
const obj1 = { name: 'ea', company: 'ea. Inc.'};
for (const x in obj1) {
  console.log("키", x);
	console.log(x, obj1[x]);
}