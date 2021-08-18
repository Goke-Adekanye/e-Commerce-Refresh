import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({ slides }) {
  useEffect(() => {
    console.log(slides);
  }, [slides]); // eslint-disable-line react-hooks/exhaustive-deps

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {slides.map((slide, index) => {
        return (
          <div
            className={`${"slide"} ${index === current ? "active" : null}`}
            key={index}
          >
            <div className="icon_left" onClick={prevSlide}>
              {" "}
              <FontAwesomeIcon icon={faChevronLeft} className="icon " />
            </div>
            <div className="icon_right " onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
            </div>
            {index === current && (
              <img src={slide.image} alt="product" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
