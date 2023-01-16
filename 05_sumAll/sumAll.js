const sumAll = function(first, last) {
    let sum = 0;
    if (first > last) {
        for (i=last; i<=first;i++) {
            sum += i;
        }
    }
    else {
        for (i=first; i<=last;i++) {
            sum += i;
        }
    }

    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
