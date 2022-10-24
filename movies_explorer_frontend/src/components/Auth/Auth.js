import "./Auth.css";
import { Link } from "react-router-dom";
import InputValidation from "../InputValidation/InputValidation";
import Logo from "../Logo/Logo";

function Auth({ formType }) {
  function handleSubmit(e) {
    e.preventDefault();
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
            type="text"
            value="Виталий"
            label="Имя"
            required
          ></InputValidation>
        )}
        <InputValidation
          type="email"
          inputStyle="auth"
          type="email"
          value="pochta@yandex.ru"
          label="E-mail"
          required
        ></InputValidation>
        <InputValidation
          type="password"
          inputStyle="auth"
          type="password"
          value="xxx"
          label="Password"
          required
        ></InputValidation>

        <button className="auth__btn" type="submit">
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
    </main>
  );
}

export default Auth;
