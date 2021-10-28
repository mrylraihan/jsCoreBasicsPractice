const fs = require('fs')

const turnToSentence = function (inFile,outFile) {
    fs.readFile(inFile, 'utf8', (error, data)=>{
			if (error) console.error(error.stack)

			const namesList = data.split(' ')

			const cleanNamesList = namesList.filter((name) => name != '')
			const sortedNames = cleanNamesList.sort() 
			let namesWithText = []
			sortedNames.forEach((name) =>
				namesWithText.push(`Hey ${name} today is a good day!`)
			)
			namesWithText = namesWithText.join('\n')

			fs.writeFile(outFile, namesWithText, 'utf8', (error) => {
				if (error) console.error(error)
				console.log(namesWithText)
			})
		})
}

module.exports = turnToSentence