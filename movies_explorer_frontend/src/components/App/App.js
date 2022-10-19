import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Register from "../Register/Register";
// import Login from "../Login/Login";
// import Profile from "../Profile/Profile";
// import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Main></Main>
              <Footer></Footer>
            </>
          }
        ></Route>
        {/* <Route path="/movies" element={<Movies />}></Route>
          <Route path="/saved-movies" element={<SavedMovies />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signin" element={<Register />}></Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
