import React from "react";
import ErrorImg from "../../assets/image/404.png";
import './error-indicator.css'

const ErrorIndicator = () => {
  return (
    <div className="error-boundry">
      <img src={ErrorImg} alt="404" className="error-img"/>
      <span className="error-title">Sorry, we can't find this page!</span>
    </div>
  );
};

export default ErrorIndicator;
