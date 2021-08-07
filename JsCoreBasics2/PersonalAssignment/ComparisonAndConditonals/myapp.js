const userInput = document.getElementById("typeStuff");
const pmeBtn = document.getElementById("pme");
    let str1 = '';
const userSays = ()=>{
    str1 = userInput.value;
    return str1;}
const alerting = () => alert("Hey you said " + userSays());
const alerting2 = () => alert(`Hey you said ${userSays()}`);

if (userInput == "yes") {
  pmeBtn.addEventListener("click", alerting);
} else {
  pmeBtn.addEventListener("click", alerting2);
}
