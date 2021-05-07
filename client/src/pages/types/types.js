import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/footer";
import MiniNav from "../../components/miniNav/miniNav";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import useCart from "../../hooks/useCart";
import Navbar from "../../components/navbar/navbar";
import MobileNav from "../../components/mobileNav/mobileNav";
import useMobileNav from "../../hooks/useMobileNav";
import axios from "axios";
import { Power2, gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cart from "../../components/cart/cart";

gsap.registerPlugin(ScrollTrigger);

function Type({ match }) {
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState([]);
  const [click, setClick] = useState("noMore");
  const [displayCart, setDisplayCart] = useState(true);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [cart, showCart, hideCart] = useCart();
  const [clickButton, setClickButton] = useState(true);
  const [displayNav, hideNav] = useMobileNav();
  const [showNav, setShowNav] = useState(true);
  const body = document.querySelector("body");
  const filter = match.params.filterType;
  const style = match.params.productType;
  const level = "1";
  let filterName;
  let nextFilter;

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function fetchItems() {
    hideMask();
    showLoader();
    axios
      .get(`http://localhost:3001/${style}/${filter}`, {
        params: {
          page: 1,
          limit: 4,
        },
      })
      .then((response) => {
        console.log(response.data.next.page);
        setPage(response.data.next.page);
        setItems(response.data.results);
        setClick("More");
        hideLoader();
      });
  }

  async function fetchMore() {
    showLoader();
    const request = await axios.get(
      `http://localhost:3001/${style}/${filter}`,
      {
        params: {
          page: page,
          limit: 4,
        },
      }
    );

    const result = request.data.results;

    result.map((it) => {
      setItems((prevItems) => [
        ...prevItems,
        {
          _id: it._id,
          name: it.name,
          price: it.price,
          description: it.description,
          image: it.image,
        },
      ]);
      return items;
    });

    if (request.data.next) {
      setPage(request.data.next.page);
      setClick("More");
    } else {
      setClick("noMore");
    }

    hideLoader();
  }

  const hideMask = () => {
    // Animation 11
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

  const loadMore = () => {
    fetchMore();
  };

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

  const cartFun = () => {
    displayCart ? setDisplayCart(false) : setDisplayCart(true);
    displayCart ? showCart() : hideCart();
    setTimeout(() => {
      body.style.overflow = "hidden";
    }, 1000);
  };
  const hideCartFun = () => {
    setDisplayCart(true);
    hideCart();
    setTimeout(() => {
      body.style.overflow = "unset";
    }, 1000);
  };
  const navFunc = () => {
    showNav ? setShowNav(false) : setShowNav(true);
    showNav ? displayNav() : hideNav();
  };
  return (
    <div className={`container ${click === "noMore" ? "body-overflow" : ""}`}>
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
      ></motion.div>
      {loader}
      <MobileNav />
      <Navbar
        func={() => {
          cartFun();
        }}
        mobileNavFunc1={navFunc}
        mobileNavFunc2={showNav}
      />
      <div className="type-container">
        <MiniNav level={level} style={style} filter={filter} />
        <main>
          <div className="type-section">
            <div className="type-section-head">
              <div className="type-section-head-content">
                <div className="type-collection"> {style}</div>
                <div className="filter-change">
                  <div
                    className="filter-change-head"
                    // onMouseLeave={() => {
                    //   setClickButton(true);
                    // }}
                  >
                    <button
                      className="filter-change-button"
                      // onMouseEnter={() => {
                      //   setClickButton(false);
                      // }}
                      onClick={handleChange}
                    >
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
                </div>
              </div>
            </div>
            <div className="type-section-body">
              {items.map((item, index) => {
                return (
                  <div
                    className={`type-product-container ${
                      index % 2 !== 0 ? "odd" : "even"
                    }`}
                    key={item._id}
                  >
                    {}
                    <div className="type-product-section">
                      <Link to={`/${style}/${filter}/${item._id}/details`}>
                        <div className="product-img">
                          {" "}
                          <img
                            className="image3"
                            src={item.image}
                            alt={item.name}
                          />{" "}
                        </div>
                      </Link>
                      <div className="type-product-name"> {item.name} </div>
                      <div className="type-product-price"> ₦{item.price} </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="load-more-container">
              <div className="load-more">
                <button
                  onClick={loadMore}
                  className={`load-more-button ${click}`}
                >
                  {" "}
                  load More{" "}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {cart}
      <Cart
        func={() => {
          hideCartFun();
        }}
      />
      <Footer />
    </div>
  );
}

export default Type;
