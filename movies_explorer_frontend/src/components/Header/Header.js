import { useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header() {
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname === "/" ? "heder_style" : ""}`}
    >
      <Logo></Logo>
      {(location.pathname === '/') ? 
      (<nav className="header__nav">
      <MenuLink to="/signup" text="Регистрация"></MenuLink>
      <MenuLink to="/signin" text="Войти"></MenuLink>
    </nav>
      ) :
      (
        isWide ?
        (

      ))
    }
    </header>
  );
}

export default Header;
