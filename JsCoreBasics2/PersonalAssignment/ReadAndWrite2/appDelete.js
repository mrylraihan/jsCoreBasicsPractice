const fs = require('fs')

// unlink is like delete
fs.unlink('data/cal1.js',(e)=>{
    if(e)console.log(e);
    console.log('Deleted');
})