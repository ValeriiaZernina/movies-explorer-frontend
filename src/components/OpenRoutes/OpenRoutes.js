import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// Закрывает роуты signup и signin если пользователь авторизован
const OpenRoutes = ({ isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  return !currentUser.loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default OpenRoutes;
