'use strict';

function updateObject(obj){
  if (typeof(obj) === 'object'){
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
  }
}

let newObj = {};
console.log(updateObject(newObj));