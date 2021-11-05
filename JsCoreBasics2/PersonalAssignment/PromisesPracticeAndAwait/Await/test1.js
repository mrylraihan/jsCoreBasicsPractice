function showMeAWord(printF, word) {
    printF(word)
}

const promisedWordLogger = (word)=>{
    return new Promise((resolve, reject)=>{
        showMeAWord(()=>{
            if (!word)reject('word is undefined or empty')
            resolve(word)
        }, word)
    });
}

async function testPromise(a) {
    let wordResult
    try {
        wordResult = await promisedWordLogger(a)
    } catch (error) {
        console.log(error);
    }
    console.log(wordResult);
}

testPromise()
testPromise('Wallie')
console.log('hey dudes!');