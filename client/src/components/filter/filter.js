import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
const Filter = ({ style, filter }) => {
  const history = useHistory(); // eslint-disable-line react-hooks/exhaustive-deps
  const [clickButton, setClickButton] = useState(true);
  let filterName;
  let nextFilter;

  const loadStyle = (e) => {
    const number = e.target.value;
    if (number === 0) {
      nextFilter = "newIn";
      history.push(`/${style}/${nextFilter}`);
    } else if (number === 1) {
      nextFilter = "highLow";
      history.push(`/${style}/${nextFilter}`);
    } else if (number === 2) {
      nextFilter = "lowHigh";
      history.push(`/${style}/${nextFilter}`);
    }
  };

  const handleChange = () => {
    if (clickButton === true) {
      setClickButton(false);
    } else if (clickButton === false) {
      setClickButton(true);
    }
  };

  if (filter === "newIn") {
    filterName = "New In";
  } else if (filter === "highLow") {
    filterName = "High to Low";
  } else if (filter === "lowHigh") {
    filterName = "Low to High";
  }

  return (
    <>
      <div className="filter-change-head">
        <button className="filter-change-button" onClick={handleChange}>
          {" "}
          {filterName}{" "}
          <span
            className={` ${
              clickButton ? "button-span-off" : " button-span-on"
            }`}
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </span>
        </button>
        <ul
          className={`filter-change-body ${
            clickButton ? "filter-disappear" : "filter-appear"
          }`}
          onClick={() => {
            setClickButton(false);
          }}
        >
          <li onClick={loadStyle} value="0">
            New In
          </li>
          <li onClick={loadStyle} value="1">
            High to Low
          </li>
          <li onClick={loadStyle} value="2">
            Low to High
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filter;
