'use strict'

const heyFamily = require('../lib/readTest')


const inFile = process.argv[2]

if (!inFile) {
	throw new Error('Script requires more arguments, an input file')
}
// node bin/writeTest.js data/writeTest.txt

heyFamily(inFile)
