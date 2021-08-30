// you can store objects numbers, or strings in an arrays, 
// you can also have nested array, this is called Multidemensional arrays

const hobbies = ['Cooking', 'Sports'];
const personalData = [30,'Max', {moreDetails:[]}];

const threeD = [[1,2],[5,4,6, 'hello']];

for(const num of threeD){
    for(const n of num){
        console.log(`[${num}:${n}]`);
    }
}

console.log(personalData);

