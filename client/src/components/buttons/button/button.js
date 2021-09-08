import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Button({ func, to, text, nameClass, noLink }) {
  if (noLink) {
    return (
      <button className={`button ${nameClass} `} type="button" onClick={func}>
        <span>{text}</span>
      </button>
    );
  }
  return (
    <Link to={to}>
      <button className={`button ${nameClass} `} type="button" onClick={func}>
        <span>{text}</span>
      </button>
    </Link>
  );
}

export default Button;
