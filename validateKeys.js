function validateKeys(object, expectedKeys){
  let workingArray = Object.keys(object);
  let falseCounter = 0;
  for (i = 0; i < expectedKeys.length; i++){
    if (!workingArray.includes(expectedKeys[i])){
      falseCounter++;
    }
  }
  if (falseCounter > 0){
    return false;
  }
  else{
    return true;
  }
}

const theseExpectedKeys = ['id', 'name', 'age', 'city'];

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
}

console.log(validateKeys(objectA, theseExpectedKeys));