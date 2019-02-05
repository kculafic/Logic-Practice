// ***************** #1 Count JS Developers coming from Europe - 7kyu *********
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

function countDevelopers(list) {
  var peeps = list.filter(function(i) {
    return (i.continent === 'Europe' && i.language === 'JavaScript' )
  })
  return peeps.length
}


// ****************** #2 Greet Developers - 7kyu **********
// Add greeting property for each object that says 'Hi Sofia, what do you like the most about Java?'

function greetDevelopers(list) {
  var addGreeting = function(peep) {
    return (peep.greeting = 'Hi ' + peep.firstName + ', what do you like the most about ' + peep.language + '?')
  }
  var greeted = list.filter(addGreeting);
  return greeted
}

//  ***************** #3 Is Ruby Coming - 7kyu *************

function isRubyComing(list) {
  var ruby = list.filter(function(check) {
      return check.language === 'Ruby'
  })
    if (ruby.length > 0) {
      return true
    } else {
      return false
    }
}

// ******************* #4 find the First Python Dev **********
function getFirstPython(list) {
  var python = list.filter(function(i) {
    return i.language === 'Python'
  })
  if (python[0] !== undefined) {
    return python[0].firstName + ', ' + python[0].country
  } else {
    return 'There will be no Python developers'
  }
}

// ********************** #7 Find the Senior dev ************
function findSenior(list) {
  var maxAge = 0

  list.forEach(function(obj, index){
    if (obj.age > maxAge) {
      maxAge = obj.age
    }
  })

  return list.filter(function(x){
    if (x.age >= maxAge) {
      return x
    }
  })
}

// ****************** #8 are All continents represented? * *****
function allContinents(list) {
 var obj = {
   Africa: false,
   Americas: false,
   Asia: false,
   Europe: false,
   Oceania: false
 }
  var loop = list.forEach(function(x, index) {
    if (x.continent === 'Africa' ) {
      obj.Africa = true
    } else if ( x.continent === 'Americas') {
      obj.Americas = true
    } else if ( x.continent === 'Asia') {
      obj.Asia = true
    } else if ( x.continent === 'Europe') {
      obj.Europe = true
    } else if ( x.continent === 'Oceania') {
      obj.Oceania = true
    }
  })
  var check = Object.keys(obj).map(function(key) {
    return obj[key];
});
  var thing = check.reduce((accum, e, i) => {
    return e && accum ? true : false
  }, true);
   return thing
}

// ********* alt solution to the above ****
function allContinents(list) {
  let res = [];
  for (let person of list) {
    if (res.indexOf(person.continent) === -1) res.push(person.continent);
  }
  return res.length === 5;
}
