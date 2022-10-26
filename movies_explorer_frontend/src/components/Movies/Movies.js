import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <button></button>
    </main>
  );
}

export default Movies;
