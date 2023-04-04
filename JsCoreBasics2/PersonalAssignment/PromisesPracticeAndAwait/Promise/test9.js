// const printWord = (word)=> word

// const showMeWord = (cb, str)=>{
//    return cb(str)
// }

// const wordLogger = (cb, pcb, str)=>{
//     return new Promise ((resolve, reject)=>{
//         if(str){
//             resolve(cb(pcb,str))
//         }else{
//             reject('sorry was rejected')
//         }
//     })
// }

// wordLogger(showMeWord, printWord,'test')
// .then(console.log)
// .catch(console.error)

// console.log('hi')

const printWord = (word) => word

const showMeWord = (cb, str) => {
    return cb(str)
}

const wordLogger = (pcb, str) => {
    return new Promise((resolve, reject) => {
        if (str) {
            resolve(showMeWord(pcb, str))
        } else {
            reject('sorry was rejected')
        }
    })
}

wordLogger( printWord, 'test')
    .then(console.log)
    .catch(console.error)

console.log('hi')