// this is a factory function that returns a function instead of an object 
function part1(firstN) {
    let firstNum = firstN;
    function part2(secondNum) {
        let result = firstNum + secondNum;
        return result
    }
return part2
}

const first = part1(5);//passes in the first Param 
const second = first(2)//passes in the second Param
console.log(second);


// family Full Name Example

function familyFullNames(lastN) {
    const lastName = lastN;
    function firstName(firstN) {
        fullName = `${firstN} ${lastName}`;
        return fullName
    }
    return firstName
}

const familyName1 = familyFullNames('Raihan')
const fullNameSon1Family1 = familyName1('wallie')
console.log(fullNameSon1Family1, 'first example');

const fullNameSon2Family1 = familyName1('heshow')
console.log(fullNameSon2Family1, 'first example')
const fullNameDaughter1Family1 = familyName1('Hana')
console.log(fullNameDaughter1Family1, 'first example')


//same example but with arrow functions instead and not storing the first param
const ffN = (lastName)=> {
    const fullName = (firstName)=>{
        return `${firstName} ${lastName}`
    }
    return fullName
}

const ffNFamilyName = ffN('Smith')
const fatherFullName = ffNFamilyName('John')
console.log(fatherFullName);
const sonFullName = ffNFamilyName('Sam')
console.log(sonFullName);
const daughterFullName = ffNFamilyName('Samantha')
console.log(daughterFullName);


// Calculate tax in Nyc or Maryland 

//total salary 65,000


// function taxableAmounts(salary) {
//     salary = salary;// if its the same name you dont need to put const or let 
//     function taxAmountPerState(tax) {
//         return `${(salary/100)* tax} take away:${(salary - (salary/100)* tax)}`
//     }
//     return taxAmountPerState;
// }

// with arrow functions
const taxableAmounts = salary=>{
    const taxAmountPerState = tax =>{
        return `${(salary / 100) * tax} take away:${
					salary - (salary / 100) * tax
				}`
    }
    return taxAmountPerState;
}


//newyork and maryland will have the same base param of the salary 
//setting the base parameter 
const fullSalary = taxableAmounts(60000);
//passing in the second param 
const newYorkTaxAmount = fullSalary(32)
console.log(newYorkTaxAmount);
//passing in the second param 
const marylandTaxAmount = fullSalary(25)
console.log(marylandTaxAmount);
