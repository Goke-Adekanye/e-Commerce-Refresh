import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import MiniNav from "../../components/miniNav/miniNav";
import Carousel from "../../components/carousel/carousel";
import AddButton from "../../components/buttons/addToCart/addToCart";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import useCart from "../../hooks/useCart";
import ItemCard from "../../components/itemCard/itemCard";
import { ADD, CLICKED_FALSE } from "../../redux/cart/types/types";
import { useDispatch } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import useShowProduct from "../../hooks/useShowProduct";
import useHideMask from "../../hooks/useHideMask";

function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [showProduct] = useShowProduct();
  const [hideMask, nextPageMask] = useHideMask();
  const [displayCart] = useCart(); // eslint-disable-line react-hooks/exhaustive-deps

  const [items, setItems] = useState([]);
  const [related, setRelated] = useState([]);

  const filter = match.params.filterType;
  const style = match.params.productType;
  const level = "2";
  let from;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchItems();
    fetchRelated();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  showProduct();

  items.map((item) => {
    return (from = item.name);
  });

  function fetchItems() {
    hideMask();
    showLoader();
    axios
      .get(
        `https://frugal-targets.herokuapp.com/${match.params.productType}/${match.params.productId}/details`
      )
      .then((response) => {
        setItems([response.data]);
        hideLoader();
      });
  }

  function fetchRelated() {
    axios
      .get(
        `https://frugal-targets.herokuapp.com/${match.params.productType}/${match.params.productId}/related`
      )
      .then((response) => {
        setRelated(response.data);
      });
  }

  const addItem = () => {
    displayCart();
    dispatch({
      type: CLICKED_FALSE,
      payload: {
        state: false,
      },
    });
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
  const btnFun = () => {
    addItem();
  };

  return (
    <div className="container">
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
      ></motion.div>
      {loader}
      <Navbar />
      <div className="product-main">
        <MiniNav level={level} style={style} filter={filter} product={from} />
        <div className="product-body">
          {items.map((item) => {
            return (
              <div className="product-container" key={item._id}>
                <div className="product-container-top" key={item._id}>
                  <div className="product-container-left">
                    <div className="product_overlay"></div>
                    <Carousel slides={items} />
                  </div>

                  <div className="product-container-right">
                    <div className="product_overlay"></div>
                    <div className="product-name"> {item.name} </div>
                    <div className="product-price"> Price : ₦{item.price} </div>
                    <div className="product-add">
                      <AddButton func={btnFun} />
                    </div>
                    <div className="product-detail">{item.description}</div>
                  </div>
                </div>
                <div className="product-container-bottom">
                  <div className="related-products-head">Related Products</div>
                  <div className="related-products-body">
                    {related.map((item) => {
                      return (
                        <div className="related-product-item" key={item._id}>
                          <ItemCard
                            item={item}
                            to={`/${item.type}/newIn/${item._id}/details`}
                            noCover
                          />
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
    </div>
  );
}

export default ProductDetails;
