const calculate = require('../app')

describe('add numbers test', ()=>{
    const addSum = jest.spyOn(calculate, 'addNumbers').mockImplementation((x,y)=>x + y)
    beforeEach(()=>{
        addSum.mockClear()
    })
    //afterAll is after each describe, after each is after each it block
    afterAll(()=>{
        addSum.mockRestore()
    })
    
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
    
})
describe('subtract numbers test', ()=>{
    const subDif = jest.spyOn(calculate, 'subtractNumbers').mockImplementation((x,y)=>x - y)
    beforeEach(()=>{
        subDif.mockClear()
    })
    //afterAll is after each describe, after each is after each it block
    afterAll(()=>{
        subDif.mockRestore()
    })
    
    it('should add num1 and num2 and return the difference', ()=>{
        // Arrange
        const num1 = 4;
        const num2 = 2;
        // Act
        const response = calculate.subtractNumbers(num1, num2)
        // Assert 
        expect(response).toEqual(2)
        expect(typeof(response)).toBe('number')
    })
    
})
describe('multiply numbers test', ()=>{
    const multiNums = jest.spyOn(calculate, 'multiplyNumbers').mockImplementation((x,y)=>x * y)
    beforeEach(()=>{
        multiNums.mockClear()
    })
    //afterAll is after each describe, after each is after each it block
    afterAll(()=>{
        multiNums.mockRestore()
    })
    
    it('should add num1 and num2 and return the multi', ()=>{
        // Arrange
        const num1 = 4;
        const num2 = 2;
        // Act
        const response = calculate.multiplyNumbers(num1, num2)
        // Assert 
        expect(response).toEqual(8)
        expect(typeof(response)).toBe('number')
    })
    
})
describe('divide numbers test', ()=>{
    const diviNums = jest.spyOn(calculate, 'divideNumber').mockImplementation((x,y)=>x / y)
    beforeEach(()=>{
        diviNums.mockClear()
    })
    //afterAll is after each describe, after each is after each it block
    afterAll(()=>{
        diviNums.mockRestore()
    })
    
    it('should add num1 and num2 and return the multi', ()=>{
        // Arrange
        const num1 = 4;
        const num2 = 2;
        // Act
        const response = calculate.divideNumber(num1, num2)
        // Assert 
        expect(response).toEqual(2)
        expect(typeof(response)).toBe('number')
    })
    
})
