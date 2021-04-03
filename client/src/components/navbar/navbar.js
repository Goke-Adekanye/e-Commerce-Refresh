import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { connect, useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

const Navbar = ({ itemName, showItem, func }) => {
  const { totalNumberCart } = useSelector(mapStateToProps);
  const [displayCart, setDisplayCart] = useState(true);

  const history = useHistory();

  let click = [];
  let numberCart = null;
  history.location.pathname === "/"
    ? click.push("noClick")
    : click.push("Click");

  if (totalNumberCart === 0) {
    numberCart = null;
  } else {
    numberCart = totalNumberCart;
  }

  return (
    <div>
      <header>
        <nav className="nav">
          <ul className={`nav-links`}>
            <li>
              <Link to={`/`}>
                {" "}
                <div className="logo"> FRUGAL </div>{" "}
              </Link>
            </li>

            <li className="badge1" data-badge={numberCart}>
              <div className={`cart-icon ${click}`}>
                {" "}
                <FontAwesomeIcon icon={faOpencart} onClick={func} />
                <div className={`alert ${showItem ? "alert-show" : ""}`}>
                  <div className="alert-container">
                    <div className="alert-head"></div>
                    <div className="alert-head-trans"></div>
                    <div className="alert-body">
                      <span>
                        {" "}
                        <h1>{itemName}</h1> has been added to cart!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    number: state.cart.length,
    totalNumberCart: selectCartItemsCount(state),
  };
};
export default connect(mapStateToProps)(Navbar);
