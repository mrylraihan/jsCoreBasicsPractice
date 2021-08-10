const element = document.createElement('div');

element.style.cssText = "width:200px; height:200px; background:blue;";

element.onclick = function(){alert('hello');};

document.body.appendChild(element)// appends the element to the end of the body 

const target = document.getElementById('green');

document.body.insertBefore(element, target);// allows you to insert anywhere in the body 
//specifically before any element (element = the new element you want to add, target the 
//element you want it to come before)

target.onclick = function setAlarm(){
    alert('hey im green!');
}

