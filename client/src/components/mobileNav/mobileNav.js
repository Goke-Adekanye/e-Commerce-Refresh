import React from "react";
import "./style.css";

const MobileNav = () => {
  return (
    <>
      <div className="overlay2"></div>
      <nav className={`mobile-nav`}>
        <div></div>
        <ul className={`mobile-links`}>
          <li className={`mobile-locs`}>Locs</li>
          <li className={`mobile-twists`}>Twists</li>
          <li className={`mobile-weaves`}>Weaves</li>
          <li className={`mobile-braids`}>Braids</li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
