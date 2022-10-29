import "./ProfileLink.css";
import { Link } from "react-router-dom";
import ProfileBtn from "../ProfileBtn/ProfileBtn";

function ProfileLink({ linkType, ...props }) {
  return (
    <Link
      to="/profile"
      className={`profile-link profile-link_style_${linkType}`}
      {...props}
    >
      <p className="profile-link__account">Аккаунт</p>
      <ProfileBtn></ProfileBtn>
    </Link>
  );
}

export default ProfileLink;
