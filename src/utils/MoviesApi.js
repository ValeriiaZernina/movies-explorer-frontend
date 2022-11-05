import Api from "./Api";
import { MOVIES_URL, SHORT_DURATION } from "./constants";

/* Запросы к сервису beatfilm-movies */
class MoviesApi extends Api {
  constructor(options) {
    super(options);
    this._savedMovies = [];
  }

  _getMovies() {
    return fetch(`${MOVIES_URL}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._checkResponseStatus(res))
      .then((data) => {
        return (this._savedMovies = data.map((value) => {
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
        }));
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
    const filterRegExp = new RegExp(filterString, "i");
    const result = this._savedMovies.filter((element, index) => {
      return (
        element.nameRU.search(filterRegExp) >= 0 ||
        element.description.search(filterRegExp) >= 0
      );
    });

    // сохраняем в localStorage
    localStorage.setItem("filteredMovies", JSON.stringify(result));
    localStorage.setItem("filterString", filterString);
    localStorage.setItem("isShortMovie", isShortMovie);

    return this._getShortMovie(result, isShortMovie);
  }

  getFilteredMovies(filterString, isShortMovie) {
    // проверяем локальное хранилище
    if (localStorage.getItem("filterString") === filterString) {
      if (localStorage.getItem("isShortMovie") !== isShortMovie + "") {
        localStorage.setItem("isShortMovie", isShortMovie);
      }
      return Promise.resolve(
        this._getShortMovie(
          JSON.parse(localStorage.getItem("filteredMovies")),
          isShortMovie
        )
      );
    }

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
