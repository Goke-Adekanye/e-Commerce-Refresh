import React, { useState, useEffect } from "react";
import welImg from "../../assets/pexels-pixabay-219550.jpg";
import image1 from "../../assets/pexels-neemias-seara-3680316 (2).jpg";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Button from "../../components/buttons/button/button";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import useHomeAnimation from "../../hooks/useHomeAnimation";

function Home() {
  const [homeAnim, letter, nextPageMask, nextPage, nextPageFont] =
    useHomeAnimation();
  const [nextLocs, setNextLocs] = useState(false);
  const [nextTwists, setNextTwists] = useState(false);
  const [nextWeaves, setNextWeaves] = useState(false);
  const [nextBraids, setNextBraids] = useState(false);
  const body = document.querySelector("body");

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    homeAnim();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
        onAnimationStart={() => (body.style.overflow = "hidden")}
        onAnimationComplete={() => (body.style.overflow = "unset")}
      ></motion.div>
      <Navbar cartState />

      <div className="home-section-1">
        <div className="welcome">
          <div className="welcome-section">
            <div className={`welcome-image`}>
              <div className="mask-revealer"></div>
              <img className="" src={welImg} alt="logo" />
            </div>

            <div className="welcome-content">
              <div className="welcome-text">
                <h3>We are Frugal Targets </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-2">
        <div className="categories">
          <div className="categories-top">
            <h1>
              Hair
              <br /> styles
            </h1>
            <div className="headTitle"></div>
          </div>
          <div className="categories-bottom">
            <div className="categories-section">
              <div className="locs">
                <motion.div
                  variants={nextPage}
                  exit={nextLocs ? "exit" : null}
                  className="locs-num"
                >
                  1 <span>- 4</span>
                </motion.div>

                <div className={`locs-container`}>
                  <motion.div
                    variants={nextPageFont}
                    exit={nextLocs ? "exit" : null}
                    className="locs-type"
                  >
                    {" "}
                    <h1>
                      {" "}
                      <motion.span variants={letter} className="locs1">
                        l
                      </motion.span>
                      <motion.span variants={letter} className="locs2">
                        o
                      </motion.span>
                      <motion.span variants={letter} className="locs3">
                        c
                      </motion.span>
                      <motion.span variants={letter} className="locs4">
                        s
                      </motion.span>
                    </h1>{" "}
                  </motion.div>

                  <div className="locs-img-container">
                    <div className={`shrinker-locs`}>
                      <div
                        className={`shrinker ${nextLocs ? "shrink" : null} `}
                      >
                        <Parallax y={[-20, 20]}>
                          <Link to="/locs/newIn">
                            <img
                              className="locs-img"
                              src={image1}
                              alt="Locs"
                              onClick={() => {
                                setNextLocs(true);
                              }}
                            />
                          </Link>
                        </Parallax>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={nextPage}
                  exit={nextLocs ? "exit" : null}
                  className={`locs-go`}
                >
                  <div className={`locs-write`}>
                    <h2>View our collection of Locs Wigs</h2>

                    <p>Choose from our variety of unique styles</p>
                  </div>
                  <div className="locs-shop">
                    <Button
                      to="/locs/newIn"
                      nameClass="locs-button"
                      text="Shop Now"
                      func={() => {
                        setNextLocs(true);
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className=" twists">
                <motion.div
                  variants={nextPage}
                  exit={nextTwists ? "exit" : null}
                  className={`twists-go`}
                >
                  <div className={`twists-write`}>
                    <h2>View our collection of Twists Wigs</h2>

                    <p>Choose from our variety of unique styles</p>
                  </div>
                  <div className="twists-shop">
                    <Button
                      to="/twists/newIn"
                      nameClass="twists-button"
                      text="Shop Now"
                      func={() => {
                        setNextTwists(true);
                      }}
                    />
                  </div>
                </motion.div>

                <div className={`twists-container  `}>
                  <motion.div
                    variants={nextPageFont}
                    exit={nextTwists ? "exit" : null}
                    className="twists-type"
                  >
                    <h1>
                      {" "}
                      <motion.span variants={letter} className="twists1">
                        t
                      </motion.span>
                      <motion.span variants={letter} className="twists2">
                        w
                      </motion.span>
                      <motion.span variants={letter} className="twists3">
                        i
                      </motion.span>
                      <motion.span variants={letter} className="twists4">
                        s
                      </motion.span>
                      <motion.span variants={letter} className="twists5">
                        t
                      </motion.span>
                      <motion.span variants={letter} className="twists6">
                        s
                      </motion.span>{" "}
                    </h1>
                  </motion.div>
                  <div className="twists-img-container">
                    <div className={`shrinker-twists`}>
                      <div className={`shrinker ${nextTwists ? "shrink" : ""}`}>
                        <Parallax y={[-20, 20]}>
                          <Link to="/twists/newIn">
                            <img
                              className="twists-img"
                              src={image1}
                              alt="Twists"
                              onClick={() => {
                                setNextTwists(true);
                              }}
                            />
                          </Link>
                        </Parallax>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={nextPage}
                  exit={nextTwists ? "exit" : null}
                  className="twists-num"
                >
                  2 <span>- 4</span>
                </motion.div>
              </div>

              <div className=" weaves">
                <motion.div
                  variants={nextPage}
                  exit={nextWeaves ? "exit" : null}
                  className="weaves-num"
                >
                  3 <span>- 4</span>
                </motion.div>

                <div className={`weaves-container `}>
                  <motion.div
                    variants={nextPageFont}
                    exit={nextWeaves ? "exit" : null}
                    className="weaves-type"
                  >
                    <h1>
                      {" "}
                      <motion.span variants={letter} className="weaves1">
                        w
                      </motion.span>
                      <motion.span variants={letter} className="weaves2">
                        e
                      </motion.span>
                      <motion.span variants={letter} className="weaves3">
                        a
                      </motion.span>
                      <motion.span variants={letter} className="weaves4">
                        v
                      </motion.span>
                      <motion.span variants={letter} className="weaves5">
                        e
                      </motion.span>
                      <motion.span variants={letter} className="weaves6">
                        s
                      </motion.span>{" "}
                    </h1>
                  </motion.div>
                  <div className="weaves-img-container">
                    <div className={`shrinker-weaves`}>
                      <div className={`shrinker ${nextWeaves ? "shrink" : ""}`}>
                        <Parallax y={[-20, 20]}>
                          <Link to="/weaves/newIn">
                            <img
                              className="weaves-img"
                              src={image1}
                              alt="Weaves"
                              onClick={() => {
                                setNextWeaves(true);
                              }}
                            />
                          </Link>
                        </Parallax>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  variants={nextPage}
                  exit={nextWeaves ? "exit" : null}
                  className={`weaves-go`}
                >
                  <div className={`weaves-write`}>
                    <h2>View our collection of Weaves Wigs</h2>

                    <p>Choose from our variety of unique styles</p>
                  </div>
                  <div className="weaves-shop">
                    <Button
                      to="/weaves/newIn"
                      nameClass="weaves-button"
                      text="Shop Now"
                      func={() => {
                        setNextWeaves(true);
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className=" braids">
                <motion.div
                  variants={nextPage}
                  exit={nextBraids ? "exit" : null}
                  className={`braids-go`}
                >
                  <div className={`braids-write`}>
                    <h2>View our collection of Braids Wigs</h2>

                    <p>Choose from our variety of unique styles</p>
                  </div>
                  <div className="braids-shop">
                    <Button
                      to="/braids/newIn"
                      nameClass="braids-button"
                      text="Shop Now"
                      func={() => {
                        setNextBraids(true);
                      }}
                    />
                  </div>
                </motion.div>

                <div className={`braids-container `}>
                  <motion.div
                    variants={nextPageFont}
                    exit={nextBraids ? "exit" : null}
                    className="braids-type"
                  >
                    <h1>
                      {" "}
                      <motion.span variants={letter} className="braids1">
                        b
                      </motion.span>
                      <motion.span variants={letter} className="braids2">
                        r
                      </motion.span>
                      <motion.span variants={letter} className="braids3">
                        a
                      </motion.span>
                      <motion.span variants={letter} className="braids4">
                        i
                      </motion.span>
                      <motion.span variants={letter} className="braids5">
                        d
                      </motion.span>
                      <motion.span variants={letter} className="braids6">
                        s
                      </motion.span>{" "}
                    </h1>
                  </motion.div>
                  <div className="braids-img-container">
                    <div className={`shrinker-braids`}>
                      <div className={`shrinker ${nextBraids ? "shrink" : ""}`}>
                        <Parallax y={[-20, 20]}>
                          <Link to="/braids/newIn">
                            <img
                              className="braids-img"
                              src={image1}
                              alt="Braids"
                              onClick={() => {
                                setNextBraids(true);
                              }}
                            />
                          </Link>
                        </Parallax>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={nextPage}
                  exit={nextBraids ? "exit" : null}
                  className="braids-num"
                >
                  4 <span>- 4</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
