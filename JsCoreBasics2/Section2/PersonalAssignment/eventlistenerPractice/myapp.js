const btn = document.getElementById("btn");

const buttonPress = ()=> alert("hey");

btn.addEventListener("click", buttonPress);

const anBtn = document.getElementById("anBtn");

const anotherButton = ()=> alert("another button press");

anBtn.addEventListener("click", anotherButton);