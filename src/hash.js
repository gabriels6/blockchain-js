const cryptojs = require('crypto-js');

const calculateHash = (string) => {
    let x = cryptojs.SHA256(string).toString();
    return x;
}
// let dateNow = new Date().toString()
// let dataTest = '04-06-2021 07:00'
// console.log(calculateHash(0, dataTest, '04-06-2021', ''))

module.exports = {calculateHash}