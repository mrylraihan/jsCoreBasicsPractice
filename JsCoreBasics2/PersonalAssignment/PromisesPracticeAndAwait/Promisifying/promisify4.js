const callBackFN=(cb, n)=>{
    return cb(n)
}
                        //callBackFN
const promiseToSayHi = (fn, n)=>{
    return new Promise((res,rej)=>{
        return fn(()=>{
            if (n) res(`hi im ${n}`)
            rej(`hey invalid input`)
        },n)
    })
}

promiseToSayHi(callBackFN, '').then(console.log).catch(error=>{
    console.log(error);
    return `invalid name so here juan instead!`
}).then(name=>console.log(name))
//hey invalid input
//invalid name so here juan instead!


Promise.all([promiseToSayHi(callBackFN, 'Wallie'), promiseToSayHi(callBackFN, 'Wayel')]).then(data => {
    console.log(data, 'ALL');//['hi im Wallie', 'hi im Wayel']
}).catch(console.log)


Promise.all([promiseToSayHi(callBackFN, ''), promiseToSayHi(callBackFN, 'Wayel')]).then(data=>{
    console.log(data, 'ALL');
}).catch(console.log)
//hey invalid input
 

Promise.any([promiseToSayHi(callBackFN, 'Wallie'), promiseToSayHi(callBackFN, 'Wayel')]).then(data => {
    console.log(data, 'Any');//['hi im Wallie', 'hi im Wayel']
}).catch(console.log)

Promise.any([promiseToSayHi(callBackFN, 'Wallie'), promiseToSayHi(callBackFN, '')]).then(data => {
    console.log(data, 'Any');//['hi im Wallie', 'hi im Wayel']
}).catch(console.log)
Promise.race([promiseToSayHi(callBackFN, 'Wallie'), promiseToSayHi(callBackFN, '')]).then(data => {
    console.log(data, 'Race');//['hi im Wallie', 'hi im Wayel']
}).catch(console.log)

Promise.race([promiseToSayHi(callBackFN, 'Wallie'), promiseToSayHi(callBackFN, '')]).then(data => {
    console.log(data, 'Race');//['hi im Wallie', 'hi im Wayel']
}).catch(console.log)