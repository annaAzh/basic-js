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
  let result = n.toString().split('').map(Number);

return Math.max(...result.map((elem, i) => {
    elem = result.slice();
    elem.splice(i,1);
    return Number(elem.join(''))
}))
}



module.exports = {
  deleteDigit
};
