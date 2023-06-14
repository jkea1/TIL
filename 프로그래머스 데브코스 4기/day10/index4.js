// function RockBand(members) {
//   this.members = members;
//   this.perform = function() {
//     setTimeout(function() {
//       this.members.forEach(function(member){
//         member.perform();
//       })
//     }, 1000)
//   }
// }  

// var theOralCigarettes = new RockBand([
//   {
//     name: 'takuya',
//     perform: function() {
//       console.log('Sing: a e u i a e u i')
//     }
//   }
// ]);

// theOralCigarettes.perform();

//다음 코드에서 오류가 일어나는 원인은?
//5번째 줄의 this기 Rockband의 this를 가리키지 않는다. 
//setTimeout 내에 정의된 function의 {...}를 가리킨다. 
//고로 이 this안에는 members가 없다. 


//💡 해결법1. arrow function 
// arrow function을 사용하면 arrow function 자체로 function scope를 만들지 않고 상위에 있는 functiond의 scope를 찾아가제 되어있다. 
// this가 RockBand의 this를 가리키게 됨.
function RockBand(members) {
  this.members = members;
  this.perform = function() {
    setTimeout(() => {
      this.members.forEach(function(member){
        member.perform();
      })
    }, 1000)
  }
}  

var theOralCigarettes = new RockBand([
  {
    name: 'takuya',
    perform: function() {
      console.log('Sing: a e u i a e u i')
    }
  }
]);

theOralCigarettes.perform();

//해결법2. bind 사용
//함수내의 this를 특정한 this로 지정가능하다. 
//bind(this)가 RockBand의 this를 가리키게 된다. -> 그래서 5번째 줄의 this도 RockBand의 this를 가리키게 된다. 
function RockBand(members) {
  this.members = members;
  this.perform = function() {
    setTimeout(function() {
      this.members.forEach(function(member){
        member.perform();
      })
    }.bind(this), 1000)
  }
}  

var theOralCigarettes = new RockBand([
  {
    name: 'takuya',
    perform: function() {
      console.log('Sing: a e u i a e u i')
    }
  }
]);

theOralCigarettes.perform();

//해결법3. 클로저 사용
//밖에 있는 this도 접근이 가능하게 한다. 
function RockBand(members) {
  var that = this; //RockBand의 this를 that에 넣어 주었다. 
  this.members = members;
  this.perform = function() {
    setTimeout(function() {
      that.members.forEach(function(member){
        member.perform();
      })
    }, 1000)
  }
}  

var theOralCigarettes = new RockBand([
  {
    name: 'takuya',
    perform: function() {
      console.log('Sing: a e u i a e u i')
    }
  }
]);

theOralCigarettes.perform();




