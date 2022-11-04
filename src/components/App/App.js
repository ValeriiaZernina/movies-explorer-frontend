import "./App.css";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Auth from "../Auth/Auth";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { auth } from "../../utils/Auth";
import { savedMovies } from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({ loggedIn: false });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      auth
        .getUserInfo()
        .then((data) => {
          setCurrentUser((curr) => {
            return { ...curr, loggedIn: true, ...data };
          });
        })
        .catch(() => {
          navigate("/");
        });
    } else {
      setCurrentUser((curr) => {
        return { loggedIn: false };
      });
    }
    // eslint-disable-next-line
  }, []);

  // logout в случае, если любой запрос к серверу заканчивается ошибкой авторизации
  useEffect(() => {
    if (location.pathname === "./signout") {
      auth
        .logout()
        .catch((err) => alert(err))
        .finally(() => {
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("filteredMovies");
          localStorage.removeItem("filterString");
          localStorage.removeItem("isShortMovie");
          savedMovies.logoff();
          setCurrentUser((curr) => {
            return { loggedIn: false };
          });
          navigate("/");
        });
    }
    // eslint-disable-next-line
  }, [location]);

  // Обработка авторизации
  function handleLogin(data) {
    const { email, password } = data;
    auth(email, password)
      .then((data) => {
        if (data.message === "Athorization successful") {
          localStorage.setItem("loggedIn", true);
          navigate("/movies", { replace: true });
          setCurrentUser((curr) => {
            return { ...curr, loggedIn: true };
          });
        }
      })
      .catch(() => {
        setCurrentUser((curr) => {
          return { loggedIn: false };
        });
        navigate("/");
      });
  }

  function handleChangeProfile(name, email) {
    setCurrentUser((curr) => {
      return { ...curr, name, email };
    });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser} r>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
              </>
            }
          >
            <Route element={<Main></Main>}></Route>
            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route
                path="/movies"
                element={
                  <>
                    <Movies></Movies>
                  </>
                }
              ></Route>
              <Route
                path="/saved-movies"
                element={
                  <>
                    <SavedMovies></SavedMovies>
                  </>
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <>
                    <Profile onChange={handleChangeProfile}></Profile>
                  </>
                }
              ></Route>
            </Route>
          </Route>

          <Route
            path="/signin"
            element={
              <>
                <Auth formType="login" onSubmit={handleLogin}></Auth>
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <Auth formType="register" onSubmit={handleLogin}></Auth>
              </>
            }
          ></Route>
          <Route path="/signout" element={<></>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
