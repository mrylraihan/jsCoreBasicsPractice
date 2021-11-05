function showMeAWord(printF, word) {
    return printF(word)
}

const wordLogger = (word)=>{
    return new Promise((pass, fail)=>{
        showMeAWord(()=>{
            if (!word)fail('this isnt a word');
            pass(word);  
            
        }, word);
    });
}

const testPromise = async (word)=>{
    let testWord;
    try{
        testWord = await wordLogger(word);
        testWord += " from test Promise"
    }catch(error){
        console.log(error);
    }
    console.log(testWord);
}

testPromise('Hisham');

console.log('show me first because they are all async in the browser');