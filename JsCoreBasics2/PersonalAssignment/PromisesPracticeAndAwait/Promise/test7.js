const first = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('we did it first!'), 2000)
})
const second = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('we did it second!'), 1000)
})

try{
    const result = Promise.any([first, second]);
    result.then(data=>console.log(data))
}catch(err){
    console.log(error);
}