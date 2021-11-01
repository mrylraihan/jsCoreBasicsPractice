// then and catch 


function sumUp(num1, num2) {
    return num1.age+num2.age
}

const testingThen = (object1, object2)=>{
    sumUp(object1, object2)
    .then(total=>console.log(total))
}


module.exports = testingThen