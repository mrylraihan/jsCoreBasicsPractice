const task3Element = document.getElementById('task-3');

function firstFunction() {
    alert('this is the first function!');
}

function secondFunction(name) {
    alert('This is the second Function! ' + name);
}

function addNames(name0, name1, name2,) {

    const fullname = `${name0} ${name1} ${name2}`;
 
     // return alert('hello my name is' + fullname);
     return fullname;
 }

firstFunction();

secondFunction("wayel");

task3Element.addEventListener('click', firstFunction);

const combineNames = addNames('Wayel', 'Ail','Raihan');

alert(combineNames);