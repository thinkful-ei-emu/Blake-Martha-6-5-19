'use strict';

function makeStudentReport(data){
  let newArray =[];
  for (let i = 0; i < data.length; i++){
    newArray.push(`${data[i].name}: ${data[i].grade}`);
  }
  return newArray;
}