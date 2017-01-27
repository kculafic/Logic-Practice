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
