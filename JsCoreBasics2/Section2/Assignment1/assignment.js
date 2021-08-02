const btn = document.getElementById("reslt");

const alertingresult = () => alert(result); 

btn.addEventListener("click" , alertingresult)

const anBtn = document.getElementById("usIn");

const alertingUserInput = () => alert(userInput);

anBtn.addEventListener("click", alertingUserInput);



//step 1
let userInput = 15;
let result;

//step 2
result = userInput + 18;

//step 3
result = result*2;
result = result/2;
result = result + 18;

//step 4
//nope this didnt change the user input value
//
//step 5 

alert(userInput);
alert(result);

