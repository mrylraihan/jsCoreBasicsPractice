

    fetch('https://api.kanye.rest')
        .then(result => result.json())
        .then(res =>
            console.log(res.data)
            //here is where you would do your create or put method to store the facts they like=

        )
        .catch(err => console.log(err))

// $ node - v
// v16.2.0