/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const s1 = [...str.toLowerCase().trim().replace(/[^A-Z0-9]+/ig, "")];
  const s2 = [...str.toLowerCase().trim().replace(/[^A-Z0-9]+/ig, "")].reverse();
  for (let k = 0; k < s1.length; k++) {
    if (s1[k] !== s2[k]) return false;
  }
  return true;
}
module.exports = isPalindrome;
