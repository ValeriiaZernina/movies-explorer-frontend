import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <button className="movies__btn">Ещё</button>
    </main>
  );
}

export default Movies;
