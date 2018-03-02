const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

fizzBuzzer(1);

describe('fizzBuzzer', () => {
  it('should throw an error if parameter is not a number', () => {
    expect(() => {
      fizzBuzzer('5');
    }).to.throw(Error);
    //expect(fizzBuzzer('5').to.throw(Error));
  })
  
  it('should return "fizz" if parameter is multiple of 3', () => {
    const multsOf3 = [3, 6, 12, 21];
    
    multsOf3.forEach(m => {
      expect(fizzBuzzer(m)).to.equal('fizz');
    })
  })
  
  it('should return "buzz" if parameter is multiple of 5', () => {
    const multsOf5 = [5, 20, 25, 65];
    
    multsOf5.forEach(m => {
      expect(fizzBuzzer(m)).to.equal('buzz');
    })
  })
  
  it('should return "fizz-buzz" if parameter is multiple of 15', () => {
    const multsOf5 = [15, 45, 75, 105];
    
    multsOf5.forEach(m => {
      expect(fizzBuzzer(m)).to.equal('fizz-buzz');
    })
  })
  
  it('should return num if parameter is not fizz, buzz, or fizzbuzz', () => {
    const nums = [16, 19, 7, 1];
    
    nums.forEach(m => {
      expect(fizzBuzzer(m)).to.equal(m);
    })
  })
    

})