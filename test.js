const chai = require('chai');

const ways = require('.');

chai.should();

const tests = [];
Object.keys(ways).forEach((way) => {
  tests.push({
    way,
    fn: async (nb) => ways[way](nb),
  });
});

describe('Test many ways of doing', () => {
  tests.forEach((test) => {
    describe(`Way to use ${test.way}`, () => {
      it('should return 0 if parameter is equal to 0', (done) => {
        test.fn(0).then((res) => {
          res.should.equal(0);
          done();
        });
      });
      it('should return parameter if lower to 10', (done) => {
        test.fn(5).then((res) => {
          res.should.equal(5);
          done();
        });
      });
      it('should return 10 if parameter is 10', (done) => {
        test.fn(10).then((res) => {
          res.should.equal(10);
          done();
        });
      });
      it('should return 10 if parameter is upper to 10', (done) => {
        test.fn(15).then((res) => {
          res.should.equal(10);
          done();
        });
      });
    });
  });
});
