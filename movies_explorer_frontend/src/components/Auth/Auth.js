import "./Auth.css";
import { Link } from "react-router-dom";
import InputValidation from "../InputValidation/InputValidation";
import Logo from "../Logo/Logo";

function Auth({ formType }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="Auth">
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
          ></InputValidation>
        )}
        <InputValidation
          type="email"
          inputStyle="auth"
          type="email"
          value="pochta@yandex.ru"
          label="E-mail"
        ></InputValidation>
        <InputValidation
          type="password"
          inputStyle="auth"
          type="password"
          value="xxx"
          label="Password"
        ></InputValidation>

        <button className="auth__btn" type="submit">
          {formType === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
        <div>
          <h3></h3>
          <Link></Link>
        </div>
      </form>
    </main>
  );
}

export default Auth;
