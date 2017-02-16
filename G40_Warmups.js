// Write a function named map that takes two arguments. arr (array) callback (function)
//
// Return a new array where each element of arr is transformed by the callback function and the result is pushed into the new array.
//
// For example:
//
// const decimalNumber = [0.01, 2, 9.89, Math.PI];
//
// const rounded = map(decimalNumber, function(num) {
//   return Math.round(num);
// });
//
// console.log(rounded); // [0, 2, 10, 3]

function map(arr, fn){
  var newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]))
  }

  return newArr;
}

//  Rewrite .filter() that takes two arguments. arr (array) callback (function)
//
// For example:
//
// function returnEven(e) => {
//   return e % 2 === 0;
// }
// filter([1, 2, 3, 4], returnEven) --> will return [2, 4]

const filter = (arr, fn) => {
  var newArr = [],
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
