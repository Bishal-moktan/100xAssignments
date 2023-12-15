/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let newStr1 = Array.from(str1.toLowerCase());
  let newStr2 = Array.from(str2.toLowerCase());
  const length1 = str1.length;
  const length2 = str2.length;
  if (length1 !== length2) return false;

  newStr1.sort();
  newStr2.sort();

  for (let i = 0; i < length1; i++) {
    if (newStr1[i] !== newStr2[i]) return false;
  }

  return true;
}

module.exports = isAnagram;
