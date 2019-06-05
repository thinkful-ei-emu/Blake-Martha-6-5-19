'use strict';

function decodeWords(word){
  const decoder={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  
  if (word[0] in decoder){
    console.log(word[decoder[word[0]]]);
  }
}

const test = decodeWords('apple');
//console.log(test);