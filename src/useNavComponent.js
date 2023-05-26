import React, { Children } from "react";
import { Navigate } from "react-router";

const UseNavComponent = ({ children, to }) => {
  const prevRoute = useLocation();
  return (
    <Navigate to={to} state={{ prevRoute }} replace>
      {children}
    </Navigate>
  );
};

export default UseNavComponent;
