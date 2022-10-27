import "./MoviesCard.css";
import movie from "../../../images/film.svg";
import { useLocation } from "react-router-dom";

function MoviesCard({ isSaved, buttonText }) {
  const isMoviesLocation = useLocation().pathname === "/saved-movies";
  return (
    <div className="moviescard">
      <div className="moviescard__discription">
        <h2 className="moviescard__discription-text">В погоне за Бенкси</h2>
        <div className="moviescard__discription-duration">27 минут</div>
      </div>
      <img
        className="moviescard__pic"
        src={movie}
        alt="В погоне за Бенкси"
      ></img>
      <button
        value="Сохранить"
        type="button"
        aria-label="Сохранить"
        className={`${
          isMoviesLocation
            ? "moviescard__btn-save_type_delete"
            : "moviescard__btn-save"
        } ${isSaved ? "moviescard__btn-save_type_on" : ""}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MoviesCard;
