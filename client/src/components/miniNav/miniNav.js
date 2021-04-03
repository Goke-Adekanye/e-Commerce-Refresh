import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const MiniNav = ({ level, style, filter, product }) => {
  let filterName;
  if (filter === "newIn") {
    filterName = "New In";
  } else if (filter === "highLow") {
    filterName = "High to Low";
  } else if (filter === "lowHigh") {
    filterName = "Low to High";
  }

  if (level === "1") {
    return (
      <nav className="mini-nav">
        <h3>
          <Link to="/"> Home </Link>{" "}
          <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
          <span className="present">
            {" "}
            {style} ( {filterName} ){" "}
          </span>
        </h3>
      </nav>
    );
  } else if (level === "2") {
    return (
      <nav className="mini-nav">
        <h3>
          <Link to="/"> Home </Link>{" "}
          <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
          <Link to={`/${style}/${filter}`}>
            {" "}
            {style} ( {filterName} ){" "}
          </Link>{" "}
          <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
          <span className="present"> {product} </span>{" "}
        </h3>
      </nav>
    );
  } else if (level === "3") {
    return (
      <nav className="mini-nav">
        <h3>
          <Link to="/"> Home </Link>{" "}
          <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
          <span className="present"> Cart </span>
        </h3>
      </nav>
    );
  }
};
export default MiniNav;
