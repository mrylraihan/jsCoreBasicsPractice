const calculate = require('../app')

describe('add numbers test', ()=>{
    it('should add num1 and num2 and return sum', ()=>{
        // Arrange
        const num1 = 3;
        const num2 = 4;
        // Act
        const response = calculate.addNumbers(num1, num2)
        // Assert 
        expect(response).toEqual(7)
        expect(typeof(response)).toBe('number')
    })
    it('should add num1 and num1 and return sum', ()=>{
        // Arrange
        const num1 = 3;
      
        // Act
        const response = calculate.addNumbers(num1, num1)
        // Assert 
        expect(response).toEqual(6)
        expect(response).toBe(6)
        expect(typeof(response)).toBe('number')
    })
    it('should not return 7', ()=>{
        // Arrange
        const num1 = 3;
      
        // Act
        const response = calculate.addNumbers(num1, num1)
        // Assert 
        expect(response).toEqual(6)
        expect(response).not.toBe(7)
        expect(typeof(response)).not.toBe('string')
    })
    it('should return the concatenated string ', ()=>{
        // Arrange
        const fname = 'Wallie ';
        const lname = 'Raihan'
      
        // Act
        const response = calculate.addNumbers(fname, lname)
        // Assert 
        expect(response).toEqual('Wallie Raihan')
        expect(response).not.toEqual(expect.any(Number))
        expect(response).toEqual(expect.any(String))
        expect(response).not.toBe(7)
        expect(typeof(response)).toBe('string')
    })
})