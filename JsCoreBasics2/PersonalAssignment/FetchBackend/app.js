const request = require('request')
let quote = ''
request({
    url:'https://api.kanye.rest',
    json:true,
},(err, res, body)=>{
    quote = body.quote
    console.log(body.quote)
})
//with out this quote will be empty because of the request above wouldnt have been fulfilled yet so we wrap it in a setTimeout to give the request time to return the quote from the api
setTimeout(()=>{
    console.log(quote)
},1000)





// https://www.youtube.com/watch?v=YCPiIrkkdUg&t=115s