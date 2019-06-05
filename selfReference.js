'use strict';

function personMaker() {
  let person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){
      return `${this.firstname} ${this.lastName}`;
    },
  };
  return person;
}

let newPerson = personMaker();
console.log(newPerson.fullName);
