//find and findindex
//this is a way to locate objects that dont have a
//reference type in our arrays 


const personalData = [{name:'wallie'},{name:'manny'}];

console.log(personalData);//(2) [{…}, {…}]
//index of is better for primitives 
console.log(personalData.indexOf({name:'manny'}));//-1
//this is because the index of can locate the object
// 1st is the single object of the array, index of the ele, the array
const manny = personalData.find((person, index, persons)=>{
    return person.name === 'manny';
});
//find returns the same object in the array, not a copy
//so if you modify the returned element if will reflect in the array
console.log(manny);//{name:'manny'} //returns the matching element

manny.age = 23;

console.log(manny);//{name: 'manny', age: 23}

console.log(personalData);;//(2)[{ name: 'wallie'}, { name: 'manny', age: 23 }];

manny.name = 'Manuel';

console.log(personalData);//(2)[{ name: 'wallie'}, { name: 'Manuel', age: 23 }];

// this is because we are working with the same reference value 


//FindIndex

const mannyIndex = personalData.findIndex((p,indx,persons)=>{
 return p.name === "Manuel";
});
//this return the match index of the object
console.log(mannyIndex);//1
