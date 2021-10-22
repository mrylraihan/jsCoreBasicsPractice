// Factory functions 
//the idea behind factory functions are that they are 
//functions that produce another function 

//Factory function / closures

function createTaxCalculator(tax) {
    function calculateTax (amount){
        return amount * tax;
    }
    return calculateTax;// this is how we pass in the amount param
}

const calculateValAmount = createTaxCalculator(0.19);// this locks in the tax param
const calculateIncomeAmount = createTaxCalculator(0.25);// this locks in the tax param

console.log(calculateValAmount(100));//this passes in the amount param
console.log(calculateIncomeAmount(200));//this passes in the amount param


// Closures
// the functions have access to the outer variables 
const glabalV = 'glabalV';

function outer() {
   const outerFV = 'outerFV';
   function inner() {
       let innerV = 'innerFV' 
      return  innerV+= " " +outerFV+ " "+ glabalV;
   }
    return inner();
}

const combinedVariables = outer();
console.log(combinedVariables);// innerFV outerFV glabalV


// --------------------------->

let multiplier = 2;
function createTaxCalculator1(tax) {
    const amount  = 100;
    function calculateTax1 (){
        console.log(multiplier);// will log as 3 even though before it was 2
        // this is because the its changing in the global context, the only thing that gets locked in is the parameter 
        return amount * tax * multiplier;
    }
    return calculateTax1();// this is how we pass in the amount param
}
const calculateValAmount1 = createTaxCalculator1(0.19);// this locks in the tax param
multiplier = 3// this will change the value of whats being used in the function because its global, and because its before the function was called
const calculateValAmount2 = createTaxCalculator1(0.19)// this locks in the tax param

console.log(calculateValAmount1);//38
console.log(calculateValAmount2);//57