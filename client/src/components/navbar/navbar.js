import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import MobileNav from "../mobileNav/mobileNav";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

const mapState = (state) => {
  return {
    totalNumberCart: selectCartItemsCount(state),
  };
};

const Navbar = ({ func, miniNav, mobileNavFunc1, mobileNavFunc2 }) => {
  const { totalNumberCart } = useSelector(mapState);
  const [close, setClose] = useState(true);
  const history = useHistory();
  let click = [];
  let numberCart = null;

  useEffect(() => {
    console.log(miniNav);
  }, []);

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
      <MobileNav func={close} />
      <header>
        <nav className="nav">
          <ul className={`nav-links`}>
            <li>
              <Link to={`/`}>
                {" "}
                <div className="logo"> FRUGAL </div>{" "}
              </Link>
            </li>

            <li className="nav-right">
              <div
                className={`cart-icon ${click} badge1`}
                data-badge={numberCart}
              >
                {" "}
                <FontAwesomeIcon icon={faOpencart} onClick={func} />
              </div>
              <div
                className={`nav-toggle ${
                  mobileNavFunc2 ? "open-nav" : "close-nav"
                }`}
                onClick={mobileNavFunc1}
              >
                <div className="nav-top"></div>
                <div className="nav-bottom"></div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
