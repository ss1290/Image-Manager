import { redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  const { loading } = useSelector((state) => state.Image);
  useEffect(() => {
    if (isAuthenticated === false) {
      redirect("/login");
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default ProtectedRoute;
