import "./Promo.css";

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
      <button className="promo__btn" type="button">
        Узнать больше
      </button>
    </section>
  );
}

export default Promo;
