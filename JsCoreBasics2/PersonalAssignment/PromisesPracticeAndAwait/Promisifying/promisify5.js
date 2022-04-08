
const CallBackSum=(fn,a,b)=>{
    return fn(a,b)
}


const promiseSumUp= (num1, num2)=>{
    const promise = new Promise((resolve, reject)=>{
        CallBackSum(()=>{
            if(!num1 || !num2)reject('input is invalid')
            resolve(num1+num2+' input is valid')
        },num1, num2)
    })
    return promise 
}

promiseSumUp(3,3).then(console.log).catch(console.log)

// or like this 
// const promiseSumUp= (num1, num2)=>{
    const promise = new Promise((resolve, reject)=>{
        num1 = 2
        num2 = 3
        CallBackSum(()=>{
            if(!num1 || !num2)reject('input is invalid')
            resolve(num1+num2+' input is valid')
        },num1, num2)
    })
    // return promise 
// 

promise.then(console.log).catch(console.log)
