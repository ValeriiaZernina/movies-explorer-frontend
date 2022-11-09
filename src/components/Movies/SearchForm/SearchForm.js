import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";

function SearchForm({
  filterString,
  isShortMovie,
  onChangeFilterString,
  onChangeIsShortMovie,
}) {
  const [isSpanActive, setIsSpanActive] = useState(true);
  const [text, setText] = useState(filterString);
  const [isActiveBtn, setIsActiveBnt] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onChangeFilterString(text.trim());
  }

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
    if (value.trim().length !== 0) {
      setIsSpanActive(true);

      setIsActiveBnt(true);
    } else {
      setIsSpanActive(false);
      setIsActiveBnt(false);
    }
  }

  return (
    <form className="search-film" onSubmit={handleSubmit} noValidate={true}>
      <div className="search-film__container">
        <input
          id="search"
          name="search"
          className="search-film__input"
          required
          placeholder="Фильм"
          value={text}
          onChange={handleChange}
        ></input>

        <button
          aria-label="Найти"
          type="submit"
          className={`search-film__btn ${
            !isActiveBtn ? "search-film__btn_disabled" : ""
          }`}
          name="submit"
          id="searchBtn"
        >
          Найти
        </button>
      </div>
      <span
        className={`search-film__span ${
          !isSpanActive ? "search-film__span_active" : ""
        }`}
      >
        Нужно ввести ключевое слово
      </span>
      <Checkbox
        className="search-film__checkbox"
        name="Короткометражки"
        onChange={onChangeIsShortMovie}
        value={isShortMovie}
      ></Checkbox>
    </form>
  );
}

export default SearchForm;
