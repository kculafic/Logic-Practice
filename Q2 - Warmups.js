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

// ************************* #3 **************************
// array some
//
// create a function named `some` that takes an array and a function.
// it should return true if any of the array elements returns true when
// passed as an argument to the function. It should return false, if and only if
// all the elements return false when passed as arguments to the function.
//
// To test:
// npm test 04-array-some/test.js

const some = function(array, fn){
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true ) {
      newArr.push('true')
    } else if (fn(array[i]) === false ) {
      newArr.push('false')
    }
  }

  if (newArr.includes('true') === true) {
    return true
  } else if (newArr.indexOf('true') === -1){
    return false
  }
