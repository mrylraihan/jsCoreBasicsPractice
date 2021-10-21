//Rest Operator
//the rest operator allows you to pass any number of params and 
//consolidates it to an array 
// the rest operator always has to be the last argument, because it will take the rest 
const sumUp = (a,...nums)=>{
let sum = 0;
nums.forEach(num => sum += num);
return sum +=a

// for (const num of nums) {
//     sum+=num;
// }
// return sum +=a

// for (const key in nums) {
//      sum += nums[key]
// }
// return sum +=a
}
// the rest operator will take in all args and put them in an array 
console.log(sumUp(1,2,3,4,5,6,7));//28
console.log(sumUp(1,2,3,4,5,6,7,8,9,10));//55


const array= [1,2,3,4]
const [a,...b] = [...array]
console.log(a);//1
console.log(b);//[2,3,4]