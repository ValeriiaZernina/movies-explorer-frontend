import "./PortfolioLinks.css";

function PortfolioLinks({ name, link, ...props }) {
  return (
    <a className="portfolio__link" target="_blank" rel="noreferrer" {...props}>
      <p className="portfolio-link__name">{name}</p>
      <div className="portfolio-link__image"></div>
    </a>
  );
}

export default PortfolioLinks;
