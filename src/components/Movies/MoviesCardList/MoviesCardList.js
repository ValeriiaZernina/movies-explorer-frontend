import "./MoviesCardList.css";
import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { getCountMovies } from "../../../utils/constants";
import { savedMovies } from "../../../utils/MainApi.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useInfoTooltip } from "../../Movies/InfoTooltip/useInfoTooltip";

function MoviesCardList({ cardsToRender }) {
  const [movieCount, setMovieCount] = useState(getCountMovies());
  const [moviesCards, setMoviesCards] = useState([]);
  const [countToShow, setCountToShow] = useState(
    movieCount.row * movieCount.first
  );
  const { statusInfoTooltip, openInfoTooltip, closeInfoTooltip } =
    useInfoTooltip(() => {});

  // Определение ширины экрана и установление количества отображемых фильмов
  useEffect(() => {
    function handleWindowResize() {
      setMovieCount((curr) => {
        const count = getCountMovies();
        if (count.row === curr.row) {
          return curr;
        } else {
          return count;
        }
      });
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (cardsToRender) {
      setMoviesCards((curr) =>
        cardsToRender.filter((element, index) => index < countToShow)
      );
    }
  }, [cardsToRender, countToShow]);

  function deleteMovie(movie) {
    savedMovies
      .deleteMovie(movie)
      .then(() => {
        if (movie._id) {
          const found = cardsToRender.findIndex(
            (element) => element._id === movie._id
          );
          if (found >= 0) {
            cardsToRender.splice(found, 1);
          }
          setMoviesCards((curr) =>
            curr.filter((element) => element._id !== movie._id)
          );
        } else {
          delete movie.owner;
          setMoviesCards((curr) => curr.map((element) => element));
        }
      })
      .catch((err) => openInfoTooltip(false, err));
  }

  useEffect(() => {
    setCountToShow(movieCount.row * movieCount.first);
  }, [movieCount]);

  function saveMovie(movie) {
    savedMovies
      .saveMovie(movie)
      .then((newMovie) => {
        const found = cardsToRender.find(
          (element) => element.movieId === newMovie.movieId
        );
        if (found) {
          found.owner = newMovie.owner;
        }
        setMoviesCards((curr) => {
          return curr.map((element) =>
            element.movieId === newMovie.movieId
              ? { ...element, owner: newMovie.owner }
              : element
          );
        });
      })
      .catch((err) => openInfoTooltip(false, err));
  }
  return (
    <>
      <div className="moviescard-list">
        {moviesCards.map((element) => (
          <MoviesCard
            buttonText={"Сохранить"}
            key={element.movieId}
            movie={element}
            onSaveMovie={saveMovie}
            onDeleteMovie={deleteMovie}
          ></MoviesCard>
        ))}
      </div>

      {countToShow < cardsToRender.length ? (
        <button
          className="movies__btn link"
          onClick={() =>
            setCountToShow(countToShow + movieCount.row * movieCount.next)
          }
        >
          Ещё
        </button>
      ) : (
        ""
      )}
      <InfoTooltip
        status={statusInfoTooltip}
        onClose={closeInfoTooltip}
      ></InfoTooltip>
    </>
  );
}

export default MoviesCardList;
