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
join('Good') // b는 빈 문자 데이터가 사용된다. 

// 타입 단언
// 주저하지 아니하고 딱 잘라 말함.
// as, ! (Non-null 단언 연산자)

// 1)
const btn = document.querySelector('button') as HTMLButtonElement // 선언하는 부분에서 단언할 수도 있다. 
(btn as HTMLButtonElement).classList.add('btn') // 단언(개발자가 ts에게)하면 에러가 안난다. 
btn.id = 'abc'


//!
const btn = document.querySelector('button')!

// 2) 타입 단언

// 타입가드 추가
function isNum(val: unknown): val is number {
  return typeof val === 'number'
}

function toTwoDecimals(val: number | string, isNum: boolean) {
  if(isNum) {
    (val as number).toFixed(2) // 소수점 자리 자르기 
  } else {
    (val as string).slice(0, 2)
  }
}

const json = '{"name": "Heropy", "age": 85}'
const user = JSON.parse(json) as {name: string, age: number}
console.log(user.email);

// 4)
let num: number = 123;
// ! = 변수 초기화 키워드
// let num!: number
console.log(num);

// 타입 가드(Guard)
// 타입 추론이 가능한 특정 범위(scope) 안에서 타입을 보장
// typeof, instanceof, in

const btn = document.querySelector('button')
if(btn) { // btn instanceof HTMLButtonElement
  btn.classList.add('btn')
  btn.id = 'abc'
}

//
fetch('https//exam.site')
  .then(res => res.json)
  .then((user: UserA | UserB) => { // then을 통해 받아온 데이터를 user라는 데이터에 담았다. 
    console.log(user.name[0]);
    console.log(user.age - 10);
  })


// 타입 별칭(Alias)
// 새로운 타입 조합 생성
// 대문자 조합으로 이름 지어야 한다. 

type MyTypeName = string | number
type MyArray = MyTypeName[]
type UserB = {
  isValid: boolean
}
type UserX = UserA & UserB

// 인터페이스(interface)
// 개체(객체, 배열, 함수, 클래스)를 정의하는 타입
// ? , readonly
// 객체 타입을 정의할때는 interface를 사용하는 것이 좋다. 

// 타입을 지정할때는 쉼표나 세미콜론 없어도 된다. 

type UserT = { 
  name: string
  readonly age: number // 읽기만 가능하고 쓰기는 안된다. 
  isValid?: boolean // 이 속성은 필수는 아니다. 
}

interface UserI { // 할당 연산자(=)가 없다. 
  name: string
  age: number
  isValid?: boolean // 필수는 아니다. 
}

const user: UserI = { 
  name: 'Heropy'
  age: 85
}

// 인터페이스에서 함수 타입 호출하기
// 호출 시그니쳐 Call signature

interface User {
  name: string
  age?: number
}

type GetUserNameT = (u: User) => string
interface GetUserNameI {
  (u: User): string
}
const user: User = {
  name: 'Heropy'
}

const getUserName: GetUserNameI = (user: User) => user.name
const username = getUserName(user)
console.log(username);

// 인터페이스
// 클래스 - 생성(구문) 시그니쳐(construct signature)

