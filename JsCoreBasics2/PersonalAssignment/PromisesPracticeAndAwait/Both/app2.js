const fullName = (fName, lName)=>{
 return fName+ " "+lName
}

async function testFullName(n1, n2, fNFunction) {
    let fn;
    try{
        fn = await fNFunction(n1, n2)
    }catch(error){
        console.log(error);
    }
    return fn;
}

let test = "pending result"

testFullName('Wayel', 'Raihan', fullName)
.then(data =>{
    test = data
    console.log(test);
})
.catch(console.error)

console.log("before callback")

console.log(test);

console.log("after callback")