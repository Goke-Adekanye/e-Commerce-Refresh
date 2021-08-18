import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import MobileNav from "../mobileNav/mobileNav";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { Power2, gsap } from "gsap";

const mapState = (state) => {
  return {
    totalNumberCart: selectCartItemsCount(state),
  };
};

const Navbar = ({
  func,
  miniNav,
  mobileNavFunc1,
  mobileNavFunc2,
  mobileNavFunc3,
}) => {
  const { totalNumberCart } = useSelector(mapState);
  const [navFixed, setNavFixed] = useState();
  const history = useHistory();
  let click = [];
  let numberCart = null;

  useEffect(() => {
    setNavFixed(mobileNavFunc3);

    if (navFixed === true) {
      show();
      setNavFixed(false);
    } else {
      hide();
      setNavFixed(true);
    }
  }, [mobileNavFunc3]); // eslint-disable-line react-hooks/exhaustive-deps
  gsap.config({
    nullTargetWarn: false,
  });
  history.location.pathname === "/"
    ? click.push("noClick")
    : click.push("Click");

  if (totalNumberCart === 0) {
    numberCart = null;
  } else {
    numberCart = totalNumberCart;
  }
  function show() {
    // Animation 13
    gsap.timeline().to(".nav", 2, {
      position: "fixed",
      top: "0rem",
      delay: "1",
    });
  }
  function hide() {
    // Animation 13
    gsap
      .timeline()
      .to(".nav", 1, {
        ease: Power2.easeInOut,
      })
      .to(".nav", 0.1, {
        position: "relative",
      });
  }

  return (
    <>
      <MobileNav />
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
    </>
  );
};

export default Navbar;
