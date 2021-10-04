//this is a timer that executes every 3 seconds 
//this runs an timer on loop
const intervalId = setInterval(()=>{
    const date = new Date();
    console.log('sending data!....');
    console.log(date.toLocaleString());

}, 1000);


 document.getElementById('stopA').addEventListener('click', () => {
		clearInterval(intervalId)
 })