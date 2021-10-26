// Factory functions 
//the idea behind factory functions are that they are 
//functions that produce another function 


// Regular function 
function nonFactCalculateTax(amount, tax) {
    return amount * tax;
}

const vatAmount = nonFactCalculateTax(100, 0.19)
const incomeTax = nonFactCalculateTax(100, 0.25)

console.log(vatAmount);//19
console.log(incomeTax);//25


//Factory function 

function createTaxCalculator(tax) {
    const calculateTax = amount=> {
        return amount * tax;
    }
    return calculateTax;
}

const calculateValAmount = createTaxCalculator(0.19);//tax param
const calculateIncomeAmount = createTaxCalculator(0.25);//tax param

console.log(calculateValAmount(100));//amount param
console.log(calculateIncomeAmount(200));//amount param