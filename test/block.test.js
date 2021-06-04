
const expect = require('chai').expect;
const Block = require('../src/block');

describe('Block class tests', () => {
    context('Block should be instantiated as newBlock', () => {

        const timeStamp = Date.now();
        const message = "I like coffee";
        const nonce = 3;

        
        const newBlock = new Block(message,timeStamp,nonce);
    });
});
