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

function createTaxCalculator() {
    const calculateTax = amount=> {
        return amount ;
    }
    return calculateTax;
}

const calculateValAmount = createTaxCalculator(0.19);
const calculateIncomeAmount = createTaxCalculator(0.25);

console.log(calculateValAmount(100));
console.log(calculateIncomeAmount(200));