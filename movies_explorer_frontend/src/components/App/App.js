import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
import { route } from "express/lib/application";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
