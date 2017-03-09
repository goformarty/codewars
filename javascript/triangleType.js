/* In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

/*

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

// SOLUTION 1

function triangleType1(a, b, c){
  var myArray = [];
  myArray.push(a,b,c);
  var sortedArray = myArray.sort(function(a,b){return (a-b);});
  a = sortedArray[0];
  b = sortedArray[1];
  c = sortedArray[2];
  var x = Math.pow(a,2) + Math.pow(b,2);
  var y = Math.pow(c,2);
  
  return (a+b<=c) ? 0 : (x>y) ? 1 : (x===y) ? 2 : 3;
}

// SOLUTION 2 

function triangleType2(a, b, c){
  var max = Math.max(a,b,c);
  
  if (a+b+c <= 2*max) return 0;
  if (2*max*max === a*a+b*b+c*c) return 2;
  if (2*max*max > a*a+b*b+c*c) return 3;
  return 1;
}