import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useInfoTooltip } from "../InfoTooltip/useInfoTooltip";

function SearchForm({
  filterString,
  isShortMovie,
  onChangeIsShortMovie,
  onChangeFilterString,
  isErrorEmpty,
}) {
  const [inputValue, setInputValue] = useState(filterString);
  const { statusInfoTooltip, openInfoTooltip, closeInfoTooltip } =
    useInfoTooltip(() => {});

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "" && isErrorEmpty) {
      openInfoTooltip(false, "Нужно ввести ключевое слово");
    } else {
      setInputValue(inputValue.trim());
      onChangeFilterString(inputValue.trim());
    }
  }

  return (
    <form className="search-film" onSubmit={handleSubmit}>
      <div className="search-film__container">
        <input
          id="search"
          name="search"
          className="search-film__input"
          required
          placeholder="Фильм"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          aria-label="Найти"
          type="submit"
          className="search-film__btn"
          name="submit"
        >
          Найти
        </button>
      </div>
      <Checkbox
        className="search-film__checkbox"
        name="Короткометражки"
        onChange={onChangeIsShortMovie}
        value={isShortMovie}
      ></Checkbox>
      <InfoTooltip
        status={statusInfoTooltip}
        onClose={closeInfoTooltip}
      ></InfoTooltip>
    </form>
  );
}

export default SearchForm;
