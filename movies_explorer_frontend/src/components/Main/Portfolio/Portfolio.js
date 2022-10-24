import "./Portfolio.css";
import PortfolioLinks from "./PortfolioLinks/PortfolioLinks";
import Blocks from "../../Blocks/Blocks";

function Portfolio() {
  return (
    <Blocks name="Портфолио" titleStyle="light">
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <PortfolioLinks
            href="https://github.com/ValeriiaZernina/how-to-learn"
            name="Статичный сайт"
          ></PortfolioLinks>
        </li>
        <li className="portfolio__list-item">
          <PortfolioLinks
            href="https://github.com/ValeriiaZernina/russian-travel"
            name="Адаптивный сайт"
          ></PortfolioLinks>
        </li>
        <li className="portfolio__list-item">
          <PortfolioLinks
            href="https://github.com/ValeriiaZernina/react-mesto-api-full"
            name="Одностраничное приложение"
          ></PortfolioLinks>
        </li>
      </ul>
    </Blocks>
  );
}

export default Portfolio;
