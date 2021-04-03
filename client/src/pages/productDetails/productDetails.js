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
import image1 from "../../assets/pexels-neemias-seara-3680316 (2).jpg";
import { TimelineLite, TweenLite, Power2 } from "gsap";
import * as ScrollMagic from "scrollmagic";

function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [cart, showCart, hideCart] = useCart();
  const [showItem, setShowItem] = useState(false);
  const [displayCart, setDisplayCart] = useState(true);
  const [addedCart, setAddedCart] = useState([]);
  const [items, setItems] = React.useState([]);
  const [related, setRelated] = useState([]);

  const scrollController = new ScrollMagic.Controller();
  const body = document.querySelector("body");
  const filter = match.params.filterType;
  const style = match.params.productType;
  const level = "2";
  let filterName;
  let from;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchItems();
    fetchRelated();
  }, []);

  items.map((item) => {
    from = item.name;
  });

  if (filter === "newIn") {
    filterName = "New In";
  } else if (filter === "highLow") {
    filterName = "High to Low";
  } else if (filter === "lowHigh") {
    filterName = "Low to High";
  }

  function fetchItems() {
    hideMask();
    showLoader();
    axios
      .get(
        `http://localhost:3001/${match.params.productType}/${match.params.productId}/details`
      )
      .then((response) => {
        setItems([response.data]);
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
    const Animation7 = TweenLite.to(".mask", 1.4, {
      width: "0%",
      left: "0",
      position: "fixed",
      ease: Power2.easeInOut,
    });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".container",
      triggerHook: 0,
      reverse: false,
    })
      .setTween(Animation7)
      .addTo(scrollController);
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
  const btnFun = () => {
    cartFun();
    addItem();
  };
  return (
    <div className="container">
      <div className="mask"></div>
      {loader}
      {/* <div className="img-bg">
        <img className="img-bg-edit" src={image1} alt="Locs" />
      </div> */}
      <Navbar
        itemName={addedCart}
        showItem={showItem}
        func={() => {
          cartFun();
        }}
      />
      {items.map((item) => {
        return (
          <div className="product-main" key={item._id}>
            <MiniNav
              level={level}
              style={style}
              filter={filter}
              product={from}
            />
            <div className="product-container">
              <div className="product-container-top">
                <div className="product-container-head">
                  <div className="product-container-head-content">
                    <img className="image1" src={item.image} alt="item.name" />
                  </div>
                </div>
                <div className="product-container-body">
                  <div className="product-name">
                    {" "}
                    <h3> {item.name} </h3>{" "}
                  </div>
                  <div className="product-price">
                    {" "}
                    <h3> Price : ₦{item.price} </h3>{" "}
                  </div>
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
                            <h2> {relatedItem.name}</h2>
                          </div>
                          <div className="related-product-price">
                            <h3> ₦{relatedItem.price}</h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
      <Cart
        func={() => {
          hideCartFun();
        }}
      />
    </div>
  );
}

export default connect()(ProductDetails);
