const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = n.toString().split('').map(elem => +elem);
  return +[...numArr].
  map((elem, i) => {
    elem = numArr.slice();
    elem.splice(i, 1);
    return elem.join('');
  }).
  sort((a, b) => b - a).
  slice(0, 1).
  join('');
}



module.exports = {
  deleteDigit
};
