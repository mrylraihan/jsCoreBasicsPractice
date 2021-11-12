const fullName = (name1, name2)=>{
    return `${name1} ${name2}`
}


async function test(p1, p2, fName) {
    let fullName;
    try{
        fullName = await fName(p1, p2);
    }catch(error){
        console.log(error);
    }
    console.log(fullName);
}

test('Wallie', 'Raihan', fullName);//prints last

const test2 = fullName("W", "R")

console.log(test2);//prints first 

console.log("hey outside of test!"); //prints second 