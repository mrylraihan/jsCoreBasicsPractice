console.log("Hello this is Javascript");

console.log(200);

console.log(true);

console.log(null);

var num = 10;

console.log(num);

const name = "Wallie";

console.log(name);
// what does this mean when my variable is crossed out 

console.log("string", 10.11, false, null, num);

//making coffee function




function makeCoffee(sugar, milk) {
    var instructions = "Boil water, ";

    instructions += " pour into cup, ";

    instructions += " add coffee granules. "

    instructions += " add " + sugar + " spoons of sugar, ";

    instructions += " add " + milk + " % milk ";
    if (milk == 0) {
        instructions += ". i like my coffee black!"
    } if (milk >= 40) {
        instructions += ". I like my coffee light!"
    } else {
        instructions += ". Thank you for the coffee"
    }

    return (instructions);
}

console.log(makeCoffee(2, 20));