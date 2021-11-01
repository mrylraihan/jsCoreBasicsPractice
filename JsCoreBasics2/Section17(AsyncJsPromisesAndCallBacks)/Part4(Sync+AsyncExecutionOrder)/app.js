const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Sending positions');
  // this gets offload to the browser, and the first callback is what brings us back to the stack
  navigator.geolocation.getCurrentPosition(
    // once its completed these callbacks brings us back
    posData=>{
      console.log(posData);
      },
      error=>{
    console.log(error);
  });
  // this get executed before any these 👆🏼 lines before because they get handed, 
  // to the browsers api and then this is run, even if they are done instantly, 
  // they still run after because js is non blocking, so they get handed over to the browsers api, 
  //  then this is run then the event loop checks if this is done to push them back in
  console.log("getting position....");
}
  console.log('start positioning')
button.addEventListener('click', trackUserHandler)