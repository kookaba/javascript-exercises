const palindromes = function (word) {
    let backwards = '';
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    word = word.replaceAll(' ', '');
    word = word.toLowerCase();

    for (let i = word.length - 1; i >= 0; i--) {
        backwards += word[i]
    }

    if (word === backwards) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
