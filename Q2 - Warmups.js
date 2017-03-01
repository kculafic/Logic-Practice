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


//  **************************** #2 **************************
// array every
// create a function named `every` that takes an array and a function
// it should return true if and only if the passed function returns true
// for ALL of the elements in the array
//
// To test:
// npm test 03-array-every/test.js

const every = function(array, fn){
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true ) {
      newArr.push('true')
    } else if (fn(array[i]) === false ) {
      newArr.push('false')
    }
  }

  if (newArr.includes('false') === true) {
    return false
  } else if (newArr.indexOf('false') === -1){
    return true
  }
}

// ************************* #3 **************************
// array some
//
// create a function named `some` that takes an array and a function.
// it should return true if any of the array elements returns true when
// passed as an argument to the function. It should return false, if and only if
// all the elements return false when passed as arguments to the function.
//
// To test:
// npm test 04-array-some/test.js

const some = function(array, fn){
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true ) {
      newArr.push('true')
    } else if (fn(array[i]) === false ) {
      newArr.push('false')
    }
  }

  if (newArr.includes('true') === true) {
    return true
  } else if (newArr.indexOf('true') === -1){
    return false
  }

// ************************ #6 *******************

// We have a list of the daily average temperatures of different European towns.
//
//     { Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
//       Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
//       Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
//       Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
//       Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] }
//
// We want to sort these towns into two groups: "warm" and "hot". "warm" should
// be towns that have at least one day with a temperature greater than 19. "hot"
// should be towns where the temperature is greater than 19 every day. The result
// should look like this:
//
//     {  hot: [ "Hottown" ],
//       warm: [ "Town1", "Town2", "Town3" ] }
//
//  Hint: "every" temperature must be above 19 for it to be hot
//        "some" temperatures must be above 19 (but not all), for it to be warm.
//
// To test:
// npm test 06-temp-gauge/test.js


const tempGauge = function(towns){
  const newObj = {
    'hot': [],
    'warm': []
  };

  for (let city in towns) {
    towns[city].counter = 0;
    for (let i = 0; i < towns[city].length; i++) {
      if (towns[city][i] > 19) {
       towns[city].counter += 1;
      }
    }

    if (towns[city].length === towns[city].counter){
      newObj['hot'].push(city)
    } else if (towns[city].counter > 1){
      newObj['warm'].push(city)
    }
  }
  return newObj
}
