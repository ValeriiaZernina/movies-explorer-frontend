import "./Techs.css";
import Blocks from "../../Blocks/Blocks";

function Techs() {
  return (
    <Blocks
      blocksStyle="grey"
      titleStyle="grey"
      name="Технологии"
      itemStyle="tech"
    >
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__info">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </Blocks>
  );
}

export default Techs;
