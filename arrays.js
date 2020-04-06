var chocolateBars= ["snickers", "hundred grand", "kitkat","skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToBeginningOfArray(array,element){
  let newArray= [element,...array];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

function addElementToEndOfArray(array,element){
  let newArray= [...,array,"element"];
  return newArray
}
