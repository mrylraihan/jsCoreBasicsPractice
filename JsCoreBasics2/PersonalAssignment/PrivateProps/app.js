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

for (const key in count1) {
	console.log(key + ' ' + count1[key]) //count 20
}
for (const key in count2) {
	console.log(key + ' ' + count1[key]) //nothing will print out because the property is private
}
