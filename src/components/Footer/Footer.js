import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <footer className="footer">
      {location.pathname === "./profile" ? (
        ""
      ) : (
        <>
          <p className="footer__subtitle">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__bot">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()}
            </p>
            <ul className="footer__links">
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__links-item">
                <a
                  className="footer__link"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
