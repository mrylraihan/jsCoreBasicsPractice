const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 250},
    {name: 'Scooter', price: 90},
    {name: 'Chair', price: 125},
    {name: 'Radio', price: 299},
    {name: 'HeadPhones', price: 500},
    {name: 'Ninja Turtle', price: 15}
] 

// using filter Method

const less100 = items.filter(item=>item.price<=100)

console.log(less100);
// [{name: 'Bike', price: 100}, {name: 'Scooter', price: 90}, {name: 'Ninja Turtle', price: 15}]

console.log(items);//this will log the existing array 


// using map
let n = 0
const ItemsNames = items.map(item=>`${++n}: ${item.name}`)

console.log(ItemsNames);
// ['1: Bike', '2: TV', '3: Scooter', '4: Chair', '5: Radio', '6: HeadPhones', '7: Ninja Turtle']