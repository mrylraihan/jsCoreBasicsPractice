// Big Int
// helps js know they are working a large value so they can compensate 
//syntax is by adding a n at the end of the value
//  90000000000099n

// we can use large numbers which is what is used for but we can also use smaller numbers

console.log(10n + 6n);//16n

// what we can do is mix

// we cant mix types
// console.log(10n + 4);// Cannot mix BigInt and other types, use explicit conversions

// we can convert the int to a bigInt or vis versa
//parseInt converts the big int to a integer
console.log(parseInt(10n)+4);//14


// we can also convert the integer ro a bigInt 
console.log(10n + BigInt(4));//14n

// BigInt also doesnt work with floating numbers(decimals)
console.log(5n/2n);//2n not 2.5 it automatically converts to a whole number 
