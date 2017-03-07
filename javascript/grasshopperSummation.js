/* 
Summation

Write a program that finds the summation of every number between 1 and num. 
The number will always be a positive integer greater than 0.

*/

//SOLUTION 1 using arithmetic progression 
function summation1(num) {
  return num * (num + 1) / 2
}

// SOLUTION 2 === SOLUTION 1 with arrow function expression
function summation1(num) {
  return num * (num + 1) / 2
}

function summation2(num) {
  var sum = 0;
  for (var i = 0; i<=num; i++) {
  sum += i;
  }
  return sum;
};
