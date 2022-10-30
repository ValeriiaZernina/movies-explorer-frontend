import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isSaved }) {
  return (
    <div className="moviescard-list">
      <MoviesCard buttonText={"Сохранить"}></MoviesCard>
      <MoviesCard isSaved={true} buttonText={""}></MoviesCard>
      <MoviesCard buttonText={"Сохранить"}></MoviesCard>
      {/* <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard> */}
      <p></p>
    </div>
  );
}

export default MoviesCardList;
