import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/saved-movies" element={<SavedMovies />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signin" element={<Register />}></Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
