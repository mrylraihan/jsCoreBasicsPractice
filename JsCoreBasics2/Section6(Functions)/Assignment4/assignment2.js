//Task 1
const sayHello = name => console.log("hi "+name);

sayHello('Wallie');

//Task 2

const sayHello2 = (phrase, name) => console.log(phrase+" "+name);
const sayHello3 = () => console.log("hi Hard-Coded");
const sayHello4 = name => "hi "+name;

sayHello2('HI', "Wallie");
sayHello3();
console.log(sayHello4('Wallie'));

//Task 3

const sayHello5 = (phrasePrint, phrase = 'hi ') => phrasePrint(phrase);

const phrasePrint = (a)=>console.log(a + "Wallie");

sayHello5(phrasePrint);


//Task 4

function checkInput(cb, ...strs){
let hasEmptyText = false;

for (const str of strs) {
    if (!str) {
        hasEmptyText = true;
        console.log('theres an empty string');
        break;
    }
}
if (!hasEmptyText) {
    cb();
}
}


checkInput(()=>{
    console.log('All Not Empty!');
}, 'hello', 'dare', '');