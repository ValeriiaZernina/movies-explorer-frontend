import React, { useContext } from "react";
import { Outlet, Route, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProtectedRoute() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Route>
      {() => (currentUser.loggedIn ? <Outlet /> : <Navigate to="/" />)}
    </Route>
  );
}

export default ProtectedRoute;
