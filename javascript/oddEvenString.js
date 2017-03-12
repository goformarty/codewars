/* Description:

Given a string S. 
You have to return another string such that even-indexed 
and odd-indexed characters of S are grouped and groups 
are space-separated (see sample below) 

input: 'CodeWars' output 'CdWr oeas'

*/

// SOLUTION 1
function sortMyString1(S) {
    var stringEven = [];
    var stringOdd = [];
    
    for (var i in S){
      if (i%2===0) {
        stringEven.push(S[i]);
      }
      else {
        stringOdd.push(S[i]);
      }
    }
    return stringEven.join("") + " " + stringOdd.join("");
}


// SOLUTION 2 
function sortMyString2(S) {
    var odd = "";
    var even = "";
    for (var i = 0; i< S.length; i++){
      if (i%2==0){
        even += S[i];
      }else{
        odd += S[i];
      }
    }
    return even + ' ' + odd;
}

