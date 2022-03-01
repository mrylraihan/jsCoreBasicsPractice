function sigma(num){
    if(num == 1){
        console.log(num);
        return 1
    }
    console.log(num);
    return num + sigma(num - 1)
}

sigma(5)