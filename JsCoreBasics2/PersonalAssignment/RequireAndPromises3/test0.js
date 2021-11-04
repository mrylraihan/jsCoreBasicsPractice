function callBack(cbf, word='') {
    cbf(word)
}

function logSmeThing(cb, a) {
    cb(a);
}

const logPromise = a =>{
    const promise = new Promise((resolve, reject)=>{
        logSmeThing(()=>{
            if (!a) reject('empty param')
            resolve(a)
            console.log(a + "from lop Promise");
        }, a)
    })
    return promise
}

const wrappingPromise = (word)=>{
    const promise = new Promise((pass, fail)=>{
        callBack(()=>{
            if (!word) {
                fail('your param was empty')
            }else{
                pass(word)
            }
        }, word)
    })
    return promise
    
}
const word1= 'word1'
// function testPromise(word) {
//     wrappingPromise(word).then((stuff) => logPromise(stuff))             
//     console.log('hello in test Promise');
// }

//or

function testPromise(word) {
	let newWord
	wrappingPromise(word)
		.then((stuff) => {
			newWord = stuff
			return logPromise(stuff)
		})
		.then((data) => console.log(data, newWord))
        .catch(error=>console.log(error))
	console.log('hello in test Promise')
}


testPromise(word1)

wrappingPromise('word2')
	.then((data) => logPromise(data))
	.catch((error) => console.log(error))
console.log('hello outside everything');

// hello in test Promise //gets logged first because its invoked first in the testPromise 
// hello outside everything // then this get logged because its next in the stack while 
// both passes got pushed to the event que and are waiting for this
//passed
//passed