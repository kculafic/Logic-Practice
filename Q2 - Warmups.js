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
