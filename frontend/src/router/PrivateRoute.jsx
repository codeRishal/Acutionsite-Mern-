import React from "react";
import { Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";


export const PrivateRoute = ({ children }) => {
  // Example authentication check - replace with your actual auth logic
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container fluid className="p-0">
      {children}
    </Container>
  );
};