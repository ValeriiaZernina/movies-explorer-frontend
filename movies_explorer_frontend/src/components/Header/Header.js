import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ isLoggedIn }) {
  const location = useLocation();
  const [selector, setSelector] = useState();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelector("");
        break;
      case "/movies":
        setSelector("header_status_on-movies");
        break;
      case "/saved-movies":
        setSelector("header_status_on-movies");
        break;
      case "/profile":
        setSelector("header_status_on-movies");
        break;
      default:
        setSelector("header_status_hidden");
    }
  }, [location.pathname]);

  return (
    <header className={location.pathname === "/" ? "header" : ""}>
      <div
        className={
          !isLoggedIn
            ? `header__wrapper ${selector}`
            : `header__wrapper header_status_loggedIn ${selector}`
        }
      >
        <Logo></Logo>
        <Navigation isLoggedIn={isLoggedIn}></Navigation>
      </div>
    </header>
  );
}

export default Header;
