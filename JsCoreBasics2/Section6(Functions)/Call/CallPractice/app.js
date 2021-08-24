function printName (first, last){
    console.log(`${first} ${last} has an ${this.model} and its 
    the ${this.color} color`);
    console.log(this);
}

const Phone = {
    model:'iphone 12', 
    color: 'graphite'
};

printName.call(Phone, 'Domenic', 'Smith' );


const Phone2 = {
    model:'iphone 2',
    color:'black maybe?'
};

printName.apply(Phone2, ['old', 'lady'])

const Phone3 = {
    model:'iphone 12 Max', 
    color:'sea blue'
};

const printDetails= printName.bind(Phone3, 'hisham', 'raihan')

printDetails();