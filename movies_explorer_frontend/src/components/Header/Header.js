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
      {}
    </header>
  );
}

export default Header;
