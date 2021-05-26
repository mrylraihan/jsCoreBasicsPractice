const randomNumber = Math.random();
const randomNumber2 = Math.random();

if (randomNumber > 0.7) {
    alert(`hey this random number is greater the .7 ${randomNumber}`);
} else {
    alert('Not greater!')
}

let monkeyBars = [1, 2, 3, 4, 5];

for (let i = 0; i < monkeyBars.length; i++) {
    console.log(monkeyBars[i]);
}
let bars = 0;
for (const bars in monkeyBars) {
    console.log(monkeyBars[bars]);
}

for (let i = monkeyBars.length - 1; i >= 0; i--) {
    console.log(monkeyBars[i]);
}

for (const bars in monkeyBars.reverse) {
    console.log(monkeyBars[bars]);
}
console.log(randomNumber);
console.log(randomNumber2);
if ((randomNumber > 0.7 && randomNumber2 > 0.7) || (randomNumber <= 0.2 || randomNumber2 <= 0.2)) {
    alert(`these are the numbers ${randomNumber} , ${randomNumber2}`);
}