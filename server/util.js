const cutString = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        // add only every 3rd letter to result string
        if ((i + 1) % 3 === 0) {
            result += str[i];
        }
    }
    return result;
}

module.exports = { cutString }; 
