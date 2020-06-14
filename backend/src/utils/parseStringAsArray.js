module.exports = function parseStringAsArrays(arrayAsString) {
  if (arrayAsString)
    return arrayAsString.split(',').map(item => item.trim());
};
