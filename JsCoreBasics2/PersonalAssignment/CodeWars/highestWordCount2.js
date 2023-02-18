let string = 'hey hey hey look who it is, it is Ronnie, Ronnie, hey hey Ronnie Ronnie, Monkey monkey monkey MonKey mOnKey'

const countHighestWord = (str) =>{
    let newString = string.replaceAll(',', '').toLowerCase().trim().split(' ')
    let map = {}

    newString.forEach(element => {
        //if key is not already a key in the object then assign it a value of 1, else just add 1 to the value of the key
        if(!map[element]){
            map[element] = 1
        }else{
            map[element]++
        }
    });

    // for (const key of newString) {
    //     if(!map[key]){
    //         map[key] = 1
    //     }else{
    //         map[key]++
    //     }
    // }
    tempArr = []
    //we loop through the object assigning each property as its own object in the array
    for (const key in map) {
       tempArr.push({[key]:map[key]})
    }

    let highestArr = tempArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]).splice(0,3)
    console.log(highestArr)//before keys are extracted from each object in the array 
    // [{ hey: 5 }, { monkey: 5 }, { ronnie: 4 }]
    return highestArr.map(ele=>Object.keys(ele)[0])
    // ['hey', 'monkey', 'ronnie']
}

const topThree = countHighestWord(string)

console.log(topThree)
