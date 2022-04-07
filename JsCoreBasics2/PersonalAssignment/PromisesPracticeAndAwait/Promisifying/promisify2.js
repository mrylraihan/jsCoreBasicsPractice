const p = new Promise((resolve, reject)=>{
    let a = 1+1
    if(a ==2){
        resolve('Success P')
    }else{
        reject('Failed P')
    }
})
const d = new Promise((resolve, reject)=>{
    let a = 1+1
    if(a ==2){
        resolve('Success D')
    }else{
        reject('Failed D')
    }
})

p.then(console.log).catch(console.error)
d.then(console.log).catch(console.error)

Promise.all([p, d]).then(data => console.log(data,' All')).catch(console.error)
Promise.race([p,d]).then(data=>console.log('Race '+data)).catch(console.error)
Promise.any([p,d]).then(data=>console.log('Any '+data)).catch(console.error)