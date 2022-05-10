const cutString = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 3 === 0) {
            result += str[i];
        }
    }
    return result;
}

module.exports = { cutString }; 
