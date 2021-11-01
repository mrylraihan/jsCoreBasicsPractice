const button = document.querySelector('button');
const output = document.querySelector('p');
// getting started with promises
const getPosition = (opts)=>{
  const promise = new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(success=>{
      resolve(success);
    }, error => {
  
    }, opts);

  });
  return promise;

};

const setTimer = (duration) =>{
  const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Done');
    }, duration);
  });
  return promise
};

function trackUserHandler() {
  let positionData; 
  getPosition()
  .then(posData=>{
    positionData = posData
   return setTimer(1000);  
  })
  .then(data=>console.log(data, positionData))
  setTimer(1000).then(data=>{
    console.log(data, '3');
    console.log(' Timer Done!')});
  console.log("Getting position....");
}
 
button.addEventListener('click', trackUserHandler)