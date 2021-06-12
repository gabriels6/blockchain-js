
const expect = require('chai').expect;
const Block = require('../src/block');

describe('Block class tests', () => {
    context('Block "newBlock" has been created', () => {

        const timeStamp = Date.now();
        const message = "I like coffee";
        const nonce = 0;

        
        const newBlock = new Block(nonce,timeStamp,message,3);

        describe('Block should be instantiated as newBlock', () => {

            it('Should contain a message equal to "I like coffee"', () => {
    
                expect(newBlock.data).to.be.eq("I like coffee");
    
            });
    
            it('Should contain a nonce/index equal to 0', () => {
    
                expect(newBlock.index).to.be.eq(0);
    
            });
    
            it('Should contain a previous hash equal to empty string', () => {
    
                expect(newBlock.previousHash).to.be.eq("");
    
            });

            it('Should contain a difficulty equal to 3', () => {
                
                expect(newBlock.difficulty).to.be.eq(3);

            });

            it('Should have a hash different than empty string', () => {

                expect(newBlock.hash).not.to.be.eq("");

            });
    
        });
        
        describe('Block "newBlock" has been created and mining has been done',  () => {

            before(async () => {
                await newBlock.mine();
            });

            it('Should return mining function a nonce higher than 0', () => {

                expect(newBlock.index).not.to.be.lessThan(0);

            });
            
        });
    });

    
});
