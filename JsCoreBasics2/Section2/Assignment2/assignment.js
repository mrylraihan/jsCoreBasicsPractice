const task3Element = document.getElementById('task-3');
const task5Element = document.getElementById('task-5');
//task1
function One(){
    alert('hey first function');
}

function Two(name){
    alert(name);
}
//task2
One();
Two('Wallie');

//task3

task3Element.addEventListener('click', One);

//task4

function Three(name1, name2, name3){
const fullN = ` ${name1} ${name2} ${name3}`;
return fullN;
}

const fullName = Three('Wallie', 'Ali', 'Raihan');
//task5


alert(fullName);

//taskExtra
function combined(str1, str2, str3){
    const combinedText = str1 + ' '+str2+' '+str3;
    return combinedText;
}

const combinedString = combined('hi', 'there', '!');

const alerting =()=>alert(combinedString);

task5Element.addEventListener('click', alerting)
