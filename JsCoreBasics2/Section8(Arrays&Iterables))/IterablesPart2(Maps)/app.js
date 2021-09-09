//Maps
const person1 = { name: 'wallie' }
const person2 = { name: 'heshow' }

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]])

personData.set(person2, [{ date: 'two weeks ago', price: 100 }])

console.log(personData)
console.log(personData.get(person1))
console.log(personData.get(person2))

//how to log each Key/Value pair
for (const entry of personData.entries()) {
	console.log(entry)
}

//how to log both key and value
for (const [key, values] of personData.entries()) {
	console.log(key)
	console.log(values)
}

//how to log just the keys
for (const key of personData.keys()) {
	console.log(key)
}

//how to log just the value
for (const value of personData.values()) {
	console.log(value)
}

//you can use most if the same method for example
//if we want to see how many key value pairs we have 

console.log(personData.size);//2 this is telling us we have 2 key value pairs in our map 
