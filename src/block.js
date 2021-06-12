const {calculateHash} = require('./hash'); 

class Block {
    constructor(index = 0, timestamp, data, difficulty,previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = calculateHash(index + timestamp + data + previousHash);
        this.previousHash = previousHash || "";
        this.difficulty = difficulty;
    }

    async mine(){

        if(this.hash.substring(0,this.difficulty) === Array(this.difficulty + 1).join("0")){

            return ({
                nonce: this.index,
                solution: this.hash
            })
        }

        this.index++
        this.hash = calculateHash(this.index + this.timestamp + this.data + this.previousHash);
        this.mine();
    }
}

module.exports = Block