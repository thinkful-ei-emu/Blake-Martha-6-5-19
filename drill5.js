/* eslint-disable no-console */
'use strict';

const plebArray = [{name: 'Blake', jobTitle: 'Astronaught', Boss: 'Frederick'}, {name: 'Martha', jobTitle: 'Dog WALKER', Boss: 'Frederick'},
  {name: 'Frederick', jobTitle: 'Keiser of Prussia'}];

for (let i = 0; i < plebArray.length; i++){
  if ('Boss' in plebArray[i]){
    console.log(`${plebArray[i].jobTitle} ${plebArray[i].name} reports to ${plebArray[i].Boss}.`);
  }else {
    console.log (`${plebArray[i].jobTitle} ${plebArray[i].name} doesn't report to anybody.`);
  }
}