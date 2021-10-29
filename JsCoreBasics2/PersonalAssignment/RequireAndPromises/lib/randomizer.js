'use strict'

const fs = require('fs')

const promiseReadFile = require('./promisedReadFile')
const promiseWriteFile = require('./promisedWriteFile')
const shuffle = require('knuth-shuffle').knuthShuffle

const promiseRandomizer = function (inFile, outFile) {
	promiseReadFile(inFile, { encoding: 'utf8' })
		.then((data) => {
			let dataArray = data.split('\n')

			// remove blank line at the end of the file
			dataArray = dataArray.filter((line) => line.length > 0)

			// randomize the array
			const randomLines = shuffle(dataArray.slice(0))
			return randomLines
		})
		.then((randomLines) =>
			promiseWriteFile(outFile, randomLines.join('\n'), { flag: 'w' })
		)
		.then(console.log)
		.catch(console.log)
}

module.exports = promiseRandomizer
