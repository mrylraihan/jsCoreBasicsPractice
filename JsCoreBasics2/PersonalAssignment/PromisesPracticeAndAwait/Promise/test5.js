// Callback function that takes a string 
//promisify this call back 
function Callback(cb, str) {
    cb(str)
}

const callBackPromise = (str)=>{
    return new Promise((resolve, reject)=>{
        Callback(()=>{
            if(!str)reject('your string is not defined')
            resolve(str)
        },str)
    });
}

callBackPromise('stuff')
.then(str=>{
    console.log(str, 'then 1')
    return str
})
.catch(err=>{
    console.log(err)
    return 'Word from catch'
})
.then(str=>console.log(str, 'then 2'))