const fs = require('fs')
const promiseReadFile = require('./promisedReadFile')
const promisedWriteFile = require('./promisedWriteFile')


const copyText = (inFile, outFile)=>{
    promiseReadFile(inFile, 'utf8')
    .then(txt=>{
        promisedWriteFile(outFile, txt)
        console.log(txt);
    })
    .catch(err=>console.log(err))

}

module.exports = copyText