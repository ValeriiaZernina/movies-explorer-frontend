import "./Header.css";
import Logo from "../Logo/Logo";
import MenuBtn from "./MenuBtn/MenuBtn";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileLink from "./ProfileLink/ProfileLink";
import Popup from "../Popup/Popup";
import MenuLink from "./MenuLink/MenuLink";

function isWindowWide() {
  return window.innerWidth >= 768;
}

function Header() {
  const location = useLocation();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isWide, setIsWide] = useState(isWindowWide());

  useEffect(() => {
    function handleWindowResize() {
      setIsWide(isWindowWide());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isWide && menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [isWide, menuIsOpen]);

  useEffect(() => {
    setMenuIsOpen(false);
  }, [location]);

  function handleMenuButtonClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  // закрыть менюшку
  function closeMenu() {
    setMenuIsOpen(false);
  }

  return (
    <header className={`header ${location.pathname === "/" ? "header" : ""}`}>
      <Logo></Logo>
      {location.pathname === "/" ? (
        <nav className="header__sign">
          <MenuLink to="/signup" linkType="signup" subtitle="Регистрация">
            Регистрация
          </MenuLink>
          <MenuLink to="/signin" linkType="signin" subtitle="Войти">
            Войти
          </MenuLink>
        </nav>
      ) : isWide ? (
        <nav className="header__nav-movies_style_row">
          <MenuLink to="/movies" subtitle="Фильмы" linkType="row"></MenuLink>
          <MenuLink
            to="/saved-movies"
            subtitle="Сохранённые фильмы"
            linkType="row"
          ></MenuLink>
          <ProfileLink linkType="row"></ProfileLink>
        </nav>
      ) : (
        <MenuBtn onClick={handleMenuButtonClick}></MenuBtn>
      )}
      <Popup isOpen={menuIsOpen} onClose={closeMenu} text="menu">
        <nav className="header__nav-movies_style_column">
          <MenuLink to="/" subtitle="Главная" linkType="column"></MenuLink>
          <MenuLink to="/movies" subtitle="Фильмы" linkType="column"></MenuLink>
          <MenuLink
            to="/saved-movies"
            subtitle="Сохранённые фильмы"
            linkType="column"
          ></MenuLink>
          <ProfileLink linkType="column"></ProfileLink>
        </nav>
      </Popup>
    </header>
  );
}

export default Header;
