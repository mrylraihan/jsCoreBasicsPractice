const fs = require('fs')

const promisedReadFile = require('./promisedReadFile')
const promisedWriteFile = require('./promisedWriteFile')

const copyJson = (inFile, outFile)=>{
    promisedReadFile(inFile, 'utf8')
    .then(rawData=>{
        const rwData = JSON.parse(rawData)
        const pojo = JSON.stringify(rwData, null, 2)
        return pojo
    })
    .then(pojo => {
        promisedWriteFile(outFile, pojo)
        console.log(pojo);
    })
    // .then(console.log)
    .catch(err => console.log(err))
}

module.exports = copyJson