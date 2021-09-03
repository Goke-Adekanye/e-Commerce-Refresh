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
            <Link to="/locs/newIn">Locs</Link>
          </li>
          <li className={`mobile-twists`}>
            <Link to="/twists/newIn">Twists</Link>
          </li>
          <li className={`mobile-weaves`}>
            <Link to="/weaves/newIn">Weaves</Link>
          </li>
          <li className={`mobile-braids`}>
            <Link to="/braids/newIn">Braids</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
