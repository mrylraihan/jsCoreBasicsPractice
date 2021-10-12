// working with preventDefault
// const buttons = document.querySelectorAll('button');


// const buttonClickHandler = (event) => {
// 	console.log('mouse was on!'); //This was clicked!
// 	console.log(event);
// }

// buttons.forEach(btn => {
//     btn.addEventListener('click', buttonClickHandler);
// });

const formBtn = document.querySelector('form')
// submit is a special event that only forms have 
formBtn.addEventListener('submit', (event)=>{
	event.preventDefault()//this prevents the default behavior of submitting the form 
	console.log(event) //SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form, currentTarget: form, …}
})