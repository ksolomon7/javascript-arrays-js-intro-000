var chocolateBars= ["snickers", "hundred grand", "kitkat","skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToBeginningOfArray(array,element){
  let newArray= [element,...array];
  return newArray;
}

function addElementToEndOfArray(array,element){
  return [...,array,element];  
};
