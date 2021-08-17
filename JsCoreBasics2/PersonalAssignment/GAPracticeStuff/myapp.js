let investment = 1000;
for (let i = 1; i < 11; i++) {
    if (i === 7) {
  investment = investment * 0.25;
    }else{
       investment = investment *1.10;
    }
    console.log('Years: '+i+" Value: "+ investment);
    
}