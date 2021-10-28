'use strict'

const fs = require('fs')

// we dont need ot have this in here because we are requiring it from the promisedReadFile
// const promiseReadFile = (fileName, encoding) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, encoding, (error, data) => {
//       if (error) reject(error)
//       resolve(data)
//     })
//   })
// }
const promiseReadFile = require('./promisedReadFile')
const heyYall = (inFile) => {
  promiseReadFile(inFile, { encoding: 'utf8' })
    .then((data) => {
      console.log(data)
      const lines = data.split('\n')
      const noBlankLines = lines.filter((line) => line.length > 0)
      noBlankLines.forEach(line => {
        console.log(`Hey ${line}`)
      })
    })
    .catch((err) => console.log(err))
}

module.exports = heyYall
