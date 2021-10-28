const copyText = require('../lib/copyText.js')

const inFile = process.argv[2];
const outFile = process.argv[3];

if (!inFile || !outFile) {
	throw new Error('Script requires more arguments, an input file')
}

//  node bin/copyText.js data/readTest.txt data/copyTest1.txt

copyText(inFile, outFile)
