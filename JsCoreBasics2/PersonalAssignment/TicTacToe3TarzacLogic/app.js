const startBtn = document.getElementById('startGame')
const resetBtn = document.getElementById('resetBtn')
let boxes = document.querySelectorAll('.box')
// Sqaures
const sq1 = document.getElementById('sq1')
const sq2 = document.getElementById('sq2')
const sq3 = document.getElementById('sq3')
const sq4 = document.getElementById('sq4')
const sq5 = document.getElementById('sq5')
const sq6 = document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')
const sq9 = document.getElementById('sq9')

const board = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9]

let complete = false;

// counter when ever this function is Invoked count increases by 1  
let count = 0
console.log(count)
function counting() {
	count++
	return count
}

//returns X or O depending on the count if count is even or odd
const whosTurn = (count) => {
	if (count % 2 === 0) {
		return 'x'
	} else {
		return 'o'
	}
}

//passes in a square param and adds the X or O in to the text content of the html
function changeXorO(sq) {
	if (sq.innerText === '' && complete === false) {
		sq.textContent = whosTurn(count);
		checkWinner();
		return counting();
	}
	
}

startBtn.addEventListener('click',()=>{
	//adds event listener to each square and bind the function 
	//to the element so we can pass it in
	sq1.addEventListener('click', changeXorO.bind(this, sq1))
	sq2.addEventListener('click', changeXorO.bind(this, sq2))
	sq3.addEventListener('click', changeXorO.bind(this, sq3))
	sq4.addEventListener('click', changeXorO.bind(this, sq4))
	sq5.addEventListener('click', changeXorO.bind(this, sq5))
	sq6.addEventListener('click', changeXorO.bind(this, sq6))
	sq7.addEventListener('click', changeXorO.bind(this, sq7))
	sq8.addEventListener('click', changeXorO.bind(this, sq8))
	sq9.addEventListener('click', changeXorO.bind(this, sq9))
		
})

//"" = empty 
//"x" = x tile
//"o" = o tile
const winConfig = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//returns empty string if there is no winner and returns "x" or "o" if there is a winner

function checkWinner() {
	if (count< 4) {
	return
	}

	
	for (let idx = 0; idx < 8; idx++) {
		if (
			board[winConfig[idx][0]].innerText === board[winConfig[idx][1]].innerText &&
			board[winConfig[idx][1]].innerText === board[winConfig[idx][2]].innerText &&
			board[winConfig[idx][2]].innerText === board[winConfig[idx][0]].innerText &&
			board[winConfig[idx][0]].innerText != ''
			) {
				// return board[winConfig[idx][0]]
				console.log(board[winConfig[idx][0]].innerText , ' is the winner')
				complete = true;
				return 
			}
			console.log(' ')
	}

	if (count === 8) {
		complete = true
		console.log('Draw!');
	}
	
}


function resetBoard() {
	boxes.forEach(box => {
		box.innerText = ''
		console.log('removed');
		count = 0;
		complete = false;
	})
return count;
}
resetBtn.addEventListener('click', resetBoard)
