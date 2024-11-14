import React from "react";
import { Navigate } from "react-router-dom";

const IsAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken");
  return true ? children : <Navigate to="/login"></Navigate>;
};

export default IsAuth;