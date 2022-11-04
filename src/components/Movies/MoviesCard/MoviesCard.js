import "./MoviesCard.css";
import movie from "../../../images/film.svg";
import { useLocation } from "react-router-dom";
import { convertMinutesToHours } from "../../../utils/constants";

function MoviesCard({ movie, onDeleteMovie, onSaveMovie }) {
  const isMoviesLocation = useLocation().pathname === "/movies";

  function handleSaveClick() {
    if (movie.owner) {
      onDeleteMovie(movie);
    } else {
      onSaveMovie(movie);
    }
  }

  return (
    <div className="moviescard">
      <div className="moviescard__discription">
        <h2 className="moviescard__discription-text">{movie.nameRU}</h2>
        <div className="moviescard__discription-duration">
          {convertMinutesToHours(movie.duration)}
        </div>
      </div>
      <img
        className="moviescard__pic"
        src={movie.image}
        alt={movie.nameRU}
        // alt="В погоне за Бенкси"
      ></img>
      <button
        value="Сохранить"
        type="button"
        aria-label="Сохранить"
        className={`moviescard__btn-save moviescard__btn-save_type_${
          isMoviesLocation ? (!!movie.owner ? "on" : "") : "delete"
        } link link_style_green`}
        onClick={handleSaveClick}
      >
        {/* {buttonText} */}
      </button>
    </div>
  );
}

export default MoviesCard;
