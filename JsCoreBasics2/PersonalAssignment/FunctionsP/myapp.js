
function makeCoffee(sugar, milk){
var instructions = 'Boil water, ';
instructions += 'pour into cup, ';
instructions += 'add coffee grounds, ';
instructions += 'add ' + sugar + ' spoons of sugar, ';
instructions += 'add ' + milk + '% milk.';
return instructions;
}
const walliesCoffee = makeCoffee(2, 10);
console.log(makeCoffee(1, 13));
console.log(walliesCoffee);

//

