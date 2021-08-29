const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdropsettings = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');


const movies = [];

const toggleBackDrop = () => {
    backdropsettings.classList.toggle("visible");
  };

const updateUI = ()=>{
if (movies.length === 0) {
    entryTextSection.style.display = 'block';
}else{
    entryTextSection.style.display = 'none';
    }
};

const closeMovieDeletionModal = ()=>{
    toggleBackDrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovieHandler = (movieId)=>{
    let movieIndex = 0;
     for(const movie of movies){
         if (movie.id === movieId) {
             break;
         }
         movieIndex++;
     }
     movies.splice(movieIndex,1);
     listRoot.children[movieIndex].remove();
     closeMovieDeletionModal();
     updateUI();
};

const startDeleteMovieHandler = movieId =>{
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();
    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

    confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
    
    // confirmDeletionBtn.removeEventListener('click', eleteMovieHandler.bind(null, movieId)); doesnt work because of bind
    cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal);

    cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionBtn.addEventListener('click', deleteMovieHandler.bind(null, movieId));

    };
    
const renderNewMovieElement = (id,title,imageUrl,rating)=>{
const newMovieElement = document.createElement('li');
newMovieElement.className = 'movie-element';
newMovieElement.innerHTML = `
<div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
</div>
<divclass="movie-element__info">
<h2>${title}</h2>
<p>${rating}/5 starts</p>
</div>
`;
newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
listRoot.append(newMovieElement)
}

const closeMovieModal = ()=>{
    addMovieModal.classList.remove('visible')
}

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackDrop();
};

const clearMovieInputs = ()=>{
    for(const usrInput of userInputs){ //to iterate through the user input and reset it
        usrInput.value = '';
    }
}

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInputs();
  toggleBackDrop();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
      alert('Please enter valid values (between 1 and 5)');
      return;
  }
  const newMovie = {
      id: Math.random().toString(),
      title: titleValue,
      image: imageUrlValue, 
      rating: ratingValue
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackDrop();
  clearMovieInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInputs();
};



startAddMovieButton.addEventListener("click", showMovieModal);
backdropsettings.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
