//Task 1
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert(randomNumber + " is the random number that is greater then .7");
}

//Task 2
const numList = [1, 2, 3, 4, 5, 6];

numList.forEach((ele) => {
  console.log(ele);
});

for (const ele of numList) {
  console.log(ele);
}

//Task 3

for (let i = numList.length - 1; 0 <= i; i--) {
  console.log(numList[i]);
}

//Task 4
const anotherRandom = Math.random();

if (randomNumber > 0.7 && anotherRandom > 0.7) {
  alert("both are greater!");
} else if (randomNumber < 0.2 || anotherRandom < 0.2) {
  alert("at least one of them are lower then .2");
}
