// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. 
// Given n, take the sum of the digits of n. If that value has two digits, 
// continue reducing in this way until a single-digit number is produced. 
// This is only applicable to the natural numbers.

function digital_root(n) {
	var result = 0;
	if (n<10) {
	  return n;
	}
	nStr = n.toString();
	for (var i = 0; i < nStr.length; i++) {
	  result += Number(nStr[i]);
	}
	n = result;
	return digital_root(n);
  }

function digital_root2(n) {
	return (n - 1) % 9 + 1;
  }