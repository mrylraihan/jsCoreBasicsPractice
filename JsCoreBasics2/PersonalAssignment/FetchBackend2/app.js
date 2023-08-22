fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(console.log)
.catch(console.error)

