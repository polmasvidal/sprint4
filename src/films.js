// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let listOfDirectors = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", listOfDirectors);
  return listOfDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let filmsByDirector = movies.filter(movie => movie.director === director);
  return filmsByDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let moviesByDirector = getMoviesFromDirector(movies, director);
  return averageScore(moviesByDirector);
  
  /* PREVIOUS CODE WITHOUT HELPER FUNCTION
  let moviesScoreSum = moviesByDirector.reduce((previous, {score}) => (previous + {score}), moviesByDirector[0].score);
  let moviesAverageScore = parseFloat((moviesScoreSum / moviesByDirector.length).toFixed(2)) || 0;
  return moviesAverageScore;*/
}

// Exercise 4: Alphabetic order by title 
function orderAlphabetically(movies) {
  let orderedByTitle = movies.map(titles => titles.title).sort().slice(0,20);
  return orderedByTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let orderedByYear = movies.slice().sort((a, b) => {
    if (a.year > b.year) {return 1}
    if (a.year < b.year) {return -1}
    if (a.year === b.year) {
      if (a.title > b.title) {return 1}
      if (a.title < b.title) {return -1}
      return 0;
    }
  });

  return orderedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let filmsByCategory = movies.filter(movie => movie.genre.includes(genre));
  return averageScore(filmsByCategory);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}

// Helper function to calculate average scores
function averageScore(array) {
  let scoreSum = array.reduce((result, movie) => result + movie.score, 0)
  return parseFloat(scoreSum/array.length.toFixed(2)); 
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
