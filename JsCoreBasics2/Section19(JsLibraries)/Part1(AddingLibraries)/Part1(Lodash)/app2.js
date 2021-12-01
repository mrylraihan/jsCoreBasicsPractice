const customers = ['Max', 'Wallie', 'Mike', 'Anna']
const activeCustomers = ['Max', 'Wallie']


const inactiveCustomers = _.difference(customers, activeCustomers)


console.log(inactiveCustomers)
