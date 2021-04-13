import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Button({ func }) {
  return (
    <button className="add-button" type="button" onClick={func}>
      Add to Cart{" "}
      <span>
        {" "}
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </span>
    </button>
  );
}

export default Button;
