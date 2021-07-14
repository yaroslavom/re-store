import React from "react";
import ErrorImg from "../../assets/image/404.png"

const ErrorIndicator = () => {
  return (
    <div className="error-boundry">
      <img src={ErrorImg} alt="404-image" />
      <h2>Sorry we can't find that page!</h2>
    </div>
  );
};

export default ErrorIndicator;
