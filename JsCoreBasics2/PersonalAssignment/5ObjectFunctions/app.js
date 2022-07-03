
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.It returns the modified target object.

const person = {
    name:'Wallie'
}
console.log(person); //{ name: 'Wallie' }
Object.assign(person, { name: 'Wayel' });//{name: 'Wayel'}

console.log(person);

person2 = Object.assign(person, { name: 'Mike' })
//here we see object assign changing the targeted object person and copying it to person2
console.log(person);//{ name: 'Mike' }
console.log(person2);//{name: 'Mike'}

//now lets see if we change peron back to its original if it will reflect on person2

Object.assign(person, {name:'Wallie'})

console.log(person);//{name: 'Wallie'}
console.log(person2);//{name:'Wallie}
//now we see if they will point to the same reference regardless if the object gets modified its still pointing to the same reference

person2.name = 'Susan'
console.log(person);//{name: 'Susan'}
console.log(person2);//{name:'Susan'}
//this is still pointing to the same reference object


//now a better way to do this is 
const person3 = Object.assign({}, person,{name:'nike'})// by adding the empty object as the first parameter it will basically copy the previous object and override the previous values
console.log(person);//{name: 'Susan'}
console.log(person3);//{name: 'nike'}

//now lets say you dont want the same reference pointer 