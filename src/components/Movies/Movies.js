import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Preloader from "../Movies/Preloader/Preloader";

function Movies() {
  const [filterString, setFilterString] = useState(
    localStorage.getItem("filterString") || ""
  );
  const [cardsRender, setCardsRender] = useState([]);
  const [errorResponce, setErrorResponce] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /*useEffect(() => {
    if (filterString.length > 0) {
      setIsLoading(true);
      Promise.all([
        movies.getFilteredMovies(filterString, isShortMovie),
        savedMovies.getMovies(),
      ])
        .then(([allData, savedData]) => {
          setCardsRender(
            allData.map((movie) => {
              const found = savedData.find(
                (element) => element.movieId === movie.movieId
              );
              if (found) {
                movie.owner = found.owner;
              }
              return movie;
            })
          );
          setErrorResponce("");
        })
        .catch((err) =>
          setErrorResponce(
            `Ошибка (${err}). Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`
          )
        )
        .finally(() => setIsLoading(false));
    }
  }, [filterString, isShortMovie]);
*/
  return (
    <main className="movies">
      <SearchForm
        filterString={filterString}
        onChangeFilterString={setFilterString}
        //isShortMovie={isShortMovie}
        //onChangeIsShortMovie={setIsShortMovie}
        isErrorOnEmpty={true}
      ></SearchForm>
      {isLoading ? (
        <Preloader></Preloader>
      ) : !!errorResponce ? (
        <div>{errorResponce}</div>
      ) : cardsRender.lenght > 0 ? (
        <MoviesCardList cardsRender={cardsRender}></MoviesCardList>
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
