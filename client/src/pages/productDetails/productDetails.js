import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import MiniNav from "../../components/miniNav/miniNav";
import Cart from "../../components/cart/cart";
import AddButton from "../../components/buttons/button";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import useCart from "../../hooks/useCart";
import { connect } from "react-redux";
import { ADD } from "../../redux/cart/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import image2 from "../../assets/twist.jpg";
import image1 from "../../assets/locs.jpg";
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [cart, showCart, hideCart] = useCart();
  const [displayCart, setDisplayCart] = useState(true);
  const [items, setItems] = useState([]);
  const [images, setImages] = useState();
  const [related, setRelated] = useState([]);

  const productImages = document.querySelectorAll(
    ".product-container-left-content img"
  );

  const imageContainer = document.querySelector(
    ".product-container-left-content-images"
  );

  const body = document.querySelector("body");
  const filter = match.params.filterType;
  const style = match.params.productType;
  const level = "2";
  let counter = 0;
  let from;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchItems();
    fetchRelated();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  items.map((item) => {
    return (from = item.name);
  });

  function fetchItems() {
    hideMask();
    showLoader();
    axios
      .get(
        `http://localhost:3001/${match.params.productType}/${match.params.productId}/details`
      )
      .then((response) => {
        setItems([response.data]);
        setImages(response.data.image);
        hideLoader();
      });
  }

  function fetchRelated() {
    axios
      .get(
        `http://localhost:3001/${match.params.productType}/${match.params.productId}/related`
      )
      .then((response) => {
        setRelated(response.data);
      });
  }

  const hideMask = () => {
    // Animation 12
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".mask", 2, {
        width: "0vw",
        left: "0",
        position: "fixed",
        ease: Power2.easeInOut,
      })
      .call(() => {
        body.style.overflow = "unset";
      });
  };
  const nextPageMask = {
    exit: {
      width: "100vw",
      left: "0",
      position: "fixed",
      transition: { delay: 0.4, duration: 2, ease: Power2.easeInOut },
    },
  };
  const addItem = () => {
    items.map((item) => {
      dispatch({
        type: ADD,
        payload: {
          name: item.name,
          price: item.price,
          description: item.description,
          item_img: item.image,
        },
      });
      return items;
    });
  };
  const cartFun = () => {
    if (displayCart === true) {
      setDisplayCart(false);
      showCart();
      setTimeout(() => {
        body.style.overflow = "hidden";
      }, 1000);
    } else {
      hideCartFun();
    }
    console.log(displayCart);
  };
  const hideCartFun = () => {
    setDisplayCart(true);
    hideCart();
    setTimeout(() => {
      body.style.overflow = "unset";
    }, 1000);
  };
  const btnFun = () => {
    cartFun();
    addItem();
  };
  const nextImg = () => {
    const imgWidth = productImages[1].offsetWidth;
    if (counter >= productImages.length - 1) return;
    counter++;
    imageContainer.style.transform = `translateX(-${imgWidth * counter}px)`;
    imageContainer.style.transition = `all 0.4s ease`;
    imageContainer.addEventListener("transitionend", () => {
      if (productImages[counter].id === "last-image") {
        counter = counter - 3;
        imageContainer.style.transition = `none`;
        imageContainer.style.transform = `translateX(-${imgWidth * counter}px)`;
      }
    });
    console.log(counter);
  };
  const prevImg = () => {
    const imgWidth = productImages[1].offsetWidth;
    if (counter == 0) return;
    counter--;

    imageContainer.style.transform = `translateX(-${imgWidth * counter}px)`;
    imageContainer.style.transition = `all 0.4s ease`;
    imageContainer.addEventListener("transitionend", () => {
      if (productImages[counter].id === "first-image") {
        counter = counter + 3;
        imageContainer.style.transition = `none`;
        imageContainer.style.transform = `translateX(-${imgWidth * counter}px)`;
      }
    });

    console.log(counter);
  };
  return (
    <div className="container">
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
      ></motion.div>
      {loader}
      <Navbar
        func={() => {
          cartFun();
        }}
      />

      <div className="product-main">
        <MiniNav level={level} style={style} filter={filter} product={from} />
        <div className="product-body">
          {items.map((item) => {
            return (
              <div className="product-container" key={item._id}>
                <div className="product-container-top" key={item._id}>
                  <div className="product-container-left">
                    <div className="product-container-left-content">
                      <div className="next-image-left">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          onClick={prevImg}
                        />
                      </div>
                      <div className="next-image-right">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          onClick={nextImg}
                        />
                      </div>
                      <div className="product-container-left-content-images">
                        <img
                          id="first-image"
                          className="product-details-img"
                          src={item.image}
                          alt={images}
                        />
                        <img src={image1} alt={item.name} />
                        <img src={image2} alt={image2} />
                        <img id="last-image" src={item.image} alt={images} />
                      </div>
                    </div>
                  </div>
                  <div className="product-container-right">
                    <div className="product-name"> {item.name} </div>
                    <div className="product-price"> Price : ₦{item.price} </div>
                    <div className="product-add">
                      <AddButton func={btnFun} />
                    </div>
                    <div className="product-detail" key={item._id}>
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className="product-container-bottom">
                  <div className="related-products-head">Related Products</div>
                  <div className="related-products-body">
                    {related.map((relatedItem) => {
                      return (
                        <div className="related-products" key={relatedItem._id}>
                          <div className="type-product-section">
                            <Link
                              key={relatedItem._id}
                              to={`/${relatedItem.type}/newIn/${relatedItem._id}/details`}
                            >
                              <div className="related-product-img">
                                {" "}
                                <img
                                  className="image3"
                                  src={relatedItem.image}
                                  alt={relatedItem.name}
                                />
                              </div>
                            </Link>
                            <div className="related-product-name">
                              {relatedItem.name}
                            </div>
                            <div className="related-product-price">
                              ₦{relatedItem.price}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      {cart}
      <Cart
        func={() => {
          hideCartFun();
        }}
      />
    </div>
  );
}

export default connect()(ProductDetails);
