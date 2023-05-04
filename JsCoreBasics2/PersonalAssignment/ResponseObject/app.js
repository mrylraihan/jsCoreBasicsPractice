fetch('https://api.kanye.rest')
.then(res=>res.json())
.then(result=>{
    console.log(result)
    const res = new Response({quote:'test'})
    console.log(res.quote)
})
.catch(console.error)