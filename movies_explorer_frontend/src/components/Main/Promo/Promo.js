import "./Promo.css";
import { Link } from "react-router-dom";
// import promoLogotype from "../../../images/promo-logo.svg";

// Слайд там где изображение карты
function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="promo__instruction">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <Link>Узнать больше</Link>
      {/* <img className="promo__logo" src={promoLogotype} alt="Веб Логотип"></img> */}
    </section>
  );
}

export default Promo;
