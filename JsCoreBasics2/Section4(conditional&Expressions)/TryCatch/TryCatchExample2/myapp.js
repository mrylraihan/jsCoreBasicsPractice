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
    const yemenValue = convertToRial('ten');
console.log(yemenValue);
} catch (e) {
    console.log('your error is : '+ e.message);
}
console.log('more stuff');