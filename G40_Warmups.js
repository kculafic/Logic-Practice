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

// Description:

// Lucy loves to travel. Luckily she is a renowned computer
// scientist and gets to travel to international conferences
// using her department's budget.

// Each year, Society for Exciting Computer Science Research (SECSR)
// organizes several conferences around the world. Lucy always picks
// one conference from that list that is hosted in a city she hasn't
// been to before, and if that leaves her with more than one option,
//  she picks the conference that she thinks would be most relevant
//  for her field of research.

// Write a function conferencePicker that takes in two arguments:

// citiesVisited, a list of cities that Lucy has visited before, given
// as an array of strings.
// citiesOffered, a list of cities that will host SECSR conferences
// this year, given as an array of strings. citiesOffered will already
// be ordered in terms of the relevance of the conferences for Lucy's
// research (from the most to the least relevant).
// The function should return the city that Lucy should visit, as a
// string.

// Also note:

// You should allow for the possibility that Lucy hasn't visited any
// city before.
// SECSR organizes at least two conferences each year.
// If all of the offered conferences are hosted in cities that Lucy
// has visited before, the function should return 'No worthwhile conferences
// this year!' (Nothing in Haskell)

// Example:

// citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
// citiesOffered = ['Stockholm','Paris','Melbourne'];

// conferencePicker (citiesVisited, citiesOffered);
// // ---> 'Paris'

function conferencePicker (citiesVisited, citiesOffered) {
  var newArr = [];
  for (var i = 0; i < citiesOffered.length; i++) {
    if (citiesVisited.indexOf(citiesOffered[i]) === -1) {
      newArr.push(citiesOffered[i])
    }
  }
  if (newArr[0] === undefined) {
    return 'No worthwhile conferences this year!'
  } else {
    return newArr[0]
  }
}


// Write a function that takes a string and returns an object
// with the vowels in that string as keys and their value is how many times
// they occurred in the string. The counter function should not care about case.
// The keys in the object should all be lowercase.
// Ex: countVowels('aAbcdade') -> {a:3,e:1}

function countVowels(str) {
  const obj = {};
  const newStr = str.toLowerCase();
  const newArr = newStr.split('');

  var vowels = newArr.filter(function(vowel) {
    return (vowel === 'a' || vowel === 'e' || vowel === 'i' ||vowel === 'o' || vowel === 'u')
  })
  for (i = 0; i < vowels.length; i++) {
    obj[vowels[i]] = (obj[vowels[i]] || 0) + 1;
  }
  return obj
}



// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)

function doubleChar(str) {
  if (typeof str === 'string') {
    var newArr = [];
    for (let i=0; i < str.length; i++ ) {
      newArr.push(str[i])
      newArr.push(str[i])
    }
    var newStr = newArr.join('');
    return newStr
  } else {
    return "Ruh roh! That isn't a string!"
  }
}

// Create a function that takes a positive number and it returns its factorial.
//
// A factorial is the product of an number and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24 (4*3*2*1).
//
// if the integer is zero, return 1; factorial(0) is defined as 1
// if the integer is negative, return the string "undefined"

function factorial(a){
  var counter = a;
  if (a === 0) {
    return 1
  } else if (a < 0) {
    return 'undefined'
  } else {
    return (a * factorial(a - 1));
  }
}

// Task:
//   Write a function named `fizzbuzz` that returns an array with the integers from 1 to 100 (inclusive).
//
// But:
//
//   for multiples of three, insert 'Fizz' (instead of the number) into the array.
//   for multiples of five, insert 'Buzz' (instead of the number) into the array.
//   for multiples of both three and five, insert 'FizzBuzz' (instead of the number) into the array.
//

function fizzbuzz(x){
  var newArr = [];
  for (i=0; i < x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      newArr.push('Fizz')
    } else if (i % 5 === 0) {
      newArr.push('Buzz')
    } else {
      newArr.push(i)
    }
  }
  return newArr
}

// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'


function removeDupes(input){
  var newArr = [];
  var Arr = input.split('');
  for (i=0; i < Arr.length; i++) {
    if (newArr.indexOf(Arr[i]) === -1)  {
      newArr.push(Arr[i])
    }
  }
  return newArr.join('')
}

//CI for case insensitive
function removeDupesCI(input){
  var newArr = [];
  var Arr = input.split('');
  for (i=0; i < Arr.length; i++) {
    if (newArr.indexOf(Arr[i]) === -1 && newArr.indexOf(Arr[i].toUpperCase() ) === -1 && newArr.indexOf(Arr[i].toLowerCase() ) === -1)  {
      newArr.push(Arr[i])
    }
  }
  return newArr.join('')
}


// Welcome. In this warmup you are required to, given a
// string, replace every letter with its position
// in the alphabet. If anything in the text isn't a letter,
// ignore it and don't return it. a being 1, b being 2,
// etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
// 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabetPosition(text) {
  var alphabetRef = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var newStr = text.toLowerCase();
  var newArr = newStr.split('');
  var nums = [];
  for (i=0; i < newArr.length; i++) {
    if (alphabetRef.indexOf(newArr[i]) !== -1) {
      nums.push(alphabetRef.indexOf(newArr[i]))
    }
  }
  return nums.join(' ')
}


// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "wookiE", return "wEikoo".

function reverseVowels(s) {
  var vowelArr = [];
  var strArr = s.split('');
  var newArr = [];
  var alphaRef = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (i = 0; i < strArr.length; i++) {
    if (alphaRef.indexOf(strArr[i]) !== -1) {
      vowelArr.push(strArr[i])
    }
  }
  vowelArr.reverse()
  let y = 0;
  for(j = 0; j < strArr.length; j++) {
    if (alphaRef.indexOf(strArr[j]) !== -1) {
      newArr.push(vowelArr[y])
      y++
    } else {
      newArr.push(strArr[j])
    }
  }
  return newArr.join('')
}


// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].

function rotate(arr,k) {
  while (k > 0){
    var x = arr.pop();
    arr.unshift(x)
    k--
  }
  return arr
}


// Create a function to name your start up!!
// This function takes a string,
// and it returns that string with no vowels,
// and all spaces replaced with an underscore,
// and no Upper Case letters
//
// nmr("Industry Disruptor") => "ndstry_dsrptr"

function namer(name){
  var newName = name.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newArr = [];
  var finalArr = [];
  for (i=0; i < newName.length; i++) {
    if (vowels.indexOf(newName[i]) === -1) {
      newArr.push(newName[i])
    }
  }
  for (j = 0; j < newArr.length; j++) {
    if (newArr[j] === ' ') {
      newArr[j] = '_';
    }
  }
  return newArr.join('')
}

/* Given two integers, which can be positive and negative,
find the sum of all the numbers between and including a and b,
and return the sum. If both numbers are equal return a or b.
Note! a and b are not ordered!
Example:
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum( a, b ) {
  var arr = [];
  if (a > b) {
    while (b <= a) {
      arr.push(b);
      b++
    }
  } else  if (a < b) {
    while (a <= b) {
      arr.push(a);
      a++
    }
  } else if (a === b) {
    arr.push(a)
  }
  var counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += arr[i]
  }
  return counter
}
