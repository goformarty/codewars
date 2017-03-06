/* 
Write function alternateCase which switch every letter in string 
from upper to lower and from lower to upper. 
E.g: Hello World -> hELLO wORLD
*/

// SOLUTION 1
function alternateCase(s) {
 var charArray = s.split("");
    for (var i in charArray) {
      (charArray[i] === charArray[i].toUpperCase()) ?
        charArray[i] = charArray[i].toLowerCase() :
        charArray[i] = charArray[i].toUpperCase();
}
return charArray.join("");
}