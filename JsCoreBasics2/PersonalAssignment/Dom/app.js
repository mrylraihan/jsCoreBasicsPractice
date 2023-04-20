const num = 8
if(num>9)console.log(true)
else console.log(false)


const getRecipes1 = async (query) => {
    const APP_ID = "f01b9fa1"
    const APP_KEY = "9a089156b246ffaf2df7d06076e6ee9d"
    const Recipe_API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&random=true&app_id=${APP_ID}&app_key=${APP_KEY}`
    try {
        const response = await fetch(Recipe_API_URL, {
            method: 'GET'
        });
        const recipes = await response.json();
        console.log(recipes.hits, 'recipe hits');
        setAvailableRecipes(recipes.hits);
        setFetchRecipes(recipes);
    } catch (error) {
        console.log(error);
    }
}

const getRecipes = (query)=>{
    const APP_ID = "f01b9fa1"
    const APP_KEY = "9a089156b246ffaf2df7d06076e6ee9d"
    const Recipe_API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&random=true&app_id=${APP_ID}&app_key=${APP_KEY}`
    fetch(Recipe_API_URL, {
        method: 'GET'
    })
    .then(res=>res.json())
    .then(recipes =>{
        console.log(recipes.hits)
        setAvailableRecipes(recipes.hits);
        setFetchRecipes(recipes);
    })
    .catch(console.error)
}