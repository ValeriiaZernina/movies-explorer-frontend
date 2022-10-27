import "./Profile.css";
import { Link } from "react-router-dom";
import InputValidation from "../InputValidation/InputValidation";

function Profile() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__tittle">Привет, Виталий</h2>
        <InputValidation
          inputStyle="profile"
          type="text"
          label="Имя"
          value="Виталий"
          required
        ></InputValidation>
        <InputValidation
          inputStyle="profile"
          type="email"
          label="E-mail"
          value="vita@yandex.ru"
          required
        ></InputValidation>

        <button className="profile__btn" type="submit">
          Редактировать
        </button>
        <Link className="profile__signout" to="/signout">
          Выйти из аккаунта
        </Link>
      </form>
    </main>
  );
}

export default Profile;
