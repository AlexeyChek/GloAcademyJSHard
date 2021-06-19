'use strict';

class First {
  hello(){
    console.log('привет, я метод родителя!');
  }
}

class Second extends First {
  hello(){
    super.hello();
    console.log('А я наследуемый метод!');
  }
}

const test = new Second();
test.hello();