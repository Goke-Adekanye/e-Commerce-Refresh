import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MobileNav = () => {
  return (
    <>
      <nav className={`mobile-nav`}>
        <div></div>
        <ul className={`mobile-links`}>
          <li className={`mobile-locs`}>
            {" "}
            <Link to="/locs/newIn">
              <p>Locs</p>
            </Link>
          </li>
          <li className={`mobile-twists`}>
            <Link to="/twists/newIn">
              <p>Twists</p>
            </Link>
          </li>
          <li className={`mobile-weaves`}>
            <Link to="/weaves/newIn">
              <p>Weaves</p>
            </Link>
          </li>
          <li className={`mobile-braids`}>
            <Link to="/braids/newIn">
              <p> Braids</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
