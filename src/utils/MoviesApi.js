import Api from "./Api";
import { MOVIES_URL, SHORT_DURATION } from "./constants";

/* Запросы к сервису beatfilm-movies */
class MoviesApi extends Api {
  constructor(options) {
    super(options);
    this._savedMovies = [];
  }

  _getMovies(isShortMovie) {
    return fetch(`${MOVIES_URL}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._checkResponseStatus(res))
      .then((data) => {
        return (this._savedMovies = this._getShortMovie(
          data.map((value) => {
            return {
              country: value.country ? value.country : "Неизвестно",
              director: value.director,
              duration: value.duration,
              year: value.year,
              description: value.description,
              image: this._url + value.image.url,
              trailerLink: !value.trailerLink.includes("https")
                ? `${"https://www.youtube.com"}`
                : value.trailerLink,
              thumbnail: this._url + value.image.formats.thumbnail.url,
              movieId: value.id,
              nameRU: value.nameRU,
              nameEN: value.nameEN,
            };
          }),
          isShortMovie
        ));
      });
  }

  _getShortMovie(filteredMovies, isShortMovie) {
    if (isShortMovie) {
      return filteredMovies.filter(
        (element) => element.duration <= SHORT_DURATION
      );
    }
    return filteredMovies;
  }

  _getFilteredMoviesFromSaved(filterString, isShortMovie) {
    const result = this._savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(filterString.toLowerCase())
    );

    return this._getShortMovie(result, isShortMovie);
  }

  getFilteredMovies(filterString, isShortMovie) {
    if (this._savedMovies.length === 0) {
      return this._getMovies().then(() =>
        this._getFilteredMoviesFromSaved(filterString, isShortMovie)
      );
    } else {
      return Promise.resolve(
        this._getFilteredMoviesFromSaved(filterString, isShortMovie)
      );
    }
  }
}

const movies = new MoviesApi(MOVIES_URL);

export { movies };
