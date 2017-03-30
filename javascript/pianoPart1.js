/*
Your function will receive an integer between 1 and 10000 
(maybe you think that in principle it would be cool to count up to, say, 
a billion, but considering how many years it would take it is just not possible) 
and return the string "black" or "white" -- here are a few more examples:

1     "white"
12    "black"
42    "white"
100   "black"
2017  "white"

*/

// SOLUTION 1
function blackOrWhiteKey1(keyPressCount) {
    if (keyPressCount<=3) {
      keyPressCount = keyPressCount + 9;
    }
    else {
      keyPressCount = keyPressCount%88 - 3; 
    }
    
    var rest = keyPressCount%12;
    if (rest === 2 || rest === 4 || rest === 7 || rest === 9 || rest === 11 ) {
      return 'black';
    }
    else {
      return "white";
    }
}