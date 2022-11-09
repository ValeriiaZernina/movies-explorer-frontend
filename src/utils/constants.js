const URL = "http://localhost:4000";
// const URL = "https://api.zernina.nomoredomains.icu";
const MOVIES_URL = "https://api.nomoreparties.co";
const SHORT_DURATION = 40;

function getCountMovies() {
  const width = document.documentElement.clientWidth;
  const result = {
    row:
      width >= 1470
        ? Math.floor((width - 120) / 270)
        : width >= 1200
        ? 3
        : width >= 870
        ? 2
        : width >= 590
        ? 2
        : 1,
  };

  result.next = result.row === 1 ? 2 : 1;
  result.first = result.row === 1 ? 5 : 4;

  return result;
}

function convertMinutesToHours(duration) {
  const hours = Math.floor(duration / 60),
    minutes = duration % 60;

  return `${hours > 0 ? `${hours}ч ` : ""}${minutes}м`;
}

export {
  URL,
  MOVIES_URL,
  SHORT_DURATION,
  getCountMovies,
  convertMinutesToHours,
};
