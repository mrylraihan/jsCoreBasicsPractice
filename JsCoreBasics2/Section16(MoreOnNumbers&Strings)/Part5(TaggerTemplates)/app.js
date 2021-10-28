// Tagged Templates

function taggedExample1(strings, productName, productPrice) {
	console.log(strings) //['This product ', ' is ', '.']
	console.log(productName) //JavaScript Course
	console.log(productPrice) //app.js:6 29.99
	return 'This product is on Sale'
}

const productName = 'JavaScript Course'
const productPrice = 29.99
// instead of passing in teh parameters within a () 
// we are using back tics 
// the nonDynamic data/the string surrounding the ${} will default to param1
// as an array each time the string is broken up
// the first data interpolation we see will be the second param 
// the second will fall under the last 
const returnEample1 = taggedExample1`This product ${productName} is ${productPrice}.`
console.log(returnEample1);//This product is on Sale


function taggedExample2(strings, productName, productPrice) {
	console.log(strings) //['This product ', ' is ', '.']
	console.log(productName) //JavaScript Course
	console.log(productPrice) //app.js:6 29.99
    let priceCategory = 'cheap';
    if(productPrice > 20){
        priceCategory = 'fair';
    }
	return `${strings[0]} ${productName} ${strings[1]} ${priceCategory} ${strings[2]}`;
}


const returnEample2 = taggedExample2`This product ${productName} is ${productPrice}.`
console.log(returnEample2);//This product  JavaScript Course  is  fair .


const name = 'Wallie'
const age = 30

function taggedExample3(words, name, age) {
	console.log(words) //['Hey im ', ' and im ', '.']
	console.log(name)//Wallie
	console.log(age)//29
	let isAge = ',i know im washed'
	if (age < 29) {
		isAge = ', i know im young'
	}
	return `${words[0]}${name}${words[1]}${age}${isAge}${words[2]}`
}

taggedExample3(1,2,3)
taggedExample3`hey dhkjshdjjhajskdhk`

const testTagged = taggedExample3`Hey im ${name} and im ${age}.`
console.log(testTagged);//Hey im Wallie and im 29, i know im young.


// template tags
const multiLineSting = `bear
monkey
cow`;

console.log(multiLineSting);

const nicerList = `Animals : ${multiLineSting.split('\n').join(', ')}`

console.log(nicerList);//Animals: bear, monkey, cow