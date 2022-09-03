const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = ""; // Your TMDB API Key
const language = "pt-BR";
const imageBaseUrl = "https://image.tmdb.org/t/p/w440_and_h660_face";

const movies = [];
const moviesElement = document.querySelector(".movies");

async function getMovies() {
  try {
    let response = await fetch(
      `${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=${language}&page=1`
    );

    response = await response.json();
    const data = response.results.slice(0, 12);

    data.map((movie) => {
      movies.push(movie);
    });
  } catch (error) {
    console.log("Erro:", error);
  }
}

function setMovie(movie) {
  const movieElement = document.createElement("div");
  const imageElement = document.createElement("img");
  const titleElement = document.createElement("h1");
  const scoreElement = document.createElement("span");
  const releaseDateElement = document.createElement("p");

  movieElement.classList.add("movie");
  titleElement.classList.add("movie-title");
  scoreElement.classList.add("movie-score");
  releaseDateElement.classList.add("movie-release-date");

  imageElement.setAttribute("src", imageBaseUrl + movie.backdrop_path);
  imageElement.setAttribute("alt", movie.title);
  titleElement.innerHTML = movie.title;
  scoreElement.innerHTML = movie.vote_average;
  releaseDateElement.innerHTML = new Date(
    movie.release_date
  ).toLocaleDateString("pt-BR");

  movieElement.append(
    imageElement,
    scoreElement,
    titleElement,
    releaseDateElement
  );

  moviesElement.appendChild(movieElement);
}

async function loadmovies() {
  await getMovies();

  movies.map((movie) => {
    setMovie(movie);
  });
}

loadmovies();
