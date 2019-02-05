// Implement a funciton that checks to see if a credit card is expired
//
//

function isExpired(month, year) {
  var currentdate = new Date();

  if(year === currentdate.getFullYear() && month <= (currentdate.getMonth() + 1)) {
    return true
  } else if(year < currentdate.getFullYear()) {
    return true
  } else if((year === currentdate.getFullYear() && month > (currentdate.getMonth() + 1)) || year > currentdate.getFullYear()) {
    return false
  } else {
    throw 'Error'
  }
}

console.log(isExpired(5, 2022));
console.log(isExpired(1, 2018));

try {
  console.log(isExpired('month', 2018));
} catch(e) {
  console.log(e.toString());
}

try {
  console.log(isExpired(1, 'year'));
} catch(e) {
  console.log(e.toString());
}

// **************************************
