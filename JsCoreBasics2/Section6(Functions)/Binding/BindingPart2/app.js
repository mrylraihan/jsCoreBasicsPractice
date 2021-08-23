//Binding 
//What ever you bind to your function will always be first and 
//what ever u pass in the callback automatically be appended meaning after
function talking(sN, name){
    sN( name)// this is called with one parameter
}

function sayName(a, b){//this function has two parameters
    console.log('hey ima '+ b + ' and ima a '+ a);
}

talking(sayName.bind(this,'developer'), "wallie");//the bind is allowing us to configure the
//first parameter automatically
//this is what is logged :hey ima wallie and ima a developer 
//developer was binded




function catTypeAndColor(catDeets, catColor, catType){
    catDeets(catColor, catType);
}

function catDetails (sex, catColor, catType){
    console.log('the cats color is '+catColor+ ' and ' +sex + ' is a ' +catType);
}

catTypeAndColor(catDetails.bind(this, 'he'), 'Orange', 'Persian Cat');
//the cats color is Orange and he is a Persian Cat
catTypeAndColor(catDetails.bind(this, 'she'), 'black', 'Maine Coon');
//the cats color is black and she is a Maine Coon


const fname = 'Wayel';
const lname = 'Raihan';
const mR = 'Mr.';
const mS = 'Mrs';

const sayFullname = (combinName, fn, ln)=>combinName(fn, ln);

const fullName =(title, fName, lName)=> console.log(`${title} ${fName} ${lName}`);

sayFullname(fullName.bind(this, mR),fname, lname)
//Mr. Wayel Raihan