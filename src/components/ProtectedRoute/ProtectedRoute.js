import React, { useContext } from "react";
import { Outlet, Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProtectedRoute() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Route>
      {() => (currentUser.loggedIn ? <Outlet /> : <Redirect to="/" />)}
    </Route>
  );
}

export default ProtectedRoute;
