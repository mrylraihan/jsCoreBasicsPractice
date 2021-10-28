const names = 'Hisham Cece Amel Shajan Wayel Hana'

const nameList1 = names.split(' ');

console.log(nameList1);

const cleanNamesList = nameList1.filter(name => name !='')

console.log(cleanNamesList);
const array = []
cleanNamesList.forEach(
	(name) =>{
      array.push(`Hey ${name} today is a good day!`)
    } 
)

const sentences = array.join('/n')

console.log(sentences);