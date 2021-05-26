const startGameBtn = document.getElementById('start-game-btn');
const anotherBtn = document.getElementById('another-btn');
const otherBtn = document.getElementById('other-btn');
const djabootyBtn = document.querySelector('#djabooty-btn');



const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_CHOICE= ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

//=======
// Binding 

const bootyFacts= (message)=>{
    const booty= prompt('How bigs the Booty: ','tell us in pounds');
    const bBooty = booty + ' Biggg!!!';
    alert(message + bBooty);
}
const bigBooty  = bootyFacts.bind(this,'your booty is ');

djabootyBtn.addEventListener('click', bigBooty);

const seeAge =(message)=>{
    const age = prompt('whats your Age?', 'type in your age');
    alert(message + age);
}
// const tAge = seeAge.bind(this, 'your age is: ');

otherBtn.addEventListener('click', seeAge.bind(this, 'your age is: '));



const seeName=(message)=>{
    const name1 = prompt('whats your name','type your name here!')
    alert(message+name1)
};

const tName = seeName.bind(this,'your name is :');

anotherBtn.addEventListener('click',tName);
//=======

let gameIsRunning = false;

const getPlayerChoice = ()=>{
    const selection = prompt(`chose either ${ROCK}, ${PAPER},or ${SCISSOR}`, '').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !==  SCISSOR){
        alert(`Invalid choice has been made you are now ${DEFAULT_CHOICE}`);
        return DEFAULT_CHOICE;
    }
    return selection;
};

const getComputerChoice = ()=>{
    const randomValue = Math.random();
    if(randomValue < 0.35){
        return ROCK;
    }else if (randomValue < 0.65){
        return PAPER;
    }else{
        return SCISSOR;
    }
};
const getWinner = (cChoice, pChoice)=>{
if(cChoice == pChoice){
    return RESULT_DRAW;
    }else if (cChoice === PAPER && pChoice === ROCK ||
         cChoice === ROCK && pChoice === SCISSOR ||
          cChoice === SCISSOR && pChoice === PAPER){
            return RESULT_PLAYER_WINS;
    }else if(cChoice === PAPER && pChoice === ROCK ||
        cChoice === SCISSOR && pChoice === PAPER ||
         cChoice === ROCK && pChoice === SCISSOR){
        return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click',()=>{
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    alert('hello loser');
    console.log('Game start!!!'); 
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playerSelection);
    console.log(computerChoice);
    const winner = getWinner(playerSelection, computerChoice);
    console.log(winner);
    let message = `You picked ${playerSelection}, computer picked ${computerChoice}`;
    if(winner === RESULT_DRAW){
        message = message + ', is a draw';
    }else if (winner === RESULT_PLAYER_WINS) {
        message = message + ', you Win';
    }else{
        message = message + ', you Lose';
    }
    alert(message);
    gameIsRunning = false;
});


 // const start = function startGame(){
//     const startMessage = 'Game Start!!!';
//     console.log(startMessage);
//     alert(startMessage);
// };

// const person = {
//     name: 'Sensei',
//     greet: function greetings(){
//         console.log('hello there!!!');
//     }, 
//     bye:function sayBye(){
//         console.log('Goodbye everyone!!!');
//     } 
// };
// person.greet();
// person.bye();
//using anonymouse functions

const combine = (resultHandler,operation, ...numbers)=>{
const validateNumber = (number)=>{
 return isNaN(number) ?  0: number;
};

    let sum = 0;
for(const num of numbers){
    if( operation === 'ADD'){
    sum += validateNumber(num);    
    }else{
    sum -= validateNumber(num);
    }
}
resultHandler(sum);
};



// const sumDown= function(resultHandler, ...numbers){
//     let sum = 0;
//     for(const num of numbers){
//         sum -= num;
//     }
//     resultHandler(sum);
//     };

const showResult = (messageText,result)=>{
    alert(messageText+' '+ result);
};

combine(showResult.bind(this, 'the result of adding all number is: '),'ADD',2,3,6,5,4,1);
combine(showResult.bind(this, 'the result of adding all number is: '),'ADD',2,3,6,5,4,1);
combine(showResult.bind(this, 'the result of subtracting all number is: '),'SUB',1,2,3,6,5,4);
