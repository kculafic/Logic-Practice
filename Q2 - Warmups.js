// ****************************** #1 ***********************************
// array filter
// Create a function named filter that takes an array and a function.
// return a new array that constains every item form the original array
// that returned true when passed in to the functions.
//
// To test:
// npm test 01-array-filter/test.js

const filter = function(array, fn) {
  const newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      newArr.push(array[i])
    }
  }
  return newArr
}

module.exports = filter;


//  **************************** #2 **************************
// array every
// create a function named `every` that takes an array and a function
// it should return true if and only if the passed function returns true
// for ALL of the elements in the array
//
// To test:
// npm test 03-array-every/test.js

const every = function(array, fn){
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true ) {
      newArr.push('true')
    } else if (fn(array[i]) === false ) {
      newArr.push('false')
    }
  }

  if (newArr.includes('false') === true) {
    return false
  } else if (newArr.indexOf('false') === -1){
    return true
  }
}
