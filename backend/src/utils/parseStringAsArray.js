module.exports = function parseStringAsArrays(arrayAsString) {
  return arrayAsString.split(',').map(item => item.trim());
};
