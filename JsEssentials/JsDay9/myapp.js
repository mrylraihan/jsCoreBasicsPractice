var element = document.createElement('div');

element.style.cssText = "width:200px; height:200px; background:red;";

element.onclick = function(){
    alert('Hey bitch!');
};
// this is appending the child right at the bottom
// document.body.appendChild( element );

// what if you want to append teh child in between elements
// you would target the parent node which is the body 

var target = document.getElementById('yellow');
// inserting before
document.body.insertBefore(element, target);


var elmt = document.createElement('p')

elmt.style.cssText =  "width:100px; height:100px; background:yellow;";

elmt.onclick = function(){
    alert('hey this is p!');
};

// document.body.appendChild(elmt);

var target2 = document.getElementById('hello');
//inserting before 
document.body.insertBefore(elmt, target2);


//more practice

const brownElmt = document.getElementById('brown');

brownElmt.style.cssText = "width:200px; height:200px; background:brown;";

const callingBrown = ()=> alert('brown is here!');
//or
//function callingBrown() {alert('brown is here!');}

brownElmt.addEventListener('click', callingBrown);

brownElmt.onclick = function logColor(){
console.log('brown is here');
}

brownElmt.onclick = ()=> console.log('and again');// this will overide the onclick from earlier 