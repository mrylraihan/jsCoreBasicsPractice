const doSomething = (a)=>{
    return new Promise((resolve, reject) => {
        if(a){
            // will automatically return as the resolved promise
            resolve('im valid')
        }else{
            //will return in the catch
            reject('invalid')
        }
    })
}


doSomething('Wallie')
.then(a=>console.log(a))
.catch(console.err)

console.log('after promise');