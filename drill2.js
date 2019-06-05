'use strict';

const obj ={
  foo: 1,
  bar: 2,
  fum: 3,
  quuz: 4,
  spam: 5,
};

for (let item in obj){
  let keys = obj[item];
  console.log(item , keys);
};