'use strict';

function createMyObject(){
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'Olly Olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    }
  };
}

const myNewObject = createMyObject();
console.log(myNewObject);
console.log(myNewObject.sayHello());