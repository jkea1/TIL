var idiots = {
  name: 'idiots',
  genre: 'punk rock',
  members: {
    roto: {
      memberName: 'roto',
      play: function() {
        console.log(`band ${this.name} ${this.memberName} play start`)
      }
    }
  }
}

idiots.members.roto.play();
//band undefined roto play start
//this가 가리키는 것은 roto 객체이다. 

var thisTest = {
  whoAmI1: function () {
    console.log(this)
  },
  testInTest: {
    whoAmI2: function() {
      console.log(this)
    }
  }
}

//thisTest.whoAmI1();
//{testInTest: {…}, whoAmI1: ƒ}
//이 this는 thisTest 객체 전체를 가리킨다. 

thisTest.testInTest.whoAmI2();
//{whoAmI2: ƒ}
//이 this는 testInTest 객체를 가리킨다. 

//${this.name} 부분에 idiots를 넣고 싶다면 idiots.name 하면 된다. 
