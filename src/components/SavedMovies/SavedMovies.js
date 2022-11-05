import "./SavedMovies.css";
import { savedMovies } from "../../utils/MainApi";
import Preloader from "../Movies/Preloader/Preloader";
import { useEffect, useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies() {
  const [filterString, setFilterString] = useState("");
  const [cardsToRender, setCardsToRender] = useState([]);
  const [errorResponce, seterrorResponce] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    savedMovies
      .getFilteredMovies(filterString)
      .then((savedData) => {
        setCardsToRender(savedData);
      })
      .catch((err) =>
        seterrorResponce(
          `Ошибка (${err}). Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`
        )
      )
      .finally(() => setIsLoading(false));
  }, [filterString]);

  return (
    <main className="saved-movies">
      <SearchForm
        filterString={filterString}
        onChangeFilterString={setFilterString}
        isErrorOnEmpty={false}
      ></SearchForm>
      {isLoading ? (
        <Preloader></Preloader>
      ) : !!errorResponce ? (
        <div>{errorResponce}</div>
      ) : cardsToRender.length > 0 ? (
        <MoviesCardList cardsToRender={cardsToRender}></MoviesCardList>
      ) : filterString.length > 0 ? (
        <div>По результатам поиска фильмов не найдено</div>
      ) : (
        "Нет сохраненных фильмов"
      )}
    </main>
  );
}

export default SavedMovies;
