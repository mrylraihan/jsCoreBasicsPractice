

function showMeAWord(printF, word) {
    printF(word)
}

const wordLogger = (word)=>{
    const promise = new Promise((resolve, reject)=>{
        showMeAWord(()=>{
             if (!word)reject('word is undefined or empty')
            resolve(word)
        },word )
    });
    return promise
}
const test = 'test'
function testPromise(a) {
    wordLogger(a).then(data=>{
        console.log(data += ' more words');
        return data;
    }).then(data =>console.log(data+ ' and again!'))
}

testPromise(test)
