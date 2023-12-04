const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const length = s1.length > s2.length ? s1.length : s2.length;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const arr = [];
  for (let i = 0; i < length; i++) {
    if (arr2.indexOf(arr1[i]) > -1) {
      const index = arr2.indexOf(arr1[i]);
      arr.push(arr1[i]);
      arr2.splice(index, 1)
    }
  }
  return arr.length;
}

module.exports = {
  getCommonCharacterCount
};
