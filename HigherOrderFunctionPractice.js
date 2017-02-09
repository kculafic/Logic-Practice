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
