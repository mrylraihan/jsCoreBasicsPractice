// Global Number and Math Objects

function randomNum(min, max) {//min 5 max 10
    return Math.floor(Math.random() * (max - min + 1) + min );
}

console.log(randomNum(5, 10))