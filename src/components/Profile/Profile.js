import "./Profile.css";
import { Link } from "react-router-dom";
import InputValidation from "../InputValidation/InputValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";
import InfoTooltip from "../Movies/InfoTooltip/InfoTooltip";
import { useFormWithValidation } from "../InputValidation/useFormWithValidation";
import { useInfoTooltip } from "../Movies/InfoTooltip/useInfoTooltip";
import { auth } from "../../utils/Auth";

function Profile({ onChange }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleInput, errors, isValid, resetForm } =
    useFormWithValidation();
  const onSubmit = () => {
    onChange(values.name, values.email);
  };
  const { statusInfoTooltip, openInfoTooltip, closeInfoTooltip } =
    useInfoTooltip(onSubmit);

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [resetForm, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .patchUserInfo({ name: values.name, email: values.email })
      .then(() => openInfoTooltip(true, "Данные изменены!"))
      .catch((err) => openInfoTooltip(false, `${err}`));
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__tittle">{`Привет, ${currentUser.name}!`}</h2>
        <InputValidation
          onInputEvent={handleInput}
          inputStyle="profile"
          placeholder="Введите Имя"
          minLength="2"
          maxLength="30"
          type="text"
          label="Имя"
          pattern="[a-zA-Zа-яА-Я -]*"
          id="name"
          value={values.name || ""}
          errorText={errors.name}
          required
        ></InputValidation>
        <InputValidation
          onInputEvent={handleInput}
          inputStyle="profile"
          placeholder="Введите Email"
          type="email"
          label="E-mail"
          id="email"
          value={values.email || ""}
          errorText={errors.email}
          required
        ></InputValidation>

        {/* <span
          className={`profile__error ${
            !!errorText && "profile__error_visible"
          }`}
        >
          {errorText}
        </span> */}

        <button
          className="profile__btn link"
          type="submit"
          disabled={
            !isValid ||
            (currentUser.name === values.name &&
              currentUser.email === values.email)
          }
        >
          Редактировать
        </button>
        <Link className="profile__signout link" to="/signout">
          Выйти из аккаунта
        </Link>
      </form>
      <InfoTooltip status={statusInfoTooltip} onClose={closeInfoTooltip} />
    </main>
  );
}

export default Profile;
