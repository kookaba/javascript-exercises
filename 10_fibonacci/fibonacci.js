const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (typeof num === 'string') {
        num = Math.abs(num);
    }
    var x = 0;
    var y = 1;
    var next;
    //create an array
    var list = [];
    for (let z = 0; z <= num; z++) {
        list.push(x);
        next = x + y;
        x = y;
        y = next;
    }
    return list[num];
};

// Do not edit below this line
module.exports = fibonacci;
