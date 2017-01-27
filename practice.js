// ************ Reverse Words **************

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
