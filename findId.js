'use strict';

function findById(items, idNum){
  let arr = [];
  for (let i= 0; i < items.length; i++){
    if (items[i].id === idNum){
      //console.log(items[i].id);
      arr.push(items[i]);
      //console.log(arr.push(items));
    }
  }
  return arr;
}

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

const newTest = findById(data, 2);
console.log(newTest);