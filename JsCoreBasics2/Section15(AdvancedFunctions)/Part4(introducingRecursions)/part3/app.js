// Recursion

const myself = {
    name: 'Wallie', 
    friends: [
        {name:'Heshow', 
        friends:[
            {name: 'Chris'},
            {name: 'Zen'}
        ]},
        {name:'Sahi',
         friends:[
             {name:'Sadat',
              friends:[
                  {name:'Rasha'}
              ]}
            ]}, 
        {name:'Zuha'}
    ]
}

function printFriends(person) {
    const collectedNames = [];
    if(!person.friends){
        return [];
    }
    for (const friend of person.friends) {
        collectedNames.push(friend.name)
        collectedNames.push(...printFriends(friend))
    }
    return collectedNames;
}

console.log(printFriends(myself));



// Factorial 


function factorialsRecursive(n) {
    if(n === 1){
        return 1
    }
    return n * factorialsRecursive(n - 1)
}

console.log(factorialsRecursive(8))

// 8 * 8 * 8 * 8 * 8 * 8 * 8 * 8 
function regularFactorials(n) {
    let result = 1
    for (let i = n; i > 0;i--) {
      result *= i
    }
    return result
}

console.log(regularFactorials(8))