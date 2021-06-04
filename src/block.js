const {calculateHash} = require('./hash'); 

class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = calculateHash(index + timestamp + data + previousHash);
        this.previousHash = previousHash.toString(); 
    }
}

module.exports = Block