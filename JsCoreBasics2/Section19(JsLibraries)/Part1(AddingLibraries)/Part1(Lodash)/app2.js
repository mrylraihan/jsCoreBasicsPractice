const customers = ['Max', 'Wallie', 'Mike', 'Anna']
const activeCustomers = ['Max', 'Wallie']

// uses the lodash class _ then we are using the lodash function
const inactiveCustomers = _.difference(customers, activeCustomers)


console.log(inactiveCustomers)