interface UserI {
  name: string
  getName():  // 객체내의 메서드 이다. 
}
class User implements UserI { // 클래스에 type을 지정할때는 implements 키워드를 사용한다.
  public name // 공개 되어져 있는 속성이다. 
  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

const user = new User('Heropy')
user.getName() //'Heropy'

function hello(userClass: UserI, msg: string) {
  const user = new userClass('Heropy')
  return `hello ${user.getName()}, ${msg}`
}
hello(User, 'good morning!')

//인터페이스
// 인덱싱 가능 - 인덱스 시그니쳐(index signiture)
// 타입 인덱싱

interface User {
  name: string
  age: number
}
const a: User['name'] = 'Neo'
const b: User['age'] = 123

// 인터페이스 확장

interface UserA {
  name: string
  age: number
}

interface UserB extends UserA { // 확장 가능하다. 
  isValid: boolean
}

const user: UserB = {
  name: 'ea'
  age: 85,
  isValid: true
}

// 함수의 명시적 this 타입

function greet(this: User, msg: string) {
  return `Hello ${this.name}, ${msg}`
}

const heropy = {
  name: 'ea'
  greet
}
heropy.greet('good morning~')

const neo = {
  name: 'Neo'
}

greet.call(neo, 'Have a great day')

// 함수 오버로딩

// 함수 오버로딩을 메서드로 사용할 수 있다. 

// 클래스의 접근 제어자

// 접근 제어자
// public 생략가능
// protected
// private

// 추상 클래스(단일 관계) vs 인터페이스(다중 관계)
// 추상 abstract 클래스 -> 타입선언과 구현부를 같이 표현할 수 있다. 
// 상황에 맞게 사용하자

//데코레이터
// 클래스에서 사용하는 특별한 종류의 선언
// 클래스에 추가기능을 붙이거나 클래스의 기능을 변경할 수 도 있다. 
// 사용
// 1. 클래스 자체에 쓸 수 있다. 

// 제네릭(generic)
function toObj(a: string | number | boolean, b: string | number | boolean): { a: string | number | boolean, b: string | number | boolean } {
  return {a, b}
} 
// 위 처럼하면 너무 길다. 
// 제네릭을 사용하면 간단하게 가능하다. 
function toObj<T>(a: T, b: T): { a: T, b: T} {
  return {a, b}
} 

toObj<string>('A', 'B') //string이 -> T로 들어간다. 
toObj<number>(1, 2)
toObj<boolean>(true, false)
toObj('A', 12) // 앞에 a부분에서 string이면 뒷부분 타입도 모두 string으로 지정된다. 

// 제약조건 추가도 가능하다. 
// string, number, boolean 셋중 하나여야 한다는 제약이 걸렸다. 
function toObject<T extends string | number | boolean>(a: T, b: T): { a: T, b: T} {
  return {a, b}
} 

toObject(null, null) // 타입이 셋중 하나가 아닌 null 이므로 에러가 뜬다. 

// 인터페이스 안에서도 제네릭 문법을 쓰는게 가능하다. 
interface ToObj<T> { // 재사용이 가능하다. 
  a: T
  b: T
}

function toObj<T extends string | number | boolean>(a: T, b: T): ToObj<T> { // 타임을 매개변수로 넣어주는 것이 가능하다. 
  return {a, b}
}

toObj('A', 'B')
toObj(1, 2)
toObj(true, false)
toObj(null, null)

//제네릭 예제
interface User<T, U, V> {
  name: T, 
  age: U,
  isValid: V
}

const heropy: User<string, number, boolean> = {name: 'heropy', age: 85, isValid: true}
const neo: User<string, number, boolean> = {name: 'neo', age: 22, isValid: false}
const amy: User<string, number, boolean> = {name: 'amy', age: 65, isValid: true}

type Users<T, U, V> = {name: T, age: U, isValid: V} | [T, U, V]
type U = User<string, number, boolean>

const evan: U = {'Evan', 34, false}
const lewis: U = {'Lewis', 14, true}
const leon: U = {'JS', 66, false}

// 클래스에서 제네릭을 사용하는 예제
class Basket<T> {
  public items: T[]
  constructor(...rest: T[]) {
    this.items = rest
  }
  putItem(item: T) {
    this.items.unshift(item)
  }
  takeOutItems(count: number) {
    return this.items.splice(0, count)
  }
}

const fruitBasket = new Basket('Apple', 'Banana', 'Cherry')
fruitBasket.putItem('Orange')
const fruits = fruitsBasket.takeOutItems(2)
console.log(fruits); // ['Orange', 'Apple']
console.log(fruitsBasket.items); // ['Banana', 'Cherry']

// 제너릭
// 조건부 타입(conditional types)

type MyType<T> = T extends string | number ? boolean : never

const a: MyType<string> = true
const b: MyType<number> = true
const c: MyType<null> = true

//유틸리티 타입으로 만들 수 있다. 

// type MyExclude<T, U> = T extends U ? never : T
type MyUnion = string | number | boolean | null
const a: Exclude<MyUnion, boolean | null> = false

