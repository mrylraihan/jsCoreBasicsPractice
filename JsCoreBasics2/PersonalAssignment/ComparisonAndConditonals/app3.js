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