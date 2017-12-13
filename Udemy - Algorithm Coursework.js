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
  let ref = {};
  for (let value of str) {
    if (ref[value] >= 1) {
      ref[value] += 1;
    } else {
      ref[value] = 1;
    }
  }

  let highestValue = 0;
  let key;
  for (let thing in ref) {
    if (ref[thing] >= highestValue) {
      highestValue = ref[thing];
      key = thing;
    }
  }
  return key;
}





// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}
