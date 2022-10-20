import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  const windowInnerWidth = window.innerWidth;
  return (
    <>
      {!isLoggedIn ? (
        <>
          <Link to="/signup" className="navigation__link" text="Регистрация">
            Регистрация
          </Link>
          <Link to="/signin" className="navigation__btn" text="Войти">
            Войти
          </Link>
        </>
      ) : windowInnerWidth <= 891 ? (
        <button type="button" className="navigation__menu-burger"></button>
      ) : (
        <>
          <nav className="navigation__nav">
            <Link className="navigation__nav-item" to="/movies">
              Фильмы
            </Link>
            <Link className="navigation__nav-item" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </nav>
          <div className="navigation__profile">
            <Link className="navigation__profile-text" to="/profile">
              Аккаунт
            </Link>
            <div className="navigation__profile-icon"></div>
          </div>
        </>
      )}
    </>
  );
}

export default Navigation;
