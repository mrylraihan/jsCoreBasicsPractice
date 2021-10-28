const FS = require('fs')

const heyFamily = function (inFile) {
	FS.readFile(inFile, { encoding: 'utf-8' }, (error, list) => {
		if (error) console.error(error)

		// turning the list into an array of each line
		const lines = list.split(' ')

		const names = lines.filter((line) => line != '')

		const sortedNames = names.sort()

		sortedNames.forEach((familyMember) => {
			console.log(`Hey ${familyMember} today is a good day!`)
		})
	})
}

module.exports = heyFamily
