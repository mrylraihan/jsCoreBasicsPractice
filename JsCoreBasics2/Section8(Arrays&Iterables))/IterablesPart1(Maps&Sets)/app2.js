//using sets with numbers
const arr = [1,2,3,4,4,4];
console.log(arr);//[1, 2, 3, 4, 4, 4]

//if we wanted to remove dups from our array
const arrSet = new Set(arr);
//set will remove the dups and with numbers only put them in order
console.log(arrSet);//Set(4) {1, 2, 3, 4}

const sortedAndNoDups = Array.from(arrSet);//converts the set to an array
console.log(sortedAndNoDups);//(4) [1, 2, 3, 4]

//using sets with letters
const str = 'worrddss';
console.log(str);//worrddss

const strSet = new Set(str);// this will remove the dups, but not put them in orderbecause they are characters not numbers
console.log(strSet);//{'w', 'o', 'r', 'd', 's'}


//using sets with numbers and letters
const mix = ['a','W','2',2,4,3,2,'Y']
const mixSet = new Set(mix);
console.log(mix);//['a', 'W', '2', 2, 4, 3, 2, 'Y']
// because the numbers are mixed in it wont organize them but it does remove
//the dups
console.log(mixSet);//{'a', 'W', '2', 2, 4, 3,'Y'}


//another try with mixed numbers and letters
const mix2 = [3,1,6,8,'w','y'];
const mix2Set = new Set(mix2);
console.log(mix2);//(6) [3, 1, 6, 8, 'w', 'y']
console.log(mix2Set);//(6) {3, 1, 6, 8, 'w', 'y'}