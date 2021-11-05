const callBackFunction = (cbf, num1, num2)=>{
    return cbf(num1, num2)
}

const testCBFN = (num1, num2)=>{
    return new Promise((resolve, reject)=>{
        callBackFunction(()=>{
            if (isNaN(num1) || isNaN(num2)){
                reject("these aren't numbers, or are undefined")
            }else{
                console.log('Good numbers you choose!');
                resolve(+num1 + +num2)
            }
        },num1, num2)
    })
}

const testPromise = async (num1, num2)=>{
        const result = await testCBFN(num1, num2)
        console.log(result);
}

testPromise('4', '8')