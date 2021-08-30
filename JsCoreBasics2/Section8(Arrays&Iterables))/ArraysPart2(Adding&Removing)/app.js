// you can store objects numbers, or strings in an arrays, 
// you can also have nested array, this is called Multidemensional arrays
const personalData = [30,'Max', {moreDetails:[]}];

const threeD = [[1,2],[5,4,6, 'hello'],[2]];

for(const num of threeD){
    for(const n of num){
        console.log(`[${num}:${n}]`);
    }
}

console.log(threeD[2][0]);// the fix [] targets which array you want,
// the second the index of the element


//Adding elements to an array
const hobbies = ['Cooking', 'Sports'];
hobbies.push('Reading');//pushes it to the end
console.log(hobbies);//(3) ["Cooking", "Sports", "Reading"]
hobbies.unshift('Coding');//pushes to the first element
console.log(hobbies);//["Coding", "Cooking", "Sports", "Reading"]

//Removing elements from you array 

const poppedEle= hobbies.pop();// this removes the element from the end but it also returns the element 
//so you can store it in another variable 
console.log(hobbies);//(3) ["Coding", "Cooking", "Sports"]
console.log(poppedEle);//Reading

const shiftedEle = hobbies.shift();// this removes an element from the front of the array
//and returns the element that has been removed
console.log(shiftedEle);//Coding
console.log(hobbies);//(2) ["Cooking", "Sports"]

hobbies.push('biking', 'swimming');
console.log(hobbies);//["Cooking", "Sports", "biking", "swimming"]


//replacing items in your array 
hobbies[2] = "Biking";//this replaced the previous index[2] which was biking
// to Biking 
console.log(hobbies);//(4) ["Cooking", "Sports", "Biking", "swimming"]


//inserting elements between index's using the splice method
//The splice() method changes the contents of an array by removing or 
//replacing existing elements and/or adding new elements in place
//.splice(strt index(inclusive), elements you want to remove, what to replace with);

hobbies.splice(2,1,'computers');
console.log(hobbies);//["Cooking", "Sports", "computers", "swimming"]

//or you can use splice to add in the middle with out replaceing 
//this is simply picking the index you want to start at, and by put 0 in the second paremeter
//states you amount of elements you want to remove which is 0 
hobbies.splice(2,0,'intheMiddle');
console.log(hobbies);//["Cooking", "Sports", "intheMiddle", "computers", "swimming"]


//targeting elements that we dont have 
hobbies[7] = 'Building';//this is rarely used 
console.log(hobbies);//["Cooking", "Sports", "intheMiddle", "computers", "swimming", empty × 2, "Building"]
//it will properly add the element to the index specified but the index between the last one and the newly 
//added will be empty 

for (const ele of hobbies) {
    console.log(ele);
}

//when logged everything will print but the empty indexes will have a value of undefined