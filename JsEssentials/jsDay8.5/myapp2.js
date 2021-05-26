var select = document.getElementsByName('cars')[0];

select.onclick = function( event ){
console.log(event);
}
select.onmouseenter = function(event){
    console.log(event);
}

select.addEventListener('click', function( event ){
    console.log('clicked by add event listener');
});

select.addEventListener('click', function(event){
    console.log('Second click event')
});
select.addEventListener('mouseenter', function(event){
    console.log(' Mouse event 2')
});


var select2 = document.getElementsByName('names')[0];

select2.onmouseenter = function (evt){
    console.log(evt);
}

select2.addEventListener('mouseenter', function(evt){
    console.log('first mouseenter addeventListner!')
});

select2.addEventListener('mouseenter', function(evt){
    console.log('Hi Korakot!');
});
