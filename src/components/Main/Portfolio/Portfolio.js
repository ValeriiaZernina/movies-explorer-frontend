import "./Portfolio.css";
import PortfolioLinks from "./PortfolioLinks/PortfolioLinks";
import Blocks from "../../Blocks/Blocks";

function Portfolio() {
  return (
    <Blocks name="Портфолио" titleStyle="light">
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <PortfolioLinks
            href="https://valeriiazernina.github.io/how-to-learn/index.html"
            name="Статичный сайт"
          ></PortfolioLinks>
        </li>
        <li className="portfolio__list-item">
          <PortfolioLinks
            href="https://valeriiazernina.github.io/russian-travel/index.html"
            name="Адаптивный сайт"
          ></PortfolioLinks>
        </li>
        <li className="portfolio__list-item">
          <PortfolioLinks
            href="https://valeriiazernina.github.io/mesto/index.html"
            name="Одностраничное приложение"
          ></PortfolioLinks>
        </li>
      </ul>
    </Blocks>
  );
}

export default Portfolio;
