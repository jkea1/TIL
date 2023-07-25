function Cat(name, age) {
  this.name = name;
  this.age = age;

  this.printCatInfo = () => {
    console.log(`${this.name}은 ${this.age}살 고양이입니다.`);
  }
}


//const tabby1 = Cat('nana',7);
const tabby1 = new Cat('nana',7); //함수가 이렇게 실행이 되면 이 상태에서 this는 window를 가리킨다. 

console.log(tabby1);
//Uncaught TypeError: Cannot read properties of undefined (reading 'name')
//오류가 발생한다. 

//자바스크립트는 this가 일정하지 않고 함수가 실행되는 시점에 결정되는 경우가 대부분이다.
//Cat이라는 함수를 실행하면 this는 window를 가리키게 된다. 
//함수의 실행 결과를 return 하는 코드가 없다. 즉, Cat 함수가 return 하는 값이 없기 때문에 tabby1은 undefined가 되고, undefined의 name에 접근하려고 하기 때문에 문제가 생긴다. 
//window.name 이나 window.this를 찍어보면 nana 와 7이 들어가 있다. 
//이렇게 this를 알지 못하면 의도치 않게 전역 윈도우 객체를 수정하는 일이 일어난다. 

//💡 의도한대로 실행하려면 new 키워드를 붙여주면 된다. 
// new를 붙여주면 this는 새로 생긴 객체를 가리킨다. 
// 이렇게 사용하면 다른 언어와 비슷한 객체 지향적인 문법을 흉내낼 수 있다.

const tabby2 = new Cat('chai', 3);

tabby1.printCatInfo();
tabby2.printCatInfo();