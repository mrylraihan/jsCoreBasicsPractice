//Closures 
//If a function reference data outside of its own scope like from
// the global environment or an outer function that leaves us with an open 
//expression reference other free variables outside its environment 

//Example 1 outside variable in global environment
const name = 'wallie'

    function sayName (){
        console.log(name);//referencing the variable name outside the
        //function
    }
sayName();//wallie

//Example 2 outside in the outer function 
function outer (){
    const name1 = 'Wayel';

    function inner(){
        console.log(name1);//referencing variable in outer function
    }

    inner();
}

outer();// Wayel


// -------------------------------->


let autoMake = 'Ford'
const autoModel = 'Stang'
const price = 2368
const baseYear = 1964
const inflation = 0.05

const showAuto = function (year) {
	const autoInfo = function () {
		const currentPrice = price * Math.pow(1 + inflation, year - baseYear)
		console.log(
			`Auto is a ${year} ${autoMake} ${autoModel}', it's price is ${currentPrice}$`
		)
	}

	autoInfo()
}

showAuto(1979)

autoMake = 'Tesla'

showAuto(1979)