//Array Map()
//1.basics , on each element in your array it will run a function 
// the first parameter is the ele in the array
//the second parameter is the index 
//the third parameter is the array that your calling the map function on 
const existingArray = ['decode', 'dom', 'js'];
const newArray = existingArray.map(function (value, idx, array){
    console.log(idx);// idx is the index
    console.log(array);// this points to the original array thats calling map().
    return idx+" "+ value +'!';// changes each element in the array for the new array 
});

console.log(newArray);//(3) ['decode!', 'dom!', 'js!']

//adding an object 

const existingArray2 = ['decode', 'dom', 'js'];
const newArray2 = existingArray2.map(function (value, idx, array){
    console.log(idx);// idx is the index
    console.log(array);// this points to the original array thats calling map().
    return idx+" "+ value +'! '+this.name;// changes each element in the array for the new array 
},{
    name:'wallie'// we added an object as a parameter to the map function 
});

console.log(newArray2);//(3) ['decode!', 'dom!', 'js!']