/* You are going to be given a word. 
Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

*/

// SOLUTION 1 
function getMiddle1(s)
{
      return s.length%2 ? s[(s.length-1)/2] : s.substring(s.length/2-1,s.length/2+1);
}

// SOLUTION 2

function getMiddle2(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}