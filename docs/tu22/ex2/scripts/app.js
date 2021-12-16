const movies = [];

const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

/**
 *
 * Event functions
 *
 *  */

startAddMovieButton.addEventListener('click', () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
});
backdrop.addEventListener('click', closeMovie);
cancelAddMovieButton.addEventListener('click', closeMovie);

confirmAddMovieButton.addEventListener('click', () => {
  const titleValue = userInputs[0].value;
  const ratingValue = userInputs[1].value;

  if (
    titleValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  closeMovie();
  renderNewMovieElement(newMovie);
  updateUI();
});

/**
 *
 * Helper functions
 *
 *  */

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
}

function renderNewMovieElement(newMovie) {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div id=${newMovie.id} class="movie-element__info">
      <h2>${newMovie.title}</h2>
      <p>${newMovie.rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', (event) => {
    let movieIndex = 0;
    const movieId = event.currentTarget.firstElementChild.id;
    for (const movie of movies) {
      if (movie.id === movieId) {
        break;
      }
      movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    updateUI();
  });
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
}

function closeMovie() {
  // closeMovieModal
  addMovieModal.classList.remove('visible');

  // clearMovieInput
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }

  toggleBackdrop();
}
