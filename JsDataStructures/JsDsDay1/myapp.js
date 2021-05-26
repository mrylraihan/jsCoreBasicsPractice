function addUp(n){
   let sum = 0;
    for(let i = 1;i <=n ;i++){
        sum += i;
    }
    return sum;
}

console.log(addUp(100));
//==================================>
//3 steps
function addUp2(n){
return n * (n+1)/2;
}

console.log(addUp2(100));

//==================================>
// function countUpAndown(n){
//     console.log('Going up!');
//     for(let i = 0; i<n ; i++){
//         console.log(i);
//     }
//     console.log('At the top!\nGoiong Down...');
//     for(let j = n - 1; j >= 0; j--){
//         console.log(j);
//     }
//     console.log('back down. Bye');
// }

// countUpAndown(10);


// ==============================>
//call back functions 

const addNames = (resultName,...names)=>{
    let fullName= '';
    for (const name of names){
        fullName+= ' '+name;
    }
    resultName(fullName);
};

const  showFullName = (result)=>{
alert('Your full name is : '+result);
};

addNames(showFullName,'wallie','ahkmadinagar','Raihan');

//======> 
//binding and call back function 
const pokeDex = (showPokemon,...pokeRoster)=>{
    let pokemonList= '';
    for(const pokemon of pokeRoster){
        pokemonList+= ' '+pokemon;
    }
    showPokemon(pokemonList);
};

const showPokemonList = (message, poke)=>{
    alert(message + poke);
}

pokeDex(showPokemonList.bind(this,'all you pokemon are: '), 'Picachu', 'Charmandar');

// ==============================>
//binding functions 

let c1 = {
    x:5, 
    y:10
};

let c2 = {
    x:75, 
    y:235
};

function printCoordinates(){
    console.log(this.x + ', ' + this.y);
}

let c1_func = printCoordinates.bind(c1);

let c2_func = printCoordinates.bind(c2);

c1_func();
c2_func();


let person = {
    name1: 'wallie',
    age: 30
}
let person1 = {
    name1: 'wally',
    age: 30
}

function printPerson(){
    console.log(this);
}

let whichPerson = printPerson.bind(person1);

whichPerson();


let Garrett = {
    nickname: 'tarzan', 
    qualities : ['loves farting', 'eats hotdogs']
}


function whosGarrett(){
    console.log(this.qualities[0]);
}

let printG = whosGarrett.bind(Garrett);

printG();