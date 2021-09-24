class MyCounter{
    constructor(){
        this.count = 20;
    }
}
const count1 = new MyCounter();
console.log(count1.count);//20 

//private prop syntax is #then propName 
class MyPrivateCount{
    #count = 30// private prop
    get count(){//getter
        return this.#count
    }
    set count(val){//setter
    return this.#count = val
}
}

const count2 = new MyPrivateCount();
// console.log(count2.#count);//undefined
console.log(count2.count);//30 accessed by the getter method

class ChildCounter extends MyPrivateCount{
name = 'wallie'
//     constructor(){
//     super();
//     this.name = 'wallie'; this is is your passing a new param in your constructor
// }
}

const childCount1 = new ChildCounter();
console.log('child count1',childCount1.count);//30 
//private variables get extended as well
console.log(childCount1.name);//wallie
console.log(childCount1);//ChildCounter {name: 'wallie', #count: 30}
console.log(count2.name);//undefined
//parents dont have access to child props