const movieList = document.getElementById('movie-list');
const searchButton = document.getElementById('search-btn');
const addMovieButton = document.getElementById('add-movie-btn');

movieList.style['background-color'] = 'blue';
movieList.style.display = 'block';
searchButton.style['background'] = 'green';
addMovieButton.style.backgroundColor = 'blue'

const school = 'Johnjay';

const person ={
    'first name':'Wallie',
    age: 29,
    1.5: 'hello',
    [school]:'...',
    hobbies: [coding=['java', 'javaScript'], 'cooking'],
    greet: function(){
        alert('hey bros');
    }
};

let keyName = 'hobbies';
console.log(person[keyName][0][1]);
person.isAdmin = true;
person.Johnjay = 'GPA: 3.75';
delete person.isAdmin;
person.greet();
console.log(person["1.5"]);
console.log(person["first name"]);
console.log(person['age']);
console.log(person)