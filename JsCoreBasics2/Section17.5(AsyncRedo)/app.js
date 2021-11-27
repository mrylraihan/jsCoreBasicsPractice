const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  // these two lines get handed off to the browser,
  //no matter how fast they are they always getting executed 
  //after the console.log under it because they get handed 
  //off to the browser
  navigator.geolocation.getCurrentPosition(posData=>{
    // this is known as callback hell, its hard to keep track of 
    setTimeout(()=>{
      console.log(posData);
    }, 2000);
  }, error =>{
    console.log(error);
  });
  setTimeout(()=>{
    console.log('timer done!');
  }, 0)
  console.log('Getting position');// this line always gets executed before the ones above, 
  // this is because the callbacks get sent to the browser 
  // while this one enters the stack immediately 
}

button.addEventListener('click', trackUserHandler);
