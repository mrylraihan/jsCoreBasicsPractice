const string = 'hey hey hey look who it is, it is Ronnie, Ronnie , hey hey Ronnie Ronnie'

const highestWordCount = str =>{
    const arrW = str.toLowerCase().replaceAll(',', '').split(' ')

    console.log(arrW)
    countingWords = {}
    testArr = []

    arrW.forEach(element => {
        if(!testArr.includes(element)){
            testArr.push(element)
            countingWords[element] = 1
        }else{
            countingWords[element]++
        }
    });
    let justWithDubs=[]

    console.log(countingWords)
    for (const key in countingWords) {
        if(countingWords[key]!== 1)
              justWithDubs.push({[key]:countingWords[key]}) 
    }
    // for (let key of countingWords) {
    //   console.log(key, countingWords[key])
    // }

    justWithDubs.sort((a,b)=>Object.values(b)[0]-Object.values(a)[0])
    let lastArr = []
    justWithDubs.forEach((ele,idx)=>{
        if(lastArr.length>=3){

        }else{
            lastArr.push(ele)
        }
    })
    console.log(justWithDubs)
    console.log(lastArr)
}

// highestWordCount(string)
