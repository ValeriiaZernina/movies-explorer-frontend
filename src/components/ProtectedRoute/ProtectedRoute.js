import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProtectedRoute() {
  const currentUser = useContext(CurrentUserContext);

  return currentUser.loggedIn ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/signin"></Navigate>
  );
}

export default ProtectedRoute;
