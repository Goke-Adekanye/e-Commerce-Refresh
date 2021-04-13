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
import { Power2, gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [cart, showCart, hideCart] = useCart();
  const [displayCart, setDisplayCart] = useState(true);

  const [items, setItems] = useState([]);
  const [images, setImages] = useState();
  const [related, setRelated] = useState([]);

  const body = document.querySelector("body");
  const filter = match.params.filterType;
  const style = match.params.productType;
  const level = "2";
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
      .to(".mask", 1.4, {
        width: "0vw",
        right: "0",
        position: "fixed",
        ease: Power2.easeOut,
      });
  };
  const nextPageMask = {
    exit: {
      width: "100vw",
      left: "0",
      position: "fixed",
      transition: { delay: 0.9, duration: 0.8, ease: "easeInOut" },
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
    if (displayCart) {
      setDisplayCart(false);
      showCart();
      setTimeout(() => {
        body.style.overflow = "hidden";
      }, 1000);
    } else {
      hideCartFun();
    }
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
  const changeImg = (e) => {
    const img = e.target.src;
    setImages(img);
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
                    <aside className="product-container-left-side-content">
                      <article className="product-container-left-side-content-images">
                        <img
                          src={item.image}
                          alt={item.name}
                          onClick={changeImg}
                        />
                      </article>
                      <article className="product-container-left-side-content-images">
                        {" "}
                        <img src={image2} alt={image2} onClick={changeImg} />
                      </article>
                    </aside>
                    <div className="product-container-left-main-content">
                      <img
                        className="product-details-img"
                        src={images}
                        alt={images}
                      />
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
