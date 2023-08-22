const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.data)
.then(console.log)
.catch(console.error)