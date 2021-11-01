const button = document.querySelector('button');
const output = document.querySelector('p');
// getting started with promises

const setTimer = (duration) =>{
  const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData=>{
      setTimer(2000).then(data=> {
        console.log(data);
        console.log(posData);
      })
      },
      error=>{
    console.log(error);
  });

  setTimer(1000).then(data=>{
    console.log(data);
    console.log(' Timer Done!')});
  console.log("Getting position....");
}
 
button.addEventListener('click', trackUserHandler)