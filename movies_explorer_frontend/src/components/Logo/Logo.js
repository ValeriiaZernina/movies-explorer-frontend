import "./Logo.css";
import { Link } from "react-router-dom";

function Logo({ onClick }) {
  return (
    <Link to="/">
      <div className="logo"></div>
    </Link>
  );
}

export default Logo;
