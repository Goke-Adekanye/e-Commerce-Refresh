import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { CLICKED_TRUE, CLICKED_FALSE } from "../../redux/cart/types/types";
import Cart from "../../components/cart/cart";
import MobileNav from "../mobileNav/mobileNav";
import useCart from "../../hooks/useCart";
import useMobileNav from "../../hooks/useMobileNav";
import { selectCartItemsCount } from "../../redux/cart/selector/cartSelector";

const mapState = (state) => {
  return {
    totalNumberCart: selectCartItemsCount(state),
    cartState: state.showCart.showCart.state,
  };
};

const Navbar = () => {
  const { totalNumberCart, cartState } = useSelector(mapState);
  const dispatch = useDispatch();
  const [displayMobileNav, hideMobileNav] = useMobileNav();
  const [displayCart, hideCart] = useCart();
  const history = useHistory();
  const [cart, setCart] = useState(cartState);
  const [showMobileNav, setShowMobileNav] = useState(true);

  let click = [];
  let numberCart = null;

  useEffect(() => {
    setCart(cartState);
  }, [cartState]); // eslint-disable-line react-hooks/exhaustive-deps

  history.location.pathname === "/"
    ? click.push("noClick")
    : click.push("Click");

  if (totalNumberCart === 0) {
    numberCart = null;
  } else {
    numberCart = totalNumberCart;
  }

  const cartFun = () => {
    if (showMobileNav) {
      cart ? showCartFun() : hideCartFun();
    } else {
      return null;
    }
  };
  const showCartFun = () => {
    displayCart();
    dispatch({
      type: CLICKED_FALSE,
      payload: {
        state: false,
      },
    });
  };
  const hideCartFun = () => {
    hideCart();
    dispatch({
      type: CLICKED_TRUE,
      payload: {
        state: true,
      },
    });
  };

  const mobileNav = () => {
    if (cart) {
      showMobileNav ? setShowMobileNav(false) : setShowMobileNav(true);
      showMobileNav ? displayMobileNav() : hideMobileNav();
    } else {
      return null;
    }
  };
  return (
    <>
      <Cart />
      <MobileNav />
      <div className="overlay" onClick={hideCartFun}></div>
      <header>
        <nav className={`nav `}>
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
                <FontAwesomeIcon icon={faOpencart} onClick={cartFun} />
              </div>
              <div
                className={`nav-toggle ${
                  showMobileNav ? "open-nav" : "close-nav"
                }`}
                onClick={mobileNav}
              >
                <div className="nav-top"></div>
                <div className="nav-bottom"></div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
