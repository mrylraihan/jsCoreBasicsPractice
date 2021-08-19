const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";
let gameIsRunning = false;

const getPlayerChoice = ()=> {
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) ||
    selection == null
  ) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = ()=> {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
   cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === ROCK && pChoice === PAPER)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // }else if (cChoice === ROCK && pChoice === PAPER||cChoice === PAPER && pChoice === SCISSORS||cChoice === ROCK && pChoice === PAPER) {
  //   return RESULT_PLAYER_WINS;
  // }else {
  //   return RESULT_COMPUTER_WINS
  // }


startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else{
    winner = getWinner(computerChoice, playerChoice);
  }
  console.log(`you picked :${playerChoice}`);
  console.log(`the computer picked :${computerChoice}`);
  let message = `you picked ${playerChoice || DEFAULT_USER_CHOICE}, and computer pick ${computerChoice}, you`;
  if (winner === RESULT_DRAW) {
    message += 'had a Draw!' 
  }else if (winner === RESULT_COMPUTER_WINS) {
    message += ' lost';
  }else{
    message += ' Won!';
  }
  alert(message);
  gameIsRunning = false;
});
