const BlockChain = require('../src/blockchain');
const Block = require('../src/block');
const expect = require('chai').expect;

describe('Blockchain Class Tests', () => {
    context('Blockchain should have been created', () => {

        const testBlockChain = new BlockChain();

        const nowDate = '2021-06-12T19:37:31Z';

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

                it('Should return the last block.data as "Coffee is tasty"', () => {
                    expect(testBlockChain.getLastBlock().data).to.be.eq('Coffee is tasty');
                });

        });

    });
});