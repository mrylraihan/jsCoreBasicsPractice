const prices = [1,2,3,4,5,6];
const tax = 0.19;
const adjustedPrice = [];
//for of loop
for(const price of prices){
    adjustedPrice.push(price* (1+ tax));
}


const adjustedPrice2= prices.map((price,idx)=>{
   const priceObj = {index: idx , taxAdjPrice: price * ( 1 + tax)};
   return priceObj;
});

console.log(adjustedPrice, adjustedPrice2);

const keyboards = ['blues', 'browns','reds'];

const keyboardList = keyboards.map((switches)=>{
    const colorSwitches = {switches:switches};
    return colorSwitches;
});
console.log(keyboardList);
//how to sort and used .sort()
const sortedPrices = prices.sort((a,b)=> a-b);
//if you want to reverse with out using the .reverse() u just need to 
//invert your logic from a-b to b-a :)

console.log(sortedPrices);


//how to use .reverse();
const colorList = ['black','white','yellow','green'];


const cList = colorList.map(color=>{
    const colorN = { color: color};
    return colorN;
});
console.log(colorList, cList.reverse());


//filter 

function lessthan(num){
   return num <7;
}

const price = [2.09, 2.99,4,6,90.0];
const filterdPrice = price.filter(prices=> prices < 85);
console.log(filterdPrice)

const price2 = [2,4,5,6,7,8];
const filterPrices = price2.filter(lessthan);
console.log(filterPrices);


//different ways to use reduce and why its good
// let sum = 0;
// price2.forEach((price)=> sum+=price);
// console.log('hey'+sum);

// const sum = price2.reduce((preValue, curValue)=>{
//     return preValue+curValue
// },0);
// console.log(`hey ${sum}`);

const sum = price2.reduce((preValue, curValue)=> preValue+curValue,0);
console.log(sum);

//.split();

const data = 'newyork brookyln wallie 99';
const transformData = data.split(' ');
//convert the string in teh array to an int
transformData[3] = +transformData[3];
console.log(transformData);

const nameFragements = ['Korakot', 'Sansei'];
const fullTitle = nameFragements.join();
console.log(fullTitle);


const str = 'the queick brown fox jumps ovber the lazy dog.'
console.log(str.split());

const copyNameFragements = [...nameFragements];
nameFragements.unshift('Mr.');
console.log(nameFragements, copyNameFragements);

console.log(Math.min(...prices));
console.log(...nameFragements);

const persons = [{name:'Wallie',age:29},{name:'Shajan', age:29}];
const copiedPersons = [...persons];

persons.push({name:'moe',age:31});
persons[0].age = 30;
persons[1].name = persons[1].name+' Aka Wallies Wife'
console.log(persons, copiedPersons);

const personList = [{name:'Wallie',age:29, hobbies:[]},{name:'Shajan', age:29, hobbies:[]}];
const copiedPList = personList.map(persons=>({name:persons.name,
age : persons.age, hobbies:[...persons.hobbies]}));

personList.push({name:'mustafa',age:24, hobbies:[]});
personList[0].age = 30;
console.log(personList, copiedPList);


const nameData = [{fName:'wayel',lName:'raihan'}];
const copyNameData = nameData.map(name=>({fName:name.fName, lName:name.lName}));;
nameData.push('ali');
nameData.push('nageeb');
nameData[0].fName = 'Wallie';
console.log(nameData, copyNameData)

const [fullName, ...otherNames] = nameData;
const middleName = otherNames[0];
const middleName2 = otherNames[1];
console.log(fullName, otherNames, middleName, middleName2);
console.log(otherNames);

function sumAndMultiply(a,b){
    return [a+b, a*b,a/b];
}

const [sum1, multiply,division = 'no division'] = sumAndMultiply(2,3);
console.log(sum1);
console.log(multiply);
console.log(division);

const alaphabet = ['A', 'B', 'C','D','E'];
const nums = [1,2,3,4,5];

const b = alaphabet[1]
const [a,,c,...restOfTheArray] = alaphabet
const newArray = [...alaphabet, ...nums];
const newArray1 = alaphabet.concat(...nums)
console.log(newArray);
console.log(a);
console.log(b);
console.log(c);
console.log(restOfTheArray);
console.log('///////////////');
console.log(newArray1);


const personOne = {
    name:'kyle', 
    age:24,
    address:{
        city:'Brooklyn',
        State:'New York'
    }
};
const personTwo = {
    name:'Brian',
    age:32,
    favoriteFood:'Watermelon'
};

const {name:firstName, address:{city}} = personOne;
console.log(firstName);
console.log(city);
const personThree = {...personTwo, ...personOne};
console.log(personThree);


function printUser({name, age, favoriteFood = 'Watermelon'}){
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`);
}
console.log(personOne);


/// object destructuring


