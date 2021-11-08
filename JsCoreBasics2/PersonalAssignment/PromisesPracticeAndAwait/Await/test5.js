const callBack = (cb, str)=>{
    cb(str)
}


const callBackPromise = str =>{
    return new Promise((pass, fail)=>{
        callBack(()=>{
            if (!str)fail('this isnt a string or is undefined')
            pass(str)
        }, str)
    })
}

const testAsync = async (str)=>{
    let word1
    try{
        word1 = await callBackPromise(str)
    }catch(error){
        console.log(error);
    }
    console.log(word1);
}

// testing the async await try catch
testAsync('hello')

// testing promises .then and catch
callBackPromise('another Word')
.then(str=> str+= '!')
.then(str=>console.log(str))
.catch(error=>console.log(error))
// try another one after you reviewed section 17 again


const testPromise = str =>{
    let word;
    callBackPromise(str)
    .then(str=>{
        word = str;
        return str
    })
    .catch(error=>{
        console.log(error);
        return 'Got caught in the Error'
    })
    .then(str=> str+="!")
    .then(console.log)
}

testPromise()