import React from "react";
import { Navigate } from "react-router-dom";

const CheckRole = ({ children, roles }) => {
  localStorage.setItem("userRole", "admin");
  const userRole = localStorage.getItem("userRole");

  return roles.includes(userRole) ? children : <Navigate to={"/"} replace />;
};

export default CheckRole;