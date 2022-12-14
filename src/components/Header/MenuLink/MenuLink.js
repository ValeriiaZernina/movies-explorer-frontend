import "./MenuLink.css";
import { Link } from "react-router-dom";

function MenuLink({ subtitle, linkType, activated, ...props }) {
  return (
    <Link
      className={
        `menu-link menu-link_style_${linkType}` +
        `${activated ? `menu-link_style_${linkType}_activated` : ""}`
      }
      {...props}
    >
      {subtitle}
    </Link>
  );
}

export default MenuLink;
