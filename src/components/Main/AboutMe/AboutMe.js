import Blocks from "../../Blocks/Blocks";
import "./AboutMe.css";
import avatar from "../../../images/foto.svg";

function AboutMe() {
  return (
    <Blocks blocksStyle="black" name="Студент">
      <section className="about-me__section">
        <h3 className="about-me__name">Виталий</h3>
        <p className="about-me__short">Фронтенд-разработчик, 39 лет</p>
        <p className="about-me__info">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          className="about-me__github"
          href="https://github.com/ValeriiaZernina"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img className="about-me__avatar" src={avatar} alt="фото" />
      </section>
    </Blocks>
  );
}

export default AboutMe;
