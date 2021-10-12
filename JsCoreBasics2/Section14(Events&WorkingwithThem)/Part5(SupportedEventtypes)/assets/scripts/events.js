// Supported Event type
// if you can scroll someting you can listen to a scroll event 
// if you can click something you can listen to a click event
const buttons = document.querySelectorAll('button');


const buttonClickHandler = (event) => {
	console.log('mouse was on!'); //This was clicked!
	console.log(event);
}

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', buttonClickHandler);
});



window.addEventListener('scroll', event=>{
    console.log(event);
})