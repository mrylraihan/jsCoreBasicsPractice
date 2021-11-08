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

const testPromise = async (str)=>{
    let word1
    try{
        word1 = await callBackPromise(str)
    }catch(error){
        console.log(error);
    }
    console.log(word1);
}

// testing the async await try catch
testPromise('hello')

// testing promises .then and catch
callBackPromise('another Word')
.then(str=> str+= '!')
.then(str=>console.log(str))
.catch(error=>console.log(error))
