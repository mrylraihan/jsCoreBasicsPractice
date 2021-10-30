const copyText = require('../lib/copy-txt')

const inFile = process.argv[2]
const outFile = process.argv[3]

if(!inFile || !outFile){
    throw new Error('Your Scripts are fucked up, they need an in and out file')
}else{
    copyText(inFile, outFile)
}