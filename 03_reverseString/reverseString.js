const reverseString = function(theString) {
    let reversedString = theString.split('');
    reversedString = reversedString.reverse();
    reversedString = reversedString.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
