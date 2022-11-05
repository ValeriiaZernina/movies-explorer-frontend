import Api from "./Api";
import { URL } from "./constants";

class Auth extends Api {
  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkResponseStatus(res));
  }

  patchUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }).then((res) => this._checkResponseStatus(res));
  }

  login({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._checkResponseStatus(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then((res) => this._checkResponseStatus(res));
  }

  logout() {
    return fetch(`${this._url}/signout`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
    }).then((res) => this._checkResponseStatus(res));
  }
}

const auth = new Auth(URL);

export { auth };
