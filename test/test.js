'use strict';

const { expect } = require('chai');
const {
  toValidityID,
  isValidityID,
  fromValidityID
} = require('../');

describe('validity ID calculator', () => {
  it('is bijective', () => {
    const address = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const blockNumber = 7944251;
    const result = fromValidityID(toValidityID(address, blockNumber));
    expect(address).to.eql(result.address);
    expect(blockNumber).to.eql(result.blockNumber);
  });
  it('can validate', () => {
    const address = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const blockNumber = 7944251;
    const id = toValidityID(address, blockNumber);
    expect(isValidityID(id)).to.be.true;
    const fakeId = id.substr(0, 65) + '1';
    expect(isValidityID(fakeId)).to.be.false;
  });
});
