const convertToCelsius = function(fahrenheit) {
  var temp = (fahrenheit - 32) * 5/9
  return Math.round(10*temp)/10;
};

const convertToFahrenheit = function(celsius) {
  var temp = (celsius * 9/5) + 32;
  return Math.round(10*temp)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
