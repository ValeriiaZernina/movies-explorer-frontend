import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <MoviesCard></MoviesCard>
      <MoviesCard isLiked={true}></MoviesCard>
      <MoviesCard></MoviesCard>
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
