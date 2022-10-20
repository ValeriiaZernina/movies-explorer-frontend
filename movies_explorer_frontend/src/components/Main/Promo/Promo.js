import "./Promo.css";
import promoLogotype from "../../../images/promo-logo.svg";

// Слайд там где изображение карты
function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__logo" src={promoLogotype} alt="Веб Логотип"></img>
    </section>
  );
}

export default Promo;
