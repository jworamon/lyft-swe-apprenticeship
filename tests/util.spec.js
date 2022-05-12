import { expect } from 'chai';
import cutString from '../server/util.js';

// const { expect } = require('chai');
// const { cutString } = require('../server/util');

describe('cutString', () => {
    it('returns a string', () => {
        expect(cutString('xyz')).to.be.a('string');
    });

    it('returns a string that contains every third letter from the original string', () => {
        expect(cutString('iamyourlyftdriver')).to.equal('muydv');
        expect(cutString('hellowold')).to.equal('lwd');
    });

    it('returns an empty string if the original string length is less than 3', () => {
        expect(cutString('')).to.equal('');
        expect(cutString('a')).to.equal('');
        expect(cutString('aa')).to.equal('');
    });
});

