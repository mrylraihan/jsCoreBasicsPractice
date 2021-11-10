'use strict'

const fs = require('fs')

const annagrams = function (inFile, outFile) {
  fs.readFile(inFile, 'utf8', (error, data) => {
    if (error) {
      console.log(error.stack)
    }

    const namesArray = data.toLowerCase().split(',')
    const name1 = namesArray[0].split('').sort().join('')
    const name2 = namesArray[1].split('').sort().join('')
    const result = name1 === name2

    const sentence = `the result of both words ${namesArray[0]} and ${namesArray[1]} being an anagram are : ${result} `

    fs.writeFile(
      outFile, sentence, 'utf8', (error) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(result)
      })
  })
}

// exporting our functions
module.exports = annagrams
