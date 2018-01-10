//  ************************* 1 ******************************

// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let splitArr = str.split('');
  let newArr = [];

  for (var i = splitArr.length; i >= 0; i--) {
    newArr.push(splitArr[i])
  }
  return newArr.join('')

// ***** alt solution using .reverse() method ********
  // return str.split('').reverse().join('')
}

//  ************************* 2 ******************************

// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let rev = str.split('').reverse().join('');
  if (str === rev) {
    return true;
  } else {
    return false;
  }
}
// *** Alternate solution
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i -1];
  })
}

//  ************************* 3 ******************************

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign = Math.sign(n);
  let x = n.toString().split('').reverse().join('');
  return sign * parseInt(x)
}

//  ************************* 4 ******************************
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

//  ************************* 5 ******************************
// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

//  ************************* 6 ******************************
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length-1];

    if (!last || last.length == size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

//  ************************* 7 ******************************
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
     }
  }
  return true
}

function buildCharMap(str) {
  const charMap= {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// ****** #7 Refactored solution
function anagrams(stringA, stringB) {
  return cleanUp(stringA) === cleanUp(stringB);
}

function cleanUp(str) {
  return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
}

// ****************** 8 *************************
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var final = []
  for (let word of str.split(' ')) {
   final.push(word[0].toUpperCase() + word.slice(1));
  }
  return final.join(' ');
}

// ****** 8 Alternate solution
function capitalize(str) {
  const result = [];
  result.push(str[0].toUpperCase());

  for (let i=1; i<str.length; i++) {
    if (str[i-1] === ' ') {
      result.push(str[i].toUpperCase())
    } else {
      result.push(str[i])
    }
  }
  return result.join('')
}
// ******************* 9 **********************************
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// initial solution
function steps(n) {
  const shape = [];
  for (i=0; i<n; i++){
    shape.push(' ');
  }
  for (j=0; j<n; j++) {
    shape[j] = '#';
    console.log(shape.join(''));
  }
}

// alternate solution
function steps(n) {
  for (row=0; row < n; row++) {
    let shape = '';

    for (column=0; column < n; column++) {
      if (column <= row ) {
        shape += '#';
      } else {
        shape += ' ';
      }
    }

    console.log(shape);
  }
}

// Recursive solution
function steps(n, row = 0, stair='') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
   stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}

// ********************* 10 **************************
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let frame = (2*n - 1);
  let medianIndex = n-1 ;

  const rowHolder = [ ];
  for (let row = 0; row < n; row++) {
    let prevRow = rowHolder;
    for (let column = 0; column < frame; column++) {
      if (row === 0) {
        prevRow[medianIndex] = '#';
        prevRow[column] = ' ';
      } else if (row < medianIndex) {
        prevRow[medianIndex + row] = '#';
        prevRow[medianIndex - row] = '#';
      } else if (row === medianIndex) {
        prevRow[column] = '#';
      }
    }
    console.log(prevRow.join(''));
  }
}

// Alternate / Refactored solution
function pyramid(n) {
  let frame = (2*n - 1);
  let medianIndex = n-1 ;

  for (let row = 0; row < n; row++) {
    let level = '';

    for(let column = 0; column < frame; column++){
      if (medianIndex - row <= column && medianIndex + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

// Refactored with Recursion
function pyramid(n, row = 0, level = '') {
  let frame = (2*n - 1);
  let medianIndex = n-1 ;

  if (row === n){
    return;
  }

  if (row < n) {
    for (let column = 0; column < frame; column++) {
      if (medianIndex - row <= column && medianIndex + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
  }

  if (frame === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }
}


// *********************** 11 ********************
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0;
  let newStr = str.toLowerCase();
  let vowelRef = ['a', 'e', 'i', 'o', 'u'];

  for (let char of newStr) {
    if (vowelRef.includes(char)) {
      counter ++;
    }
  }
 return counter;
}

// refactor with RegEx
function vowels(str) {
  const matchs = str.match(/[aeiuo]/gi);
  return matches ? matches.length : 0;
}


// ********************** 12 *********************
// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i =0; i < n; i++){
    results.push([]);
  }

  let counter = 1;
  let startCol = 0;
  let endCol = n-1;
  let startRow = 0;
  let endRow = n-1;

 while (startCol <= endCol && startRow <=endRow) {

  // Top Row
  for (let i = startCol; i <= endCol; i++) {
    results[startRow][i] = counter;
    counter++;
  }
  startRow++;

  // Right hand column
  for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
  endCol--;

  // Bottom row
  for (let i = endCol; i >= startCol; i--){
      results[endRow][i] = counter;
      counter++;
  }
  endRow--;

  // Start Column
  for (let i = endRow; i >= startRow; i--) {
    results[i][startCol] = counter;
    counter++;
  }
  startCol++;

  }
  return results;
}

// ********************** 13 **************************
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let arr = [0, 1];
  for (let i=2; i <= n; i++) {
    arr.push(arr[i-2]+arr[i-1]);
  }
  return arr[n];
}

// Alternate Recursive Solition 
function fib(n) {
 if (n < 2) {
   return n;
 } else {
   return fib(n-1) + fib(n-2);
 }
}
