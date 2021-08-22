const names = ['wallie', 'mike', 'Ryan', 'Amel', "abby", 3, 2];
console.log(names);//["wallie", "mike", "Ryan", "Amel", "abby"]
names.sort();
console.log(names);//["Amel", "Ryan", "abby", "mike", "wallie"]

name = "WAYEL";
name= name.toLowerCase();
console.log(name);
// the way it sorts first is the numbers, then capital letters,and finally lower case 

//in this part im creating another array and iterating through the old one and lowercaseing everything
//then adding it to the new one and sort that one 
const namesSorted= [];
for (let n of names) {
    if (typeof n =="string") {
         n = n.toLowerCase();
    }
    namesSorted.push(n);
}
namesSorted.sort();
console.log(namesSorted);


//sorting numbers

const numbers = [2,12,3,5,1,28,18];
numbers.sort();
console.log(numbers);//[1, 12, 18, 2, 28, 3, 5] we get this sort because it is converted to string then used the utfcode
// the way to fix this is adding one more step 

function compareFunction (a, b){
    //1. < 0 ... a
    //2.0 ... nothing will change
    //3. > 0 ... b comes first
    return a - b ;
    //if we want it in decending order by reversing b - a
}
// now all we need to do is add it as a callback function into our sort method

numbers.sort(compareFunction);
console.log(numbers);//[1, 2, 3, 5, 12, 18, 28]


// sorting objects 

const products = [
    {
        name:'Laptop', 
        price: 1000
    },
    {
        name:'Desktop', 
        price: 2000
    }, 
    {
        name:'hermanmiller Chair', 
        price: 500
    }
]

function compareObjects (a, b){
    return a.price - b.price;
}

products.sort(compareObjects);
console.log(products);//[{500}, {1000}, {2000}]


