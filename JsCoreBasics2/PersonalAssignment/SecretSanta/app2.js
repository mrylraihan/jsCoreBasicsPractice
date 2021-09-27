const btn = document.querySelector('button')
const userInput = document.querySelector('input')
const h1 = document.querySelector('h1')
const div = document.querySelector('div')
const ssbtn = document.getElementById('setSS')

let userInputValue
h1.style.animation = `type 1s steps(${h1.textContent.length})`
h1.style.width = h1.textContent.length + 'ch'

const secretSantaList = []

const render = (inputV) => {
	const listofH1 = document.querySelectorAll('h1')
	listofH1[listofH1.length - 1].classList.remove('stuff')
	let secondH1 = document.createElement('h1')
	secondH1.innerText = inputV
	secondH1.className = 'stuff'
	secondH1.style.animation = `type ${secondH1.textContent.length / 10}s steps(${
		secondH1.textContent.length
	})`
	secondH1.style.width = secondH1.textContent.length + 'ch'
	return div.append(secondH1)
}

const gettingUserInput = () => {
	userInputValue = userInput.value
	secretSantaList.push(userInputValue)
	console.log(secretSantaList)
	userInput.value = ''
	render(userInputValue)
	return secretSantaList
}

btn.addEventListener('click', gettingUserInput)

const makeRandomList = (list) => {
	let newRList = []
	while (newRList.length < list.length) {
		let rn = Math.floor(Math.random() * list.length)
		if (newRList.indexOf(rn) === -1) newRList.push(rn)
	}
	return newRList
}

//maping function
const pickingSS = (list, randomlist, randomlist2) => {
	const newSSList = list.map((v, idx) => {
		return (
			v + ' has ' + list[randomlist[idx]] + ',and ' + list[randomlist2[idx]]
		)
	})
	return newSSList
}

let newSSCopy
const setSecretSantaHandler = () => {
	const rdmList1 = makeRandomList(secretSantaList)
	const rdmList2 = makeRandomList(secretSantaList)
	console.log('random list 1 ', rdmList1, 'random list 2 ', rdmList2)
	newSSCopy = pickingSS(secretSantaList, rdmList1, rdmList2)

	console.log(newSSCopy)
}

ssbtn.addEventListener('click', setSecretSantaHandler)
