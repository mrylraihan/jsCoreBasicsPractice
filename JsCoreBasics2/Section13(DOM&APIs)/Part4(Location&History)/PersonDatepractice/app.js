const date = new Date();//this create a object of the date

//now you can run methods that the date object has 

console.log(date.toLocaleDateString());//10/4/2021 the local date
console.log(date.toLocaleString());//10/4/2021, 3:08:56 PM the local date and time

console.log(date.toLocaleTimeString());//8 3:09:19 PM just the time
console.log(date.toString());//Mon Oct 04 2021 15:09:50 GMT-0400 (Eastern Daylight Time)

console.log(date.toTimeString());//15:10:09 GMT-0400 (Eastern Daylight Time)

console.log(date.toUTCString());//Mon, 04 Oct 2021 19:10:32 GMT
