//Factory functions that produce another function 

// the standard way 
function caculateTaxOld(amount, tax) {
    return amount * tax;
}

const vatAmount = caculateTaxOld(100, 0.19);
const incomeTax = caculateTaxOld(100, 0.25);
console.log(vatAmount);
console.log(incomeTax);


//factory function returns a function not invoked so u can pass in next param, in this case the amount 
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);//the first param get locked in 

console.log(calculateVatAmount(100), "Vatamount");
console.log(calculateVatAmount(200), 'Vatamount')

const calculateIncomeTaxAmount = createTaxCalculator(0.25);// the first param gets locked in 

console.log(calculateIncomeTaxAmount(100), "IncomeTax");
console.log(calculateIncomeTaxAmount(200), "IncomeTax");