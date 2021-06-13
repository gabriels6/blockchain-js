const Block = require('../src/block');

class BlockChain{
    constructor(chain = []){
        this.chain = chain
    }

    addBlock(Block){
        this.chain.push(Block)
    }

    verifyBlockChainIntegrity(){
        return this.chain;
    }

    
    verifyPoW(){
        var PoW = 0;

        this.chain.forEach((block) => {
            block.mine().then(() => {
                
            });

            PoW += block.index;
        });

        return PoW;
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1]
    }

}

module.exports = BlockChain;