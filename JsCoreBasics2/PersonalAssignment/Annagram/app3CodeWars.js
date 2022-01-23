function disemvowel(str) {
  const word = str.split('')
  const newWord = []
  word.forEach(ele => {
      if (ele !== 'a' && ele !== 'e' && ele !== 'i'  && ele !== 'u') {
          newWord.push(ele)
    }
  });
  str = newWord.join('')
  return str
}

const test = disemvowel("This website is for losers LOL!")

console.log(test);


function disemvowel2(str) {
    return str.replace(/[aeiou]/ig, '');
}

const test2 = disemvowel2("This website is for losers LOL!")

console.log(test2);

const test3 = '455636'
function maskify(cc) {
    const newArray = cc.split('')
    if (newArray.length > 4) {
        console.log(true);
        
        newArray.forEach(c=>{
            let count = newArray.indexOf(c)
            if(count<newArray.length-4){
                newArray.splice(count,1, '#')
            }
        })
    }
    cc = newArray.join('')
    return cc

}

const test4 = maskify(test3)
console.log(test4);