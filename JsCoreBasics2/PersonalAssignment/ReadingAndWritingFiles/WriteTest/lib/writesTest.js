const fs = require('fs')

console.log('before new file is created and written in!')

const name = 'heshoww'
const writeTest = function (outFile) {
	fs.writeFile(outFile, name, 'utf8', (e) => {
		if (e) throw e
		console.log('file is written')
	})

	console.log('after file is written')
}

module.exports = writeTest
