const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr =  str.split('');
  const result = [];
  let el = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr)
    if (el.length === 0 )  {
      el.push(arr[i]);
      continue;
    } 

    if (el.indexOf(arr[i]) !== -1) {
      el.push(arr[i]);
    } else {
      el.length > 1 ? result.push(`${el.length}${el[0]}`) : result.push(`${el[0]}`);
      el = [];
      el.push(arr[i]);
    }

    if (i === arr.length - 1) {
      el.length > 1 ? result.push(`${el.length}${el[0]}`) : result.push(`${el[0]}`);
    }
  }
return result.join('');
}

module.exports = {
  encodeLine
};
