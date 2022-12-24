const saySomething = (a, b) =>{
    console.log(`${a} ${b}`)
}

//you set the arguments with bind for example here saySomething takes 2 arguments
// we only passed in 1 with our bind then when we are ready to invoke it again the data we pass in will continue as the second argument
const test1 = saySomething.bind(this, 'Wayel')

test1('raihan')//Wayel raihan


//lets see if we can set the second argument instead 

// const test2 = saySomething.bind(this,this, 'Youyee')
// test2('Hero')//[object Window] Youyee
//this test show we can not try to bypass the first argument 

const nameInput = document.getElementById('name')
const btn = document.querySelector('button')
const displayName = document.getElementById('displayName')

const displayNameFN = (sirName, nameInp)=>{
    const name = nameInp.value
    displayName.innerText = `${sirName}. ${name}`
    nameInp.value=''
}

// const dsNMale = displayNameFN.bind(this, 'Mr')
const dsNMale = displayNameFN.bind(this, 'Mr', nameInput)

// btn.addEventListener('click', ()=>dsNMale(nameInput))
// btn.addEventListener('click',dsNMale)
btn.addEventListener('click', displayNameFN.bind(this, 'Mr', nameInput))