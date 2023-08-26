const obj1 = {name:"Wallie"}
const obj2 = {name:"Wallie"}

const isTrue = JSON.stringify(obj1) === JSON.stringify(obj2)
// console.log(isTrue)

const comparObj = (a, b)=>{
   const obj1Keys = Object.keys(a)//['name']
   const obj2Keys = Object.keys(b)//['name']
 
   if(obj1Keys.length !== obj2Keys.length){
    return false
   }
   for (let key in a){
// console.log(a[key])
      if (a[key] !== b[key]) {
         return false
      }

   }
   return true
}

const isTrue1 = comparObj(obj1,obj2)
// console.log(isTrue1)
// Comparing arrays 
// const arr1 = ["Cat"]
// const arr2 = ["Cat"]

// console.log()


// https://www.youtube.com/watch?v=GgfIby_T8yg


const object1 = {name:"Wallie", age:30}
const object2 = {name:"Wallie", age:30}

const compareObjects = (obj1, obj2)=>{
   const obj1Keys = Object.keys(obj1)
   const obj2Keys = Object.keys(obj2)
   if(obj1Keys.length === obj2Keys.length){
      for (let key in obj1) {
         if(obj1[key] !== obj2[key]){
            return false
         }
      }
      return true
   }else{
      return false
   }
   // console.log(obj1Keys)
   // console.log(obj2Keys)
}

let result = compareObjects(object1, object2)
console.log(result)