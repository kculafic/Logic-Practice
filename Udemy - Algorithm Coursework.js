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
