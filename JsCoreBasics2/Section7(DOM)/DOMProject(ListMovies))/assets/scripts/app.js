const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdropsettings = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

const toggleBackDrop = ()=>{
    backdropsettings.classList.toggle('visible'); 
};

const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
};

const cancelAddMovie = ()=>{
    toggleMovieModal();
};

const backdropClickHandler = ()=>{
    toggleMovieModal();
};


startAddMovieButton.addEventListener('click', toggleMovieModal);
backdropsettings.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie)