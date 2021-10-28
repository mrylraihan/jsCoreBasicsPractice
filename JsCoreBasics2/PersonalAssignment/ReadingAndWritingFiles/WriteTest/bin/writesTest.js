const writeTest = require('../lib/writesTest')

const outFile = process.argv[2]

if (!outFile) {
	throw new Error('Script requires more arguments, an input file')
}
// node bin/writeTest.js data/writeTest.txt

writeTest(outFile)
