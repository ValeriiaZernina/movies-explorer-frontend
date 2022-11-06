import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { savedMovies } from "../../utils/MainApi";
import { useEffect, useState } from "react";
import Preloader from "../Movies/Preloader/Preloader";
import { movies } from "../../utils/MoviesApi";

function Movies() {
  const [filterString, setFilterString] = useState(
    localStorage.getItem("filterString") || ""
  );
  const [cardsToRender, setCardsToRender] = useState(
    localStorage.getItem("filteredMovies") || []
  );
  const [isShortMovie, setIsShortMovie] = useState(
    localStorage.getItem("isShortMovie") === "true"
  );

  const [errorResponce, setErrorResponce] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (filterString.length > 0) {
      setIsLoading(true);
      Promise.all([
        movies._getMovies(isShortMovie),
        //movies.getFilteredMovies(filterString, isShortMovie),
        savedMovies.getMovies(),
      ])
        .then(([movies, savedData]) => {
          const filteredMovies = movies.filter((movie) =>
            movie.nameRU.includes(filterString)
          );

          filteredMovies.forEach((element) => {
            const found = savedData.find((s) => s.movieId === element.movieId);
            if (found) {
              element.owner = found.owner;
              element._id = found._id;
            }
          });

          setCardsToRender(filteredMovies);
          setErrorResponce("");
          localStorage.setItem("filterString", filterString);
          localStorage.setItem("isShortMovie", isShortMovie);
          localStorage.setItem("filteredMovies", filteredMovies);
        })
        .catch((err) =>
          setErrorResponce(
            `Ошибка (${err}). Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`
          )
        )
        .finally(() => setIsLoading(false));
    }
  }, [filterString, isShortMovie]);

  return (
    <main className="movies">
      <SearchForm
        filterString={filterString}
        onChangeFilterString={setFilterString}
        isShortMovie={isShortMovie}
        onChangeIsShortMovie={setIsShortMovie}
        isErrorOnEmpty={true}
      ></SearchForm>
      {isLoading ? (
        <Preloader></Preloader>
      ) : !!errorResponce ? (
        <div>{errorResponce}</div>
      ) : cardsToRender.length > 0 ? (
        <MoviesCardList cardsToRender={cardsToRender}></MoviesCardList>
      ) : filterString.length > 0 ? (
        <div>Ничего не найдено</div>
      ) : (
        ""
      )}
      {/* <button className="movies__btn">Ещё</button> */}
    </main>
  );
}

export default Movies;
