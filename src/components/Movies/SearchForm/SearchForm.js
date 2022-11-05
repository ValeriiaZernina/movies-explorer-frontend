import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
// import { useState } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useInfoTooltip } from "../InfoTooltip/useInfoTooltip";

function SearchForm(isShortMovie, onChangeIsShortMovie) {
  const { statusInfoTooltip, closeInfoTooltip } = useInfoTooltip(() => {});
  function handleSubmit(e) {
    e.preventDefault();
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
