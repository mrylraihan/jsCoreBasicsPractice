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
