import Blocks from "../../Blocks/Blocks";
import AboutProjectList from "../AboutProjectList/AboutProjectList";
import "./AboutProject.css";

function AboutProject() {
  return (
    <Blocks blocksStyle="black" name="О проекте">
      <div className="about-project__description">
        <AboutProjectList
          title="Дипломный проект включал 5 этапов"
          text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
        ></AboutProjectList>
        <AboutProjectList
          title="На выполнение диплома ушло 5 недель"
          text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
        ></AboutProjectList>
      </div>

      <div className="about-project__graph">
        <p className="about-project__graph-item about-project__graph-item_first_text">
          1 неделя
        </p>
        <p className="about-project__graph-item about-project__graph-item_second_text">
          4 недели
        </p>
        <p className="about-project__graph-item about-project__graph-item_span">
          Back-end
        </p>
        <p className="about-project__graph-item about-project__graph-item_span">
          Front-end
        </p>
      </div>
    </Blocks>
  );
}

export default AboutProject;
