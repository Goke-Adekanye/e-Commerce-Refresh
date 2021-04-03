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

{
  /* <button
className="add-button"
type="button"
onClick={() => {
  setShowCart(true);
  addItem();
  setTimeout(() => {
    body.style.overflow = "hidden";
  }, 1000);
  // setTimeout(() => {
  //   setAddedCart(item.name);
  //   setShowCart(true);
  // }, 100);
  // setTimeout(() => {
  //   setShowCart(false);
  // }, 1200);
  // dispatch({
  //   type: ADD,
  //   payload: {
  //     name: item.name,
  //     price: item.price,
  //     description: item.description,
  //     item_img: item.image,
  //   },
  // });
}}
>
Add to Cart{" "}
<span>
  {" "}
  <FontAwesomeIcon icon={faShoppingCart} />{" "}
</span>
</button> */
}
