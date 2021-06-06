const expect = require('chai').expect;
const {calculateHash} = require('../src/hash');

describe('Hash function tests', () => {
    context('Hash function works', () => {
        it('The string "Hello World" should return "A591A6D40BF420404A011733CFB7B190D62C65BF0BCDA32B57B277D9AD9F146E"', () => {
            expect(calculateHash("Hello World")).to.be.eq("a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e");
        });
        
    });
});