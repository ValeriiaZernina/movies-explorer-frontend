export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = {
      "Content-Type": "application/json",
    };
    // тело конструктора
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
