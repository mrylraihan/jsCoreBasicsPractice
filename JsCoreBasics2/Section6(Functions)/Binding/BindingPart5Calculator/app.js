
//<............................................>
//More Bind 

function test1(a){
  console.log(a);
}

const conductTest1 = test1.bind(this, 'im test1');

conductTest1();

//<............................................>
//More Bind with objects

const inputValue = prompt('please enter two numbers');
const operatorInput = prompt('pick a operation') 
const splitValues = inputValue.split(',');
const a = parseInt(splitValues[0]);
const b = parseInt(splitValues[1]);

console.log(a);
console.log(b);


const Add ={ operator: '+'};
const Sub ={ operator: '-'};
const Mult={ operator: 'x'};
const Divi={ operator: '/'};

let newA = '';
function operatorConverting(a){
   newA = a.toLowerCase();
    if (newA == 'add') {
      newA = Add;
    }else if (newA == 'sub') {
      newA = Sub;
    } else if (newA == 'div') {
      newA = Divi;
    }else{
      newA = Mult;
    }
    return newA
}

operatorConverting(operatorInput);


function sumUp(a, b){
  let sum = 0;
  if (this.operator == '+') {
    sum = a + b;
  }else if(this.operator == '-'){
    sum = a - b;
  }else if (this.operator == '/') {
    sum = a / b;
  }else if (this.operator == 'x') {
    sum = a * b;
  }
  console.log(`${a} ${this.operator} ${b} = ${sum}`);
}

const suming = sumUp.bind(newA, a,b);
suming()



