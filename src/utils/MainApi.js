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

  saveMovie(movieData) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(movieData),
    }).then(this._checkResponseStatus);
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

  logoff() {
    this._savedMovies = undefined;
  }
}

const savedMovies = new MainApi(URL);

export { savedMovies };
