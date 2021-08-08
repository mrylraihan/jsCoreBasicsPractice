const classRegister = ['wallie', 'heshow', 'mustafa'];

if(classRegister.includes('mustafa')){//includes checks if the paramter is in the array or string and returns a boolean
console.log(true);
}

for (const key of classRegister) {// of logs the elements
    console.log(key);// will log value
}

for(const key in classRegister){// in log the index
    console.log(classRegister[key]);
}

classRegister.forEach(element => {// iterates through the array and logs the element
    console.log(element);
});


for(let i = 0; i<classRegister.length;i++){
    console.log(classRegister[i]);
}


for(let i = classRegister.length-1; 0<=i; i--){//inverted list
    console.log(classRegister[i]);
}

const hOne = document.getElementById('hOne');
const originalText = hOne.textContent;// gets the original text stored in the h1 and stores it in the new variable
hOne.onmouseover = () => hOne.innerHTML = 'Condtionals and Looping practice';// changes the html onhover
hOne.onmouseout = () => hOne.innerHTML = `${originalText}`;// on mouse out returns the original text that was stored in hOne1