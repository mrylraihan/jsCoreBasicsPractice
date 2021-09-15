const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '')=>{
const movieList = document.getElementById('movie-list');

if(movies.length === 0){
  movieList.classList.remove('visible');
}else{
  movieList.classList.add('visible');
}
movieList.innerHTML = '';

const filterMovies = !filter ? movies :movies.filter(movie => movie.info.title.includes(filter));

filterMovies.forEach(movie => {
	const movieEl = document.createElement('li');
  const {info, ...otherProps} = movie;
  console.log(otherProps);
  // const {title: movieTitle} = info;
  let {getFormattedTitle} = movie;
  // getFormattedTitle = getFormattedTitle.bind(movie)//instead of bind we could use call or apply 
	let text = getFormattedTitle.call(movie) + ' - ';
	for (const key in info) {
		if (key !== 'title') {
			text += `${key}: ${info[key]}`;
		}
	}
	movieEl.textContent = text;
	movieList.append(movieEl);
})
};

const addMovieHandler = ()=>{
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if(title.trim() === ''|| extraName.trim() === ''|| extraValue.trim() === ''){//checks if values are empty
return ;//if they are empty just to return and dont do anything 
  }
const newMovie = {
  info:{
    //title , if the key and value are the same you can just write it once
    title: title,
    [extraName]: extraValue
  }, 
  id: Math.random().toString(), 
  getFormattedTitle() {
    return this.info.title.toUpperCase();
  }
};

movies.push(newMovie)
// console.log(newMovie);
console.log(movies);
renderMovies();
};

const searchMovieHandler =()=>{
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm)
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);