const btn = document.querySelector('button');
const userInput = document.querySelector('input');
const h1 = document.querySelector('h1');
const div = document.querySelector('div');
const ssbtn = document.getElementById('setSS');

let userInputValue
h1.style.animation = `type 1s steps(${h1.textContent.length})`
h1.style.width = h1.textContent.length + 'ch'

const secretSantaList = [];
const gettingUserInput = () => {
    userInputValue = userInput.value
    secretSantaList.push(userInputValue)
    console.log(secretSantaList);
	userInput.value = ''
	const listofH1 = document.querySelectorAll('h1')
	listofH1[listofH1.length - 1].classList.remove('stuff')
	let secondH1 = document.createElement('h1')
	secondH1.innerText = userInputValue
	secondH1.className = 'stuff'
	secondH1.style.animation = `type ${secondH1.textContent.length / 10}s steps(${
		secondH1.textContent.length
	})`
	secondH1.style.width = secondH1.textContent.length + 'ch'
	div.append(secondH1)
    return secretSantaList;
}

btn.addEventListener('click', gettingUserInput)
let newSSCopy;
const setSecretSantaHandler = ()=> {
    
    const rdmList1 = []
    const rdmList2 = [] 
		while (rdmList1.length < secretSantaList.length) {
			let rn = Math.floor(Math.random() * secretSantaList.length)
			if (rdmList1.indexOf(rn) === -1) rdmList1.push(rn)
		}
        while (rdmList2.length < secretSantaList.length) {
					let rn = Math.floor(Math.random() * secretSantaList.length)
					if (rdmList2.indexOf(rn) === -1) rdmList2.push(rn)
				}
		console.log(rdmList1,rdmList2)
     newSSCopy = secretSantaList.map((v,idx)=>{
        return v+' has '+ secretSantaList[rdmList1[idx]] + ',and ' + secretSantaList[rdmList2[idx]];
    })
	console.log(rdmList1);
	console.log(rdmList2);
    console.log(newSSCopy);
}


ssbtn.addEventListener('click', setSecretSantaHandler)
