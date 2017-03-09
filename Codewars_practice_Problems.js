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
// Positive Sum

function positiveSum(arr) {
  var sum = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
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


// ***************** Vowel Count - 7kyu ***************
function getCount(str) {
  var vowelsCount = 0;
  var newArr = str.split('');
  for (i=0; i < newArr.length; i++) {
    if (newArr[i] === 'a') {
      (vowelsCount += 1)
    } else if (newArr[i] === 'e') {
      (vowelsCount += 1)
    } else if (newArr[i] === 'i') {
      (vowelsCount += 1)
    } else if (newArr[i] === 'o') {
      (vowelsCount += 1)
    } else if (newArr[i] === 'u') {
      (vowelsCount += 1)
    }
  }
  return vowelsCount;
}

// ********* Factorial (recursion) - 7 kyu ******
var f = [];
const factorial = n => {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};

// ************** Pre-Challenge Credit Card Question *******
// Return the credit card with the largest sum

function preChallenge(nums) {
  var newArr = [];
  var sumArr = [];
  let sum = 0 ;

  for (i=0; i < nums.length; i++) {
    newArr = nums[i].split('')
    parseInt(newArr);
    for (j=0; j < newArr.length; j++) {
      if (newArr[j] !== '-') {
        sum += parseInt(newArr[j])
      }
    } sumArr.push(sum);
  }
  var largest = 0;
  var index = 0;
  for (k=0; k <= sumArr.length; k++) {
    if (sumArr[k] > largest) {
     largest = sumArr[k];
     index = k;
    }
  }
  return nums[index];
}

// var creditCardNumbers = ['5865-2600-5889-0555', '4779-598666-3666', '4252-278553-7978' ,'4556-4242-9283-2260'];

// ****************** URL - 5 kyu ****************

function domainName(url){
  var w = 'www.'
  var index = url.indexOf('.');
  var dash = url.indexOf('/');
  var sub = '';

  if ( url.includes(w) )  {
    for ((i = index + 1); i < url.length; i++) {
     sub += url[i]
    }
    var indexAgain = sub.indexOf('.');
    var name = sub.substring(0, indexAgain);
    return name
  } else if ( url.includes('//') )  {
    for ((j = dash + 2); j < url.length; j++) {
     sub += url[j]
    }
    var anotherIndex = sub.indexOf('.');
    var name = sub.substring(0, anotherIndex);
    return name
  } else {
    var name = url.substring(0, index)
    return name
  }
}

// ******************* Valid Parentheses (((5kyu))) ******
// Write a function called validParentheses that takes a string of parentheses,
// and determines if the order of the parentheses is valid. validParentheses
// should return true if the string is valid, and false if it's invalid.

// Examples:
// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true

function check(input) {
  var newArr = input.split('');
  var refStack = [];

  for (i=0; i < newArr.length; i++) {
    if (newArr[i] === '(' ) {
      refStack.push('(');
    } else if (newArr[i] === ')' ) {
      if (refStack[0] !== undefined){
        refStack.pop()
      } else {
        return false
      }
    }
  }
  console.log(refStack)
  if (refStack[0] === undefined ){
    return true
  } else {
    return false
  }
}

// ********** Count the Smiley Faces - 6kyu ****************
// Given an array (arr) as an argument complete the function countSmileys
// that should return the total number of smiling faces.
//
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces:  ;( :> :} :]

function countSmileys(arr) {
  var counter = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length === 2 && (arr[i].includes(':') || arr[i].includes(';')) && (arr[i].includes(')') || arr[i].includes('D')) ) {
      counter += 1
    } else if (arr[i].length === 3 && (arr[i].includes(':') || arr[i].includes(';')) && (arr[i].includes(')') || arr[i].includes('D')) &&(arr[i].includes('-') || arr[i].includes('~')) ) {
      counter += 1
    }
  }
  return counter
}


//  ************** Flatten Array - 7kyu ********
function flatten (matrix) {
  return matrix.reduce((acc, el, i) => {
    return acc.concat( el )
  }, [])
}
// if index input is an array, it will insert the entire array into the new index.
// ....to flatten EVERY element of an array / sub array, you need to implement
// recursion:
function flatten (matrix) {
  return matrix.reduce((acc, el, i) => {
    return acc.concat(Array.isArray(el) ? flatten(el) : el )
  }, [])
}

// **************  
function mostUsedChar(str) {
  var thing = str.split(' ').join('');
  var ref = {};
  for (var i = 0; i < thing.length; i++) {
    if (ref.hasOwnProperty(thing[i]) === false) {
       ref[thing[i]] = 1;
    } else {
    ref[thing[i]] += 1;
    }
  }
  console.log(ref);
 }
