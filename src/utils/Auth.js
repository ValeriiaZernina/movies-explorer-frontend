import Api from "./Api";
import { URL } from "./constants";

class Auth extends Api {
  register(name, email, password) {
    return fetch(`${this._baseURL}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkResponseStatus(res));
  }

  patchUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }).then((res) => this._checkResponseStatus(res));
  }

  login(email, password) {
    return fetch(`${this._baseURL}/signin`, {
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
    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then((res) => this._checkResponseStatus(res));
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
    }).then((res) => this._checkResponseStatus(res));
  }
}

const auth = new Auth({
  baseURL: URL,
});

export { auth };