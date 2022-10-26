import "./MoviesCard.css";
import movie from "../../../images/film.svg";
import { useLocation } from "react-router-dom";

function MoviesCard({ isLiked }) {
  const isMoviesLocation = useLocation().pathname === "/movies";
  return (
    <div className="moviescard">
      <img
        className="moviescard__pic"
        src={movie}
        alt="33 слова о дизайне"
      ></img>
      <div className="moviescard__name">
        <h2></h2>
        <button
          className={`movies-card__butn-like movies-card__button-like_style_${
            isMoviesLocation ? (isLiked ? "on" : "off") : "delete"
          }`}
        ></button>
      </div>
      <div className="moviescard__duration"></div>
    </div>
  );
}

export default MoviesCard;
