const convertToCelsius = function(fahrenheit) {
  return (fahrenheit -32) * 5/9;
};

const convertToFahrenheit = function(celsius) {
  return (celsius + 32) * 9/5;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
