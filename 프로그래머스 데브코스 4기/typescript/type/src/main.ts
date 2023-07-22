// 문자, 숫자, 불린 타입

let str: string = 'Hello World!'
let num: number = 123
let boo: boolean = true

num = 1
str = '12'
boo = true

// 객체 타입
const obj: { a: number; b: number } = { a: 0, b: 0 } // 초기값 0을 넣어주자.
obj.a = 123 // js에서는 속성 a를 할당하는게 가능하지만 ts에서는 에러가 발생하게 된다.
obj.b = 456

// 배열 타입

// const arr: string[] = []
const arr: Array<string> = []
arr[0] = '123'
arr[1] = '456'
arr.push(123)

// 함수 타입

const hello: (a: string, b: number) => string = (msg, xyz) => msg
const hello: (a: string, b: number) => string = function (msg, xyz) {
  return msg
}

//Enum(이넘) 타입
// 이넘은 하나의 타입이자 데이터이다.
// 타입 + 값(데이터)의 집합으로 역방향 매핑(reverse mapping) 가능
// 값이 숫자 아니라면 숫자로 조회가 불가하다.
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Week[0]) // 'Sun'
console.log(Week.Wed) //'3'

// Void 타입
// 값을 반환하지 않는 함수의 반환 타입.
// return 키워드를 사용하지 않을 것(= void를 반환한다.)라는 것을 void keyword로 나타낸다.

const hello: (msg: string) => string = (msg) => {
  console.log(`Hello ${msg}`)
}
hello('World!')

// 튜플(tuple) 타입
// 고정된 길이(length)의 배열 타입
const tup: [number, number] = [4, 5]
tup[2] = 6 //[4, 5, 6] 배열의 길이가 달라지기 떄문에 에러가 뜬다.
tup[3] = 7 //[4, 5, 6, 7]
tub.push(6) //push()로 밀어넣을 수는 있다. splice()도 사용가능하다.

// [id, name, isValid]
const userA: [number, string, boolean] = [1, 'Heropy', true]

// Never 타입
// 어떤 것도 할당할 수 없는 타입
// 혹은 정상적으로 종료되지 않는 함수의 반환 타입

const nev: [] = []
nev.push(6)

const myError: (m: string) => never = (msg) => {
  throw `에러 - ${msg}`
}
try {
  myError('Never 타입..')
} catch (err) {
  console.log(err)
}

// any 타입
// 어떤 것도 할당 할 수 있는 타입

let anything: any = 'hello'
anything = 123
anything = { a: 'A' }
anything = [1, 2, 3]

const a: string = anything // anything 이 any type이라 어느곳에든 할당 가능하다. 하지만 엄격한 문법이 아니기 때문에 지양하는 것이 좋다.

// Unknown 타입
// 어떤 것도 할당할 수 있지만, 정확히 무엇인지 알 수 없는 타입
// 다른 타입에는 할당 할 수 없음. -> any 타입과의 차이이다.
// 실제 사용하는 경우에는 조건을 달아서 확인할 수 있는 경우에만 쓰도록 되어 있어 훨씬 엄격하다.

let anything: unknown = 'Hello'
anything = 123
anything = { a: 'A' }
anything = [1, 2, 3]

if (typeof anything === 'string') {
  const a: string = anything
}

const a: string = anything

// union(유니언) 타입
// 2개 이상의 타입이 허용되는 타입

let uni: string | number | number[]
uni = 'Hello'
uni = 123
uni = false
uni = null
uni = [1, 2, 3]

// 인터섹션 타입
// 2개 이상의 타입이 병합된 타입

type UserA = {
  // name 과 age 속성이 꼭 있어야 하고 그 외는 있으면 안된다.
  name: string
  age: number
}

type UserB = {
  isValid: boolean
}

const userC: UserA & UserB = {
  name: 'C' age: 40, isValid: false
}

// 타입 추론(inference)
// '추론', 어떠한 판단을 근거로 삼아 다른 판단을 이끌어냄
// 1. 초기화된 변수
// 2. 기본값이 지정된 매개변수 
// 3. 반환이 있는 함수 

let a: string = 'Hello'
a = 123
a = true

function join(a: string, b: string = ''): string {
  return a+b
}
join('Hello', 'World')
join('Good')