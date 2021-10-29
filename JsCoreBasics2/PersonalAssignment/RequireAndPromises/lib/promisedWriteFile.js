const fs = require('fs')

const promiseWriteFile = (outFile, writeData, options) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(outFile, writeData, options, (error) => {
      if (error) reject(error) // go to catch if error
      resolve(writeData) // return the data that got written
    })
  })
}

module.exports = promiseWriteFile
