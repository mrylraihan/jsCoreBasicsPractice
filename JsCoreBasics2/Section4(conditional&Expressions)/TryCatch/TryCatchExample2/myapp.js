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