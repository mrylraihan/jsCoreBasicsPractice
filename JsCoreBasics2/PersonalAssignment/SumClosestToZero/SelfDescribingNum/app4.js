
function selfDescribingNumbers(num){
    let numStr = ''+num;
    console.log(numStr, 'this is the word converted to string');
    let length = numStr.length; //1235
    console.log(length, 'this is the length');
    let count = 0;
    for (let i = 0; i < length; i++) {
        console.log(num);
        if (+numStr[i] === i) {
            count++;
        }
    }
    console.log(count)
}
// selfDescribingNumbers(012345)

function selfDescribingNumbers2(num){
    let numStr = ''+num;
    
    let count = 0;
    for (let i = 0; i < length; i++) {
        console.log(num);
        if (numStr[i] === i) {
            count++;
        }
    }
    console.log(count)
}
// selfDescribingNumbers2(012345)

const numwords = '010345'

for (let index = 0; index <= numwords.length; index++) {
    if(+numwords[index] === index){
        console.log(numwords[index])
    }
    
}