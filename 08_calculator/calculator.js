const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  var total = 0;
  for (i=0; i<numbers.length;) {
    total += numbers[i];
    i++;
  }
  return total;
};

const multiply = function(nums) {
  var total = 1;
  for (i=0; i<nums.length;) {
    total *= nums[i];
    i++;
  }
  return total;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    for (i = num - 1;i>0;i--) {
      num *= i
    }
    return num;
  }
 };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
