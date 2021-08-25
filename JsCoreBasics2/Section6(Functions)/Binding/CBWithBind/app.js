const person1 ={
    fName: 'Wayel', 
    lName: 'Raihan'
};

const printFirst = function(){
    return this.fName;
}

const printLast = function(){
    return this.lName;
}


function printfull(f, l){
    const first = f();
    const last = l();
    return `${first} ${last}`;
}

const fullName= printfull(printFirst.bind(person1),printLast.bind(person1))

console.log(fullName);