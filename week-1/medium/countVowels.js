/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let newStr = str.toLowerCase();
  let vowel = 0;
  for (let i = 0; i < str.length; i++) {
    const char = newStr[i];
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      vowel++;
    }
  }
  return vowel;
}

module.exports = countVowels;
