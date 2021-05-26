
//creating a variable of the refenece object/ memory pointer
var pHEllo = document.getElementById('hello');
//we can call the new refence objects and manipulate the dom this way
//.innertext only affects the text it wont allow you to maniplute any html
pHEllo.innerText = " new world";
//.innerhtml will allow you to affect text and htmls elements 
pHEllo.innerHTML += " order <span>hello world2</span>";
//.outerhtml allows us to veiw the tags of the html element we are veiwing
//we modifoed the p tag to a h2 tag
pHEllo.outerHTML = '<h2 id="hello"> new world order <span>hello world2</span></h2>';

//.querySelectorAll allows you to find all the elemnts that you specify
//it will return an array, so you need specify which element you want to target
var spanH1 = document.querySelectorAll('h1 span')[0];
//then you get to modify it
spanH1.innerHTML = "Is Awesome"