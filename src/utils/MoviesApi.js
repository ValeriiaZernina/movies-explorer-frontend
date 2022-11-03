import Api from "./Api";
import { MOVIES_URL, SHORT_DURATION } from "./constants";

class MoviesApi extends Api {
  constructor(options) {
    super(options);
    this._savedMovies = [];
  }
}
