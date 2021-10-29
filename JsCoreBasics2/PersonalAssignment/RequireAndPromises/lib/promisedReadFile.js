const fs = require('fs')

const promiseReadFile = (fileName, options) => {
  // this is called 'scope closure'
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, options, (error, data) => {
      // errors go to catch with reject
      if (error)reject(error)
      resolve(data) // this will wait for our data no matter how long it takes
    })
  })
}

module.exports = promiseReadFile
