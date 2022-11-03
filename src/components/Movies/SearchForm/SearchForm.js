import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";

function SearchForm() {
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
      ></Checkbox>
    </form>
  );
}

export default SearchForm;
