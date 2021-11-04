

function showMeAWord(printF, word) {
    printF(word)
}

const wordLogger = (word)=>{
    const promise = new Promise((resolve, reject)=>{
        showMeAWord(()=>{
            if(word==="")reject("this is an empty string")
            resolve(word)
        },word )
    });
    return promise
}

function testPromise() {
    wordLogger('Word1').then(data=>{
        console.log(data += ' more words');
        return data;
    })
    .then(data =>console.log(data+ ' and again!'))
    .catch(error=>console.log(error))
}

testPromise()
