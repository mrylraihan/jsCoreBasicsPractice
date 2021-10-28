const turnToSentence = require('../lib/putInToSentence')


const inFile = process.argv[2]
const outFile = process.argv[3]


if (!inFile || !outFile) {
	throw new Error('Script requires more arguments, an input file')
}

turnToSentence(inFile, outFile)