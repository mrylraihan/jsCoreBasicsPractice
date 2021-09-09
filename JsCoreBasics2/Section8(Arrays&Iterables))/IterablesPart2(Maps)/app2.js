//Maps allow us to have a key value relation ship in a container like instance
let zoo = new Map();
zoo.set('Zebra', Count=5)
zoo.set('Lions', Count = 80)
zoo.set('Monkeys', Count = 2)
console.log(zoo);//Map(3){'Zebra' => 5, 'Lions' => 80, 'Monkeys' => 2}

for (const key of zoo.keys()) {
    console.log(key); //Zebra, Lions, Monkeys this prints out all keys 
}

for (const value of zoo.values()) {
    console.log(value);//5,80,2 // this logs all values 
}

for (const [key, value] of zoo.entries()) {
	console.log(`${key} : ${value}`) //5,80,2 // this logs all values
}