import "./Auth.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../InputValidation/useFormWithValidation";
import { auth } from "../../utils/Auth";
import InfoTooltip from "../Movies/InfoTooltip/InfoTooltip";
import { useInfoTooltip } from "../Movies/InfoTooltip/useInfoTooltip";
import InputValidation from "../InputValidation/InputValidation";
import Logo from "../Logo/Logo";

function Auth({ formType, authStyle, errorText, onSubmit, ...props }) {
  const { values, handleInput, errors, isValid, resetForm } =
    useFormWithValidation();
  const { statusInfoTooltip, openInfoTooltip, closeInfoTooltip } =
    useInfoTooltip(onSubmit);

  useEffect(() => {
    resetForm();
  }, [formType, resetForm]);

  function handleRegister({ name, email, password }) {
    auth
      .register({ name, email, password })
      .then(() => auth.login({ email, password }))
      .then(() => {
        openInfoTooltip(true, "Вы успешно зарегистрировались!");
      })
      .catch((err) => {
        openInfoTooltip(false, err);
      });
  }

  function handleLogin({ email, password }) {
    auth
      .login({ email, password })
      .then(() => {
        openInfoTooltip(true, "Вход выполнен!");
      })
      .catch((err) => {
        openInfoTooltip(false, err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formType === "login") {
      handleLogin(values);
    } else {
      handleRegister(values);
    }
  }

  return (
    <main className="auth">
      <Logo></Logo>
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="auth__title">
          {formType === "login" ? "Рады видеть!" : "Добро пожаловать!"}
        </h2>
        {formType === "login" ? (
          ""
        ) : (
          <InputValidation
            inputStyle="auth"
            required
            onInputEvent={handleInput}
            type="text"
            pattern="[a-zA-Zа-яА-Я -]*"
            minLength="2"
            maxLength="30"
            placeholder="Введите Имя"
            id="name"
            value={values.name || ""}
            errorText={errors.name}
            label="Имя"
          ></InputValidation>
        )}
        <InputValidation
          type="email"
          inputStyle="auth"
          required
          onInputEvent={handleInput}
          placeholder="Введите Email"
          id="email"
          value={values.email || ""}
          errorText={errors.email}
          label="E-mail"
        ></InputValidation>
        <InputValidation
          type="password"
          inputStyle="auth"
          required
          onInputEvent={handleInput}
          placeholder="Введите Пароль"
          label="Пароль"
          id="password"
          value={values.password || ""}
          errorText={errors.password}
        ></InputValidation>

        <button className="auth__btn link" type="submit" disabled={!isValid}>
          {formType === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
        <div className="auth__signin-box">
          <h3 className="auth__question">
            {formType === "login"
              ? "Еще не зарегистрированы?"
              : "Уже зарегистрированы?"}
          </h3>
          <Link
            className="auth__link"
            to={formType === "login" ? "/signup" : "/signin"}
          >
            {formType === "login" ? "Регистрация" : "Войти"}
          </Link>
        </div>
      </form>
      <InfoTooltip
        status={statusInfoTooltip}
        onClose={closeInfoTooltip}
      ></InfoTooltip>
    </main>
  );
}

export default Auth;
