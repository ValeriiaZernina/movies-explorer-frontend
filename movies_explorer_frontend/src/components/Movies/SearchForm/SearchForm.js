import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";

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
      <Checkbox
        className="search-film__checkbox"
        name="Короткометражки"
      ></Checkbox>
    </form>
  );
}

export default SearchForm;
