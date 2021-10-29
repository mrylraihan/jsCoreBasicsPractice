const sayHi = ()=> {
    console.log('Hi');
}


const sayBye = ()=>{
    console.log('bye');
}

function test() {
    console.log('test');
}
// export statement 
// all the functions that you want exported go here 
// if you only had one then you would just use the export keyword in front of 
//your function 
export {sayHi , sayBye, test}
