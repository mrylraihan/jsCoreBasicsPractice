const person1 ={
    fName: 'Wayel', 
    lName: 'Raihan'
};

const printFirst = function(a){
    return this.fName + " "+ a;
}

const printLast = function(){
    return this.lName;
}


function printfull(f, l){
    const first = f();
    const last = l();
    return `${first} ${last}`;
}
                                    //.bind(object,1parm , 2parm)
const fullName= printfull(printFirst.bind(person1, 'ali'),printLast.bind(person1))

console.log(fullName);