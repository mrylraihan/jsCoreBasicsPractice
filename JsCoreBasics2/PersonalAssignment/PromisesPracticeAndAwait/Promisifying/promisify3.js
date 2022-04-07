const firstCallback = (fn, name)=>{
    fn(name)
}

const promiseFirstBC = (fn, name)=>{
    const promise = new Promise((resolve, reject)=>{
        fn(()=>{
            if(name)resolve('Hi '+ name)
            reject('Sorry name input is invalid')
        })
    })
    return promise
}

const testPromise = ()=>{
    promiseFirstBC(firstCallback, '').then(console.log).catch(console.error)
}

testPromise()