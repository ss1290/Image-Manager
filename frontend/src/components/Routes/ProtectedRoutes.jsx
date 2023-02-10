import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
