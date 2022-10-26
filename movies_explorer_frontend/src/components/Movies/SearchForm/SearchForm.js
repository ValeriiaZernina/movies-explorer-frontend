import "./SearchForm.css";
import Smaller from "../Smaller/Smaller";

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="search-film" onSubmit={handleSubmit}>
      <input
        id="search"
        name="search"
        className="search-film__input"
        placeholder="Фильм"
        required
      ></input>
      <button
        aria-label="Найти"
        type="submit"
        className="search-film__btn"
        name="submit"
      >
        Найти
      </button>
      <Smaller
        className="search-film__smaller"
        name="Короткометражки"
      ></Smaller>
    </form>
  );
}

export default SearchForm;
