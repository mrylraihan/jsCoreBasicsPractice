'use strict'

const annagrams = require('../lib/annagram.js')

const inFile = process.argv[2]
const outFile = process.argv[3]

if (!inFile || !outFile) {
  throw new Error('Script requires more arguments, an input file')
}
//  node bin/annagram.js data/annagramtest.txt data/anngramResults.txt
annagrams(inFile, outFile)
