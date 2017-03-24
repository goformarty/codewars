/* Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. 
The first word within the output should be capitalized only 
if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

*/

//SOLUTION 1
function toCamelCase1(str) {
  var arr=[];
  var result = '';
  
  if (str.indexOf('-')!==-1) {
    arr = str.split('-');
  }
  else {
    arr = str.split('_');
  }
  
  result = arr[0] ;
  for (var i=1; i<arr.length; i++) {
    var word = arr[i];
    var capitalisedWord = word.replace(word[0], word[0].toUpperCase());
    result += capitalisedWord ;
  }
  return result;
}

