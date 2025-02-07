const obj = {name:"Wallie", age:33}

console.log("name" in obj)

const arr = ["apple", "banana", "orange"]

console.log(1 in arr)

if(3 in arr){
    console.log(arr[3])
}else{
    console.log("No such index")
}