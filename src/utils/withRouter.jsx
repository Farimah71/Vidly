import React from "react";
import { useNavigate } from "react-router-dom";

const WithRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return <Component navigate={navigate} {...props} />;
  };

  return Wrapper;
};

export default WithRouter;