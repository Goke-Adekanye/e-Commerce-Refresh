import React, { useEffect, useState } from "react";
import "./style.css";
import { selectCartTotal } from "../../redux/cart/selector/cartSelector";
import { connect, useDispatch } from "react-redux";
import Navbar from "../../components/navbar/navbar";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import image from "../../assets/pexels-pixabay-259200.jpg";
import { CLEAR_CART } from "../../redux/cart/types/types";
import Cities from "../../utils/cities";
import { apiInstance } from "../../utils/utils";
import useHideMask from "../../hooks/useHideMask";

import { motion } from "framer-motion";
const config = {
  reference: new Date().getTime(),
  email: "",
  amount: "",
  publicKey: "pk_test_7c6afe2f416184dd8624d85f3678f9e8b2408d52",
};

const initialAdressState = {
  fullname: "",
  phonenumber: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

function CheckOut({ total }) {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({ ...config });
  const [hideMask, nextPageMask] = useHideMask();
  const [shippingAddress, setshippingAddress] = useState({
    ...initialAdressState,
  });

  useEffect(() => {
    hideMask();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleConfig = (evt) => {
    const { name, value } = evt.target;
    setInfo({
      ...info,
      [name]: value,
      amount: total,
    });
  };

  const handleShipping = (evt) => {
    const { name, value } = evt.target;
    setshippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (
      !shippingAddress.fullname ||
      !shippingAddress.phonenumber ||
      !shippingAddress.line1 ||
      !shippingAddress.city ||
      !info.email ||
      !shippingAddress.state ||
      !shippingAddress.country ||
      shippingAddress.city === "-"
    ) {
      return;
    }

    apiInstance
      .post("/payments/create", {
        amount: info.amount,
        email: info.email,
        full_name: shippingAddress.fullname,
      })
      .then((resp) => {
        window.location.replace(resp.data);
        console.log(resp.data);
        dispatch({ type: CLEAR_CART });
      });
  };

  return (
    <div className="container">
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
      ></motion.div>
      <Navbar />

      <div className="payment-details">
        <div className="payment-details-container">
          <form action="/payments/create" onSubmit={handleFormSubmit}>
            <div className="payment-details-top">
              <label> FULL NAME </label>
              <input
                className="input"
                type="text"
                name="fullname"
                onChange={(evt) => handleShipping(evt)}
                placeholder="Full Name"
                value={shippingAddress.fullname}
                required
              ></input>

              <label> PHONE NUMBER </label>
              <input
                className="input"
                type="text"
                name="phonenumber"
                onChange={(evt) => handleShipping(evt)}
                placeholder="Phone Number"
                value={shippingAddress.phonenumber}
                required
              ></input>

              <label> EMAIL </label>
              <input
                className="input"
                type="text"
                name="email"
                onChange={(evt) => handleConfig(evt)}
                placeholder="Email"
                value={info.email}
                required
              ></input>

              <label> ADDRESS LINE 1 </label>
              <input
                className="input"
                type="text"
                name="line1"
                onChange={(evt) => handleShipping(evt)}
                placeholder="Line 1"
                value={shippingAddress.line1}
                required
              ></input>

              <label> ADDRESS LINE 2 </label>
              <input
                className="input"
                type="text"
                name="line2"
                onChange={(evt) => handleShipping(evt)}
                placeholder="Line 2"
                value={shippingAddress.line2}
              ></input>

              <div className="payment-details-top-section-1">
                <div className="payment-details-top-section-1-head">
                  <label className="label-sub"> COUNTRY</label>
                  <CountryDropdown
                    className="select"
                    onChange={(val) =>
                      handleShipping({
                        target: {
                          name: "country",
                          value: val,
                        },
                      })
                    }
                    value={shippingAddress.country}
                    required
                  />
                </div>

                <div className="payment-details-top-section-1-body">
                  <label className="label-sub"> STATE</label>

                  <RegionDropdown
                    className="select"
                    country={shippingAddress.country}
                    onChange={(val) =>
                      handleShipping({
                        target: {
                          name: "state",
                          value: val,
                        },
                      })
                    }
                    value={shippingAddress.state}
                    required
                  />
                </div>
              </div>

              <div className="payment-details-top-section-2">
                <div className="payment-details-top-section-2-head">
                  <label className="label-sub"> CITY </label>
                  <select
                    className="select"
                    type="text"
                    name="city"
                    onChange={(evt) => handleShipping(evt)}
                    placeholder="City"
                    value={shippingAddress.city}
                    required
                  >
                    {Cities.map((city) => {
                      return <option key={city.value}>{city.value}</option>;
                    })}
                  </select>
                </div>

                <div className="payment-details-top-section-2-body">
                  <label className="label-sub"> ZIP </label>
                  <input
                    className="input"
                    type="text"
                    name="zip"
                    onChange={(evt) => handleShipping(evt)}
                    placeholder="Zip"
                    value={shippingAddress.zip}
                    required
                  ></input>
                </div>
              </div>

              <button type="submit" className="payButton">
                {" "}
                Continue{" "}
              </button>
            </div>
          </form>

          <div className="payment-details-bottom">
            <img src={image} alt="Locs" />
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(store) {
  return { total: selectCartTotal(store) };
}
export default connect(mapStateToProps)(CheckOut);
