import "./PortfolioLinks.css";
import arrow from "../../../../images/arrow.svg";

function PortfolioLinks({ name, link, ...props }) {
  return (
    <a className="portfolio__link" target="_blank" rel="noreferrer" {...props}>
      <p className="portfolio-link__name">{name}</p>
      <img className="portfolio-link__image" src={arrow} alt="стрелка"></img>
    </a>
  );
}

export default PortfolioLinks;
