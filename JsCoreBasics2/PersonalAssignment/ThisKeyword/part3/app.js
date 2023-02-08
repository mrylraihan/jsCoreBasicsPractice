const person = {
    name:'Wallie',
    sayName: function(){
        console.log(this.name)
    }
}

person.sayName()//'Wallie'


const pet = {
    name:'Fluffy'
}

const sayWallie = person.sayName// this will extract the method sayName
//with out having the this keyword point to its self 
sayWallie.call(pet)// now we are bind this to the pet object 

//testing arrow function
const testMethods = {
    name:'Test',
    firstTest(){
        console.log(this.name)
    },
    secondTest:()=>console.log(this.name)
}

//here we are testing arrow function in object declarations to see if they point to its self
testMethods.firstTest()//'Test' 
testMethods.secondTest()//undefined
testMethods.secondTest.call(testMethods)//undefined 
const testingBind = testMethods.secondTest.bind(testMethods)//undefined 
testingBind()//undefined

//trying arrow functions with classes 
console.log("-----testing classes")
class TestingMethods {
    static staticName='Static Variable'
     name='Testing Class'
    constructor(){
    }
    logNameTest(){
        console.log(this.name)
    }
    logNameTest2 = ()=>console.log(this.name)
    static logStaticVariable(){
        console.log(this.staticName)
    }
}
const test1 = new TestingMethods()
test1.logNameTest()//Testing Class
test1.logNameTest2()//Testing Class
// test1.logStaticVariable()

TestingMethods.logStaticVariable()//Static Variable
console.log(TestingMethods.staticName)//Static Variable


const obj = {
    returnWhat(){
        return {
            name:'Wallie'
        }
    },
    returnWhat2(){
        return 
        {
            name: 'Mallie'
        }
    }
}

console.log(obj.returnWhat())//{ name: 'Wallie' }
console.log(obj.returnWhat2())//undefined
