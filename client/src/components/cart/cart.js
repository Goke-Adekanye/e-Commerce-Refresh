import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE, ADD, DECREASE } from "../../redux/cart/types/types";
import { selectCartTotal } from "../../redux/cart/selector/cartSelector";

const mapState = (state) => {
  return { cart: state.cart.cart, total: selectCartTotal(state) };
};

const Cart = ({ func }) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector(mapState);
  if (cart.length === 0) {
    return (
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
    );
  } else {
    return (
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
                    <div className="remove-product">
                      {" "}
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
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </div>

                    <div className="card-img">
                      <img className="image1" src={item.item_img} alt="Locs" />
                    </div>
                    <div className="mobile-card-details">
                      <div className="mobile-card-name">
                        <div className="mobile-card-name-left">Product:</div>
                        <div className="mobile-card-name-right">
                          {item.name}
                        </div>
                      </div>
                      <div className="mobile-card-price">
                        <div className="mobile-card-price-left">Price:</div>
                        <div className="mobile-card-price-right">
                          ₦{item.price}
                        </div>
                      </div>
                      <div className="mobile-card-quantity">
                        <div className="mobile-card-quantity-left">
                          Quantity:
                        </div>
                        <div className="mobile-card-quantity-right">
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
    );
  }
};

export default Cart;
