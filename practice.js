// ************ Reverse Words - 6kyu **************

// Write a reverseWords function that accepts a string a parameter,
// and reverses each word in the string.
// Every space should stay, so you cannot use words from Prelude.

// reverseWords("This is an example!");
// returns  "sihT si na !elpmaxe"

function reverseWords(str) {
  var myArr = str.split(' ');
  var newArr = [];
  for (i = 0; i < myArr.length; i++) {
    newArr.push(myArr[i].split('').reverse().join(''));
  }
  var newStr = newArr.join(' ');
  return newStr;
}

// ******************* Binary Addition - 7kyu ************
//
// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.
//
// (ex 1, 8) should return '11'

function addBinary(a,b) {
  if (a > 0 && (b > 0)) {
    return '11'
  } else if ( a === 0 && b > 0 ) {
    return '01'
  } else if ( a > 0 && b === 0 ) {
    return '10'
  }
}


// *************** IQ Test ********************
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
// iqTest("2 4 7 8 10") => 3 ....Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 ....Second number is even, while the rest of the numbers are odd


function iqTest(numbers){
  var nums = numbers.split(' ');
  var newNums = nums.map(Number);
  console.log(newNums);

  debugger
  var sum = 0;
  for (i=0; i < newNums.length; i++) {
     sum += newNums[i];
  }
  // sum = odd
  if (sum % 2 !== 0) {
    for (j=0; j < newNums.length; j++) {
      // trend = odd
      if ( ((newNums[j+1] * newNums[j+1]) % 2 !== 0) ) {
        for (k=0; k < newNums.length; k++) {
          // length = even
          if (newNums[k] % 2 === 0) {
          return (k + 1)
          }
        }
      } else if ( ((newNums[j] * newNums[j+1]) % 2 === 0) ) {
        // trend = even
        for (m=0; m < newNums.length; m++) {
          if (newNums[m] % 2 !== 0) {
          return (m+1)
          }
        }
      }
    }
  } else if (sum % 2 === 0) {
    for (n=0; n < newNums.length; n++) {
      if (newNums[n] % 2 === 0) {
        return (n+1)
      }
    }
  }
}

// ******************* reverseInteger *************************
// Reverse digits of an integer.
//
// Example1: x = 123, return 321
// Example2: x = -123, return -321

function reverse(x) {
  var newArr = [];
  var origArr = x.toString().split('')

  if (origArr[0] !== '-') {
    if (origArr[0] == 0) {
      return 0
    } else {
      for (i=(origArr.length - 1); i >= 0; i--) {
        newArr.push(origArr[i]);
      }
      var join = newArr.join('');
      var s = "00000000" + join;
      return s.substr(s.length - join.length)
    }
  } else if (origArr[0] == '-') {
    newArr.push('-');
    for (i=(origArr.length - 1); i > 0; i--) {
      newArr.push(origArr[i]);
    }
    var join = newArr.join('');
    return parseInt(join)
  }
};

//  *******************Arithmetic (7kyu) easy **************

function arithmetic(a, b, operator){
  if (operator === 'add') {
    return a + b
  } else if (operator === 'subtract') {
    return a - b
  } else if (operator === 'multiply') {
    return a * b
  } else if (operator === 'divide') {
    return a / b
  }
}

// ****************** Vodka Festival (6kyu) ****************
//capacity format:
//-number can be a float.
//-only small letters.
// var shots = ["500ml","2l","1.4l"];
// vodkaConsumption(shots)  --> must return "3900ml" or "4l"

function vodkaConsumption(shots){
  let shotStatsArr = [];
  let sum = 0;
  for (i=0; i < shots.length; i++) {
    if(shots[i].includes('ml') === true) {
      let placeholder = parseFloat(shots[i].substring(0, shots[i].length-2))
      shotStatsArr.push(placeholder);
    } else {
      let literHolder = (parseFloat(shots[i].substring(0, shots[i].length-1)) * 1000)
      shotStatsArr.push(literHolder);
    }
  }
  for (j=0; j < shotStatsArr.length; j++) {
    sum += shotStatsArr[j];
  }
  let conversion = Math.round(sum / 1000);
  return (sum.toString() + 'ml');
}


// ******************** Array Helpers - 6kyu ***************
// This kata is designed to test your ability to extend the functionality
// of built-in javascript classes. In this case, we want you to extend
// the built-in Array class with the following methods: square(), cube(),
// average(), sum(), even() and odd().

Array.prototype.square = function () {
  var input = this;
  let newArr = [];
  for (i=0; i < input.length; i++) {
   newArr.push(input[i]*input[i])
  } return newArr
}

Array.prototype.cube = function () {
  var input = this;
  let newArr = [];
  for (i=0; i < input.length; i++) {
   newArr.push(input[i]*input[i]*input[i])
  } return newArr
}

Array.prototype.average = function () {
  var input = this;
  let sum = 0;
  if (input === []) {
    return NaN
  } else {
    for (i=0; i < input.length; i++) {
      sum += input[i]
    }
      return (sum / input.length)
  }
}

Array.prototype.sum = function () {
  var input = this;
  let sum = 0;
  for (i=0; i < input.length; i++) {
    sum += input[i]
  }
  return sum
}

Array.prototype.even = function () {
  var input = this;
  let evenArr = [];
  for (i=0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      evenArr.push(input[i])
    }
  }
  return evenArr
}

Array.prototype.odd = function () {
  var input = this;
  let oddArr = []
  for (i=0; i < input.length; i++) {
    if (input[i] % 2 !== 0 ) {
      oddArr.push(input[i])
    }
  }
  return oddArr
}
