const convertToRubys = (dollar) => dollar * 64;

try {
    const myValue = convertToRubys("five");
    if (!myValue) {
        throw new SyntaxError('wrong input');
    }
    console.log(myValue);
    
} catch (error) {
    console.log('your error is : ' + error);
}



const convertToRial = (dollar)=>{
    if (typeof dollar === 'number') {
        return dollar * 250
    }else{
        throw {message: 'Amount need to be in numbers'};
    }
}

try {
    const yemenValue = convertToRial(10);
console.log(yemenValue);
    const anotherValue = convertToRial('Ten');
    console.log(anotherValue);
} catch (e) {
    console.log('your error is : '+ e.message);
}
console.log('more stuff');



function makeMoreMoney(amount, multipliedBy) {
    let newAmount =  amount * multipliedBy;
     return newAmount;
}

try {
    const newAmountAfter = makeMoreMoney(200,'five');
    if (!newAmountAfter) {
    throw {message: 'for newAmount it needs to be in numbers'};
    }
    console.log(`This is your new amount ${newAmountAfter}`);
} catch (error) {
    console.log(error.message);
}




function anotherFunction(number) {
    if (typeof number === 'number' ) {
        number *= 2; 
    }else{
        throw {message: 'your input is not a number!'}
    }
   return number;
}

try{
    const newNum = anotherFunction("five");
    console.log(newNum);
}catch(e){
    console.log(e.message);
}