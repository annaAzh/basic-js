const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr instanceof Array) {
      let result = 1;
      for ( let i = 0; i < arr.length; i++) {
        let res = 1;
        if (arr[i] instanceof Array) {
          let resRec = this.calculateDepth(arr[i]);
          res += resRec;
        }
        res > result ? result = res : '';
        res = 1; 
      }
    return result;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
