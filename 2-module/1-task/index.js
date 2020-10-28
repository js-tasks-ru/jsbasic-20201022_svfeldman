/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let res = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == "number") {
      res = res + salaries[key];
    } 
  }
  return res;
}