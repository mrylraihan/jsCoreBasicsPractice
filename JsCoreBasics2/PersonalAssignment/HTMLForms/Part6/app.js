const form = document.getElementById('form')// targets the form 

const formSubmitHandler = e =>{
    e.preventDefault()// prevents refresh 
   let inputList = form.querySelectorAll('input')// pull all input feilds from the form into fake array 
   console.log(inputList)
   let argArr = []//array to use from object.fromEntries
    inputList.forEach(ele=>{ // loop through and push name and value on each input as a array into argsArr array 
        argArr.push([ele.name, ele.value])
    })
    argArr = Object.fromEntries(argArr)//convert 3d array into object
    console.log(argArr)
    form.reset()// will reset the form 
}



form.addEventListener('submit',formSubmitHandler)
