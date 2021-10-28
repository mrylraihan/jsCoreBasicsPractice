const fs = require('fs')

fs.appendFile('data/data.js', '\nconsole.log("more Data")', e => {
	if(e)console.log(e)
	console.log('data appended')
})