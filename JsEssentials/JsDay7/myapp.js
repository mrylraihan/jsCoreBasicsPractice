// these are all symbol names and they allow you to address values stored in memory.

//var(variables)
var symbolName = "value reference in memory";
// can be assigned a new value
//vars dont respect the condition execution context scope 
// vars only respect the scope of a functions execution context but not anything else. for example forloops or ifs 

let letSymbol = "scoped value";
// can be assigned a new value
// let creates symbols only in the scope they reside in. 
const symName = "constrant value in memory";
// once set it cant be assigned a new value
// const also respects the scope they reside in. 


// DOCUMENT OBJECT MODEL DOM

console.dir(document.getElementById("hello"));