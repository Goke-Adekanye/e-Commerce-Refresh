import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE, ADD, DECREASE } from "../../redux/cart/actions";
import { selectCartTotal } from "../../redux/cart/cartSelector";

const Cart = ({ cart, total, quantity, match, func }) => {
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div>
        <div className="cart-overlay" onClick={func}></div>
        <div className="card-container">
          <div className="card-main">
            <header>
              {" "}
              <h2>Shopping Bag</h2>{" "}
            </header>
            <div className="empty-cart-body">
              <div className="empty-cart-top">
                <h2> Your Bag</h2>
                is currently empty
              </div>
              <div className="empty-cart-bottom">
                <Link to="/">
                  <button className="add-button" type="button" onClick={func}>
                    Continue Shopping{" "}
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faLongArrowAltRight} />{" "}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="cart-overlay" onClick={func}></div>
        <div className="card-container">
          <div className="card-main">
            <header>
              {" "}
              <h2>Shopping Bag</h2>{" "}
            </header>
            <div className="card-head">
              <div className="card-head-top">
                <h2> Product </h2>
              </div>
              <div className="card-head-bottom">
                <div className="card-head-quantity">
                  <h2> Quantity </h2>
                </div>
                <div className="card-sub-total">
                  <h2> Subtotal </h2>
                </div>
              </div>
            </div>
            <div className="cart-body">
              {cart.map((item) => {
                return (
                  <div key={item.name} className="card-body">
                    <div className="card-body-left">
                      <div className="card-img">
                        <img
                          className="image1"
                          src={item.item_img}
                          alt="Locs"
                        />
                      </div>
                      <div className="card-details">
                        <div className="card-name">{item.name}</div>
                        <div className="card-price">Price: ₦{item.price}</div>
                        <div className="card-remove">
                          <span
                            onClick={() => {
                              dispatch({
                                type: REMOVE,
                                payload: {
                                  name: item.name,
                                  price: item.price,
                                  description: item.description,
                                  item_img: item.item_img,
                                },
                              });
                            }}
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body-right">
                      <div className="card-body-right-left">
                        <div className="card-quantity">
                          <span
                            onClick={() => {
                              dispatch({
                                type: DECREASE,
                                payload: {
                                  name: item.name,
                                  price: item.price,
                                  description: item.description,
                                  item_img: item.item_img,
                                },
                              });
                            }}
                            className="left-arrow"
                          >
                            {" "}
                            {`<`}{" "}
                          </span>

                          <span> {item.quantity} </span>

                          <span
                            onClick={() => {
                              dispatch({
                                type: ADD,
                                payload: {
                                  name: item.name,
                                  price: item.price,
                                  description: item.description,
                                  item_img: item.item_img,
                                },
                              });
                            }}
                            className="right-arrow"
                          >
                            {" "}
                            {`>`}{" "}
                          </span>
                        </div>
                      </div>
                      <div className="card-body-right-right">
                        <div className="sub-total">
                          <h2> ₦{item.price} </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="card-end">
              <div className="card-end-line"></div>
              <div className="total-end">
                <div className="total"> Total </div>
                <div className="total-price"> ₦{total} </div>
              </div>
              <div className="card-check-out">
                <Link to="/checkout">
                  <form>
                    <button className="add-button" type="submit">
                      Proceed to Checkout{" "}
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faLongArrowAltRight} />{" "}
                      </span>
                    </button>
                  </form>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
function mapStateToProps(store) {
  return { cart: store.cart, total: selectCartTotal(store), quantity: store };
}
export default connect(mapStateToProps)(Cart);
