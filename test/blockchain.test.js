const BlockChain = require('../src/blockchain');
const Block = require('../src/block');
const expect = require('chai').expect;

describe('Blockchain Class Tests', () => {
    context('Blockchain should have been created', () => {

        const testBlockChain = new BlockChain();

        const nowDate = Date.now();

        const testBlock = new Block(0,nowDate,'Investtools is a very nice company to do internship.',3);


        testBlockChain.addBlock(testBlock);
        testBlockChain.addBlock(new Block(0,nowDate,'Coffee is tasty',1,testBlockChain.getLastBlock()));

        context('Blockchain should work as intended', () => {
                
                it('Should retrieve a non empty block chain', async () => {
                    expect(testBlockChain.verifyBlockChainIntegrity()).not.to.be.eq([]);
                });

                it('Should return a Proof of work higher than  0', async () => {
                    expect(await testBlockChain.verifyPoW()).to.be.above(0);
                });

        });

    });
});