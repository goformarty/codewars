/* 
Your challange is to write a function, that calculates the angle θ in degrees to the nearest integer. 
You will be given three arguments representing each side: o, h and a. One of the arguments equals zero. 
Use the length of the two other sides to calculate θ. 

You will not be expected to handle any erronous data in your solution.

  |\
  | \
  |  \
  |   \ 
o |    \ h 
  |     \
  |    θ \
  |_______\ 
     a

*/
// SOLUTION 1
function missingAngle1(h,a,o){
	var radians;
	(h===0) ? radians = Math.atan(o/a) : (a===0) ? radians = Math.asin(o/h) : radians = Math.acos(a/h);
  return Math.round(radians * 180 / Math.PI);
}

