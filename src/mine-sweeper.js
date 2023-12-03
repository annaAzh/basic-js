const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( /* matrix */ ) {
//   let arr = [];

//   for( let i = 0; i < matrix.length; i++){
//     if (matrix[i] === true) {
//       arr[i+1] = arr[i+1] + 1;
//       arr[i-1] = arr[i+1] + 1;
//     } else {
//       arr[i] = 0;
//     }
//   }
// console.log(0,693/5730)
//   return arr;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
