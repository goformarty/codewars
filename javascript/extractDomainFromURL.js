/* Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string. 
For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

// SOLUTION 1
// using slice()
function domainName1(url){
  var substring='';
  var index;
  
  if (url.indexOf('www.')!==-1) {
    substring=url.slice(url.indexOf('www.') + 4);
  }
  else if(url.indexOf('https')!==-1) {
    substring=url.slice(8);
  } 
  else if(url.indexOf('http')!==-1) {
    substring=url.slice(7);
  }
  else {
    substring=url;
  }

  index = substring.indexOf('.');
  return substring.slice(0, index);
}

//SOLUTION 2
// using split()
function domainName2(url){
  if (url.indexOf("://") != -1) { 
    url = url.split("://")[1]; 
  }
  if (url.indexOf("www.") != -1) {
    url = url.split("www.")[1];  
  }
  return url.split(".")[0];
}