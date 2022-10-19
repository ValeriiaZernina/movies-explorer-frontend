import Blocks from "../../Blocks/Blocks";
import AboutProjectList from "../AboutProjectList/AboutProjectList";
import "./AboutProject.css";

function AboutProject() {
  return (
    <Blocks name="О проекте">
      <div className="about-project__description">
        <AboutProjectList
          title="Дипломный проект включал 5 этапов"
          text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
        ></AboutProjectList>
      </div>
    </Blocks>
  );
}

export default AboutProject;
