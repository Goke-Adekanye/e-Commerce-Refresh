import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/footer";
import MiniNav from "../../components/miniNav/miniNav";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import useShowProduct from "../../hooks/useShowProduct";
import useHideMask from "../../hooks/useHideMask";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/buttons/button/button";
import Filter from "../../components/filter/filter";
import ItemCard from "../../components/itemCard/itemCard";

import axios from "axios";

import { motion } from "framer-motion";

function Type({ match }) {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [showProduct] = useShowProduct();
  const [hideMask, nextPageMask] = useHideMask();
  const [click, setClick] = useState("noMore");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState([]);
  const filter = match.params.filterType;
  const style = match.params.productType;
  const level = "1";

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  showProduct();
  function fetchItems() {
    hideMask();
    showLoader();
    axios
      .get(`https://frugal-targets.herokuapp.com/${style}/${filter}`, {
        params: {
          page: 1,
          limit: 4,
        },
      })
      .then((response) => {
        setPage(response.data.next.page);
        setItems(response.data.results);
        setClick("More");
        hideLoader();
      });
  }
  async function fetchMore() {
    showLoader();
    const request = await axios.get(
      `https://frugal-targets.herokuapp.com/${style}/${filter}`,
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

  return (
    <div className={`container`}>
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
      ></motion.div>
      {loader}
      <Navbar cartState />
      <div className="type-container">
        <MiniNav level={level} style={style} filter={filter} />
        <main>
          <div className="type-section">
            <div className="type-section-head">
              <div className="type-section-head-content">
                <div className="type-collection"> {style}</div>
                <div className="filter-change">
                  <Filter style={style} filter={filter} />
                </div>
              </div>
            </div>
            <div className="type-section-body">
              {items.map((item, index) => {
                return (
                  <ItemCard
                    item={item}
                    to={`/${style}/${filter}/${item._id}/details`}
                    key={item._id}
                  />
                );
              })}
            </div>
            <div className="load-more-container">
              <div className="load-more">
                <Button
                  to=""
                  nameClass={`load-more-button ${click}`}
                  text="Load More"
                  func={() => {
                    fetchMore();
                  }}
                  noLink
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Type;
