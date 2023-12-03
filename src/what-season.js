const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {

  // const season = ['winter', 'spring', 'summer', 'autumn'];
  // const date = new Date();
  // if (!date) {
  //   return 'Unable to determine the time of year!'
  // }

  // const month = date.getMonth();
  // if ( month < 3){
  //   return season[0];
  // } else if (month < 6) {
  //   return season[1];
  // } else if(month < 9){
  //   return season[2];
  // } else if (month <12 ){
  //   return season[3];
  // } else {
  //   return `Invalid date!`;
  // }
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
