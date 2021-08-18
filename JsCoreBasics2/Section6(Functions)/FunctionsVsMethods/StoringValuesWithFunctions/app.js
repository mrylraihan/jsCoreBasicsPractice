const startGameBtn = document.getElementById('start-game-btn');
const userInput = document.getElementById('input-stuff');
const addBtn = document.getElementById('btn-add');


let savedInput;

function storingValue(userInput){
savedInput = userInput.value; 
return savedInput;
}
const storingInput = ()=>{
    const newInput = storingValue(userInput);
    // alert(newInput);
    // console.log(newInput);
    return newInput;
}

addBtn.addEventListener('click', storingInput);

///
function startGame() {
    console.log("Starting game!");
}

const person = {
    greet:function sayHI() {
      if (savedInput) {
          console.log( 'hello there '+ savedInput );
        }else{
          console.log('hello there');
      }
    }
};
// person.greet();
startGameBtn.addEventListener('click', person.greet)