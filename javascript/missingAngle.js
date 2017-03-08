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

function missingAngle(h,a,o){
  if (h===0){
	h = Math.sqrt(a*a + o*o); 
  }
  else if (a===0) {

  }
  else {}
}