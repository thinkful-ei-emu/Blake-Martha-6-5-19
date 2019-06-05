'use strict';

function keyDeleter(obj){
  delete obj.foo; 
  delete obj.bar;
  return obj;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

let newObj = keyDeleter(sampleObj);
console.log(newObj);

