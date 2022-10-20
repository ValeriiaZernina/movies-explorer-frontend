import "./Logo.css";
import logo from "../../images/logotype.svg";
import { Link } from "react-router-dom";

function Logo({ onClick }) {
  return (
    <Link to="/">
      <img src={logo} className="logo" alt="Главная"></img>
    </Link>
  );
}

export default Logo;
