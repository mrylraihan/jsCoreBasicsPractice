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
// Testing async functions outputs 
test('Wallie', 'Raihan', fullName);//prints last

const test2 = fullName("W", "R")

console.log(test2);//prints first 

console.log("hey outside of test!"); //prints second 

function testPromise(p1, p2, fName) {
	return new Promise((resolve, reject)=>{
		if (!p1 || !p2) reject(console.error)
		resolve(fName(p1,p2))
	})
}

testPromise().then(data=>console.log(data)).catch(()=>{
	console.error
	return 'tank this instead'
})
.then(data=>console.log(data))
