/* 

Implement a method that accepts 3 integer values a, b, c. 
The method should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).

*/


// SOLUTION 1:
function isTriangle1(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

// SOLUTION 2:
function isTriangle2(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}