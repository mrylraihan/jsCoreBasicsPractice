//locating the id style elements
var el = document.getElementById('style');
//manipulating the styles elements
el.style.background = "green";
el.style.color = "white";
el.style.width = "300px";

var hm = document.getElementById('home');
// hm.style.background ="blue";
// hm.style.color ="black";
// hm.style.width = "400";
// a simpler way to do this

hm.style.cssText = "background:grey; color: white; width:200px";
//all in one line 

hm.style.cssText += " height: 200px";


//getComputedStyle();
var wr = document.getElementById('wayel');

console.log(getComputedStyle(wr));