'use strict';

function enrollInSummerSchool(students){
  for (let i = 0 ; i < students.length; i++){
    students[i].status = 'inSummerSchool';
    console.log(`${students[i].name} status : ${students[i].status}`);
  }
  return students;
}

let newArray = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

const banana = enrollInSummerSchool(newArray);
console.log(banana);