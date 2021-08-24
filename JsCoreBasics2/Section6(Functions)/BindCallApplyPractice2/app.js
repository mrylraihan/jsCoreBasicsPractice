// call, apply , and bind

const c1 = {
    x:5, 
    y:10
};

const c2 = {
    x:75,
    y:235
}

function printCoordinates(){
    console.log(this.x + ', ' + this.y);
}

//bind
const c1_func = printCoordinates.bind(c1);
const c2_func = printCoordinates.bind(c2);

c1_func();
c2_func();

//call
printCoordinates.call(c1);
printCoordinates.call(c2);
//apply
printCoordinates.apply(c1);
printCoordinates.apply(c2);


//<------------------------------>

function saySomething(a){
    console.log(a);
}

//bind
const sayBind = saySomething.bind(this, 'im bind');
sayBind();
//call
saySomething.call(this, 'hey im call');
//apply
saySomething.apply(this, ['hey im apply'])

