/*
x Simple, given a string of words, 
return the length of the shortest word(s).

String will never be empty and you do not need 
to account for different data types.
*/


// SOLUTION 1
function findShort1(s){
  var arr = s.split(" ");
  var min = arr[0].length;
  for (var i in arr) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  return min;
}

