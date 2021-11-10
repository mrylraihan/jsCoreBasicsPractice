const fs = require('fs')
const capitalize = require('capitalize')

const copyText = function (inFile, outFile) {
    // read file first 
    fs.readFile(inFile, 'utf8', (error, data)=>{
        if(error)console.error(error.stack);
        data = capitalize(data)

        // pass in our data to a new file that we are writing
        fs.writeFile(outFile, data, 'utf8', (error) => {
					if (error) console.error(error)
					console.log(data)
				})
    })
}

module.exports = copyText