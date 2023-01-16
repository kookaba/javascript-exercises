const removeFromArray = function(myArray, ...args) {
    for (var item of args) {
        if (!myArray.includes(item)) {
            continue;
        }
        else {
            let index = myArray.indexOf(item);
            myArray.splice(index, 1);
        }

        }
    return(myArray);
};

// Do not edit below this line
module.exports = removeFromArray;
