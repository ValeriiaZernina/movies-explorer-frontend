import Api from "./Api";
import { URL, SHORT_DURATION } from "./constants";

class MainApi extends Api {
  constructor(options) {
    super(options);
    this._savedMovies = undefined;
  }

  _getMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    })
      .then(this._checkResponseStatus)
      .then((data) => {
        this._savedMovies = data;
        return true;
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

    return this._getShortMovie(result, isShortMovie);
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(movie),
    })
      .then(this._checkResponseStatus)
      .then((data) => {
        this._savedMovies.push(data);
        return data;
      });
  }

  deleteMovie(movie) {
    if (!movie._id && !this._savedMovies) {
      return Promise.reject("Удаление невозможно!");
    }
    let id = movie._id;
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponseStatus);
  }
  // eslint-disable-next-line
  _getFilteredMoviesFromSaved(filterString, isShortMovie) {
    const filterRegExp = new RegExp(filterString, "i");
    const result = this._savedMovies.filter((element, index) => {
      return (
        element.nameRU.search(filterRegExp) >= 0 ||
        element.description.search(filterRegExp) >= 0
      );
    });

    return this._getShortMovie(result, isShortMovie);
  }

  getFilteredMovies(filterString, isShortMovie) {
    if (!this._savedMovies) {
      return this._getMovies().then(() =>
        this._getFilteredMoviesFromSaved(filterString, isShortMovie)
      );
    } else {
      return Promise.resolve(
        this._getFilteredMoviesFromSaved(filterString, isShortMovie)
      );
    }
  }

  getMovies() {
    if (!this._savedMovies) {
      return this._getMovies().then(() => this._savedMovies);
    } else {
      return Promise.resolve(this._savedMovies);
    }
  }

  logoff() {
    this._savedMovies = undefined;
  }
}

const savedMovies = new MainApi(URL);

export { savedMovies };
