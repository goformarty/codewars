/* Create a function taking a positive integer as its parameter 
and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately 
starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol 
in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M' */

// SOLUTION 1 
function solution(number){
  var roman = '';
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

  for (var i = 0; i < decimal.length; i++) {
    while (decimal[i] <= number) {
      roman += romanNumeral[i];
      number -= decimal[i];
    }
  }
  return roman;
}