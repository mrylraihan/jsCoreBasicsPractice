const calculate = require('../app')

describe('shoould sumUp nums', ()=>{
    it('should return total', () => {
        // Arrange
        const num1 = 2;
        const num2 = 2;
        // Act 
        const result = calculate.addNumbers(num1, num2)
        // Assert
        expect(result).toEqual(4)
        
    })
})

describe('should subtract nums', ()=>{
    it('should return total', () => {
        const num1 = 2;
        const num2 = 2;
    
        const result = calculate.subtractNumbers(num1, num2)
        expect(result).toEqual(0)
        
    })
})