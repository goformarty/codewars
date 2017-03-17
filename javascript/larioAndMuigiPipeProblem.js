/* Given the a list of numbers, 
return the list so that the values increment 
by 1 for each index up to the maximum value.

Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8 */

// SOLUTION 1
function pipeFix1(numbers){
  numbers = numbers.sort(function(a,b){return a-b;});
  var min = numbers[0];
  var max = numbers[numbers.length - 1];
  var array = [];
  for (var i = min; i<= max; i++) {
  array.push(i);
  }
  return array;
}