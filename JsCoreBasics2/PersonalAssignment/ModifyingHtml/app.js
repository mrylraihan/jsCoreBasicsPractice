const fH1 = document.getElementById('first');

const sH1 = document.getElementById('second');

fH1.innerText += " please enjoy";// targets the inner html text and add on to it

sH1.innerText = 'Another h1 header to practice on';// targets the inner html and replaces it

sH1.outerHTML = '<h3 id="second" class="h1">Another h1 header to practice on</h3>';


//changing elements style

const el =  document.getElementById('style');
// el.style.color = "red";
// el.style.background = 'black';
// el.style.width = '200px';
// or
// all in one line with cssText
el.style.cssText = 'background:blue;color:red;width:200px'
// you can keep adding as long as you use the += operator it will concat the css
el.style.cssText += 'height:100px;'

//another element we are going to style with a function 


const el2 = document.getElementById('style2');

el2.onmouseover = () => el2.style.cssText = 'background:blue;color:red;width:200px';// changes the css onhover
el2.onmouseout = () => el2.style.cssText = " ";// on mouse out returns the original css 

//get computed style how to access css already configured

const el3 = document.getElementById('style3');
el3.style.cssText += 'background:blue;'// this is suppose to modify the red bg to blue bg for el3 but the css 
//styles bg is marked important to itr overrides this js
console.log(getComputedStyle(el3));


const el4 = document.getElementById('style4');
el4.onclick = ()=>el4.style.cssText = 'background: blue';
el4.ondblclick= ()=>el4.style.cssText = '';
