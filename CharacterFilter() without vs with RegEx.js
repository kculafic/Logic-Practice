var str = 'My#$&name34is3847@*#(&!@BozoThe#*&$Clo389743(*&wn';

// **** Filter Characters (that are not letters or spaces) w/o RegEx *********
function filterCharacters(string) {
  let newStr = [];
  let chars = [];

  let myArr = string.split('');

   for(let char of myArr) {
    if (char === char.toUpperCase() && char === char.toLowerCase() ){
      chars.push(char)
    } else {
      newStr.push(char);
    }
  }
  console.log('newStr : ' + newStr.join(''));
  console.log('and the filtered chars are : ' + chars.join(''));
}

filterCharacters(str);

// ***************** vs. w/ RegEx **************************
function filterChars(string) {
 return string.replace(/[^\w]/g, '')
}

filterChars(str);
