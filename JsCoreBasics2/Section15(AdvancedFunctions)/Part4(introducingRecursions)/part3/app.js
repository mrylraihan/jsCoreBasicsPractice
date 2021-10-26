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