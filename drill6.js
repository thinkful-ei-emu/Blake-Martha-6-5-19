/* eslint-disable no-console */
'use strict';

function decodeWords(word){
  const decoder={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  if (word.charAt(0) in decoder){
    //console.log(word[decoder[word[0]]]);
    return word.charAt(decoder[word.charAt(0)] - 1 );
  }
  else {
    return ' ';
  }
}

console.log(decodeWords('banana'));
console.log(decodeWords('tree'));
console.log(decodeWords('bread'));
console.log(decodeWords('dearly'));
console.log(decodeWords('appocolypse'));