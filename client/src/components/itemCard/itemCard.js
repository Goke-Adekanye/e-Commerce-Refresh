import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function ItemCard({ item, index, to }) {
  return (
    <>
      <div
        className={`type-product-container ${index % 2 !== 0 ? "odd" : "even"}`}
        key={item._id}
      >
        {}
        <div className="type-product-section">
          <Link to={to}>
            <div className="product-img">
              {" "}
              <img className="image3" src={item.image} alt={item.name} />{" "}
            </div>
          </Link>
          <div className="type-product-name">{item.name}</div>
          <div className="type-product-price"> ₦ {item.price} </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
