//Split and Join 
//split allows you to seperate you string in to an new array 
// the parameter it takes is what you want it to seperate by 

const str = "New york is the best place"
const tranformString = str.split(' ');// it will seperate by white space 
console.log(tranformString);//['New', 'york', 'is', 'the', 'best', 'place']

//another one 

const data = 'New York;2:00pm;12/23/2021;30';
const dataTransformed = data.split(';');
dataTransformed[3]= +dataTransformed[3];//by adding a + infront converts the string to a number
console.log(dataTransformed);//(3) ['New York ', '2:00pm', '12/23/2021']


//join allows you to convert an array into a string, it allows you to
//merge an array to a string 
// the parameter it takes is what you want to add them by

const nameFrag = ['Wallie', 'Raihan'];

const fullName = nameFrag.join(' ');
console.log(fullName);//Wallie Raihan

// lets try numbers 

const numlist = [1,2,3,4,5];
let newNum = numlist.join('');//the plus converts to a number with out 
//it it would be a string 
console.log(newNum);//12345 with the plus '12345' with out the plus
//now to convert it to a real number we can add the plus + before the numlist
newNum = + newNum;
console.log(newNum);//converted to a real number 