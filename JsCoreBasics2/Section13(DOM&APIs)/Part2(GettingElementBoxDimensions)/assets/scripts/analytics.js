//this is a timer that executes every 3 seconds 
//this runs an timer on loop
const intervalId = setInterval(()=>{
    console.log('sending data!....');

}, 3000);


 document.getElementById('stopA').addEventListener('click', () => {
		clearInterval(intervalId)
 })