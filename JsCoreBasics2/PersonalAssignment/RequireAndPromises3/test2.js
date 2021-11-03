function callBackFN(cb, fName, lName) {
    cb(fName +' '+ lName)
}


const fullName = (fName, lName)=>{
    const promise = new Promise((resolve, reject)=>{
        callBackFN(()=>{
            resolve(fName + ' ' + lName)
        }, fName,lName)
    })
    return promise
}

const testPromise = ()=>{
    fullName('Wallie', 'Raihan')
    .then(data=>{
        console.log(data += ' Senior');
        return data})
    .then(console.log)
}

testPromise()