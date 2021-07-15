import React from "react";
import ErrorImg from "../../assets/image/404.png";
import './error-indicator.css'

const ErrorIndicator = () => {
  return (
    <div className="error-boundry">
      <img src={ErrorImg} alt="404" className="error-img"/>
      <p>Sorry we can't find that page!</p>
    </div>
  );
};

export default ErrorIndicator;
