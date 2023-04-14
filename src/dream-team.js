const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = members;
  let newArr = [];
  //Проверяем приходит ли нам array
  if (!Array.isArray(arr)){
    return false;
  }
  //Возвращаем элементы в массиве только с типом string
  arr = arr.filter((item) => {
    return typeof item === 'string'
  });
//Перебираем, удаляем пробелы, отрезаем 1ую букву, делаем ее заглавной, добавляем в новый массив
  for(let i = 0; i < arr.length; i++){
      let char = arr[i].trim().slice(0,1).toUpperCase();
      newArr.push(char);
  }
  //сортируем новый массив по алфавиту, соединяем в строку
let result = newArr.sort().join('');
return result;
}

module.exports = {
  createDreamTeam
};
