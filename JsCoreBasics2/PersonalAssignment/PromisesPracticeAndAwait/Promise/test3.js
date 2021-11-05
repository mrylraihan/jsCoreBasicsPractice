const callBackFunction = (cbf, num1, num2)=>{
    cbf(num1, num2)
}

const testCBFN = (num1, num2)=>{
    const promise = new Promise((resolve, reject)=>{
        callBackFunction(()=>{
            resolve(num1 + num2)
        }, num1, num2)
    })
    return promise;
}


const testPromise = ()=>{
    testCBFN(2,3)
    .then(console.log)
}
testPromise()
