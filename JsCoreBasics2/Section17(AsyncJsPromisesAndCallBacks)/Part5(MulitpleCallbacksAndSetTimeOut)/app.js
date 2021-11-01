const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
 
  // this gets offload to the browser, and the first callback is what brings us back to the stack
  navigator.geolocation.getCurrentPosition(
    // once its completed these callbacks brings us back
    posData=>{
      setTimeout(()=>{
        console.log(posData);
      }, 2000)
      },
      error=>{
    console.log(error);
  });
  // this get executed before any these 👆🏼 lines before because they get handed, 
  // to the browsers api and then this is run, even if they are done instantly, 
  // they still run after because js is non blocking, so they get handed over to the browsers api, 
  //  then this is run then the event loop checks if this is done to push them back in
  setTimeout(()=>{
    console.log('timer done');
  }, 2000)
  console.log("Getting position....");
}
 
button.addEventListener('click', trackUserHandler)