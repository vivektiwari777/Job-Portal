import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    // Redirect to dashboard if the user is already authenticated
    return <Navigate to="/dashboard" />;
  } else {
    return children;
  }
};

export default PublicRoute;
