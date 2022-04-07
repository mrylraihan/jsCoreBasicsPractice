const getFruits=(cb)=>{
    let fruits = ['apple', 'orange', 'banana']
    setTimeout(()=>cb(fruits),1000)
}
const getNames=(cb)=>{
    let names = ['Wallie', 'Heshow', 'Meshia']
    setTimeout(()=>cb(names),1000)
}

function promisify(func){
    return function(){
        return new Promise((resolve, reject)=>{
            try{
                func(resolve)
            }catch(e){
                reject(e)
            }
        })
    }
}

const promisified = promisify(getFruits)
const promisified2 = promisify(getNames)

Promise.all([promisified(),promisified2()])
.then(console.log)