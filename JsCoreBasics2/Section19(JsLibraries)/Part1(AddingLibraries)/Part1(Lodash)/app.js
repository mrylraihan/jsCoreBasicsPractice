const customers = ['Max', 'Wallie', 'Mike']
const activeCustomers = ['Max', 'Wallie']

// const inactiveCustomers = (a, b)=>{
//    const inActive = a.length - b.length
//    return inActive
// }

// const inactiveCustomers = (a, b) => {
// 	const inActive = []
//     for (const ele of customers){
//         if (!activeCustomers.includes(ele)) {
//             inActive.push(ele)
//         }
//     }   
    
// 	return inActive
// }

const inactiveCustomers = (a, b) => {
	const inActive = []
	customers.forEach((ele) => {
		if (!activeCustomers.includes(ele)) inActive.push(ele)
	})
	return inActive
}
console.log(inactiveCustomers(customers, activeCustomers))