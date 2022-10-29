import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <div className="pageNotFound">
      <h2 className="pageNotFound__header">404</h2>
      <p className="pageNotfound__message">Страница не найдена</p>
      <button className="pageNotfound__back" onClick={handleClick}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
