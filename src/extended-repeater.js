const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {addition, repeatTimes, additionRepeatTimes, separator, additionSeparator} = options;
  try {
    addition = String(addition);
    str = String(str);
  } catch (error) {
    
  }
  addition !== 'undefined' ? addition : addition = '';
  additionRepeatTimes ? additionRepeatTimes : additionRepeatTimes = 1;
  repeatTimes ? repeatTimes : repeatTimes = 1;
  separator ? separator : separator = '+';

  if (addition) {
    additionSeparator ? additionSeparator : additionSeparator = '|';
  } else {
    additionSeparator = '';
  }

  let extra;

  extra  = addition ? addition.concat(additionSeparator).repeat(additionRepeatTimes).slice(0, -1 * additionSeparator.length) : '';
  return [...str.toString(), ...extra, ...separator].join('').repeat(repeatTimes).slice(0, -1 * separator.length);
}

module.exports = {
  repeater
};
