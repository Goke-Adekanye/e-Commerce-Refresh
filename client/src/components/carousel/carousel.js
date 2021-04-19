import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import image2 from "../../assets/twist.jpg";
import image1 from "../../assets/braids.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({ productImage1, productImage2, productImage3 }) {
  const [imgSize, setImgSize] = useState("");
  const imageCon = useRef();
  const productImages = document.querySelectorAll(".carousel-content img");
  const imageContainer = document.querySelector(".carousel-content-images");

  let counter = 1;
  useEffect(() => {
    onLoad();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onLoad = () => {
    const imageContainer = document.querySelector(".carousel-content-images");
    const imgWidth = imageCon.current.offsetWidth;
    imageContainer.style.transform = `translateX(-${imgWidth * counter}px)`;
    setImgSize(imgWidth);
  };

  const nextImg = () => {
    if (counter >= productImages.length - 1) return;
    counter++;
    imageContainer.style.transform = `translateX(-${imgSize * counter}px)`;
    imageContainer.style.transition = `all 0.4s ease`;
    imageContainer.addEventListener("transitionend", () => {
      if (productImages[counter].id === "last-image") {
        counter = counter - 3;
        imageContainer.style.transition = `none`;
        imageContainer.style.transform = `translateX(-${imgSize * counter}px)`;
      }
    });
  };

  const prevImg = () => {
    if (counter <= 0) return;
    counter--;
    imageContainer.style.transform = `translateX(-${imgSize * counter}px)`;
    imageContainer.style.transition = `all 0.4s ease`;
    imageContainer.addEventListener("transitionend", () => {
      if (productImages[counter].id === "first-image") {
        counter = counter + 3;
        imageContainer.style.transition = `none`;
        imageContainer.style.transform = `translateX(-${imgSize * counter}px)`;
      }
    });
  };

  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-content">
          <div className="next-image-left" onClick={prevImg}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="next-image-right" onClick={nextImg}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="carousel-content-images">
            <img id="first-image" src={image2} alt={image2} />
            <img src={productImage1} alt={productImage1} />
            <img src={image1} alt={image1} ref={imageCon} />
            <img src={image2} alt={image2} />
            <img id="last-image" src={productImage1} alt={productImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
