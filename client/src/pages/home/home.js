import React, { useState, useEffect, useRef } from "react";
import welImg from "../../assets/pexels-pixabay-219550.jpg";
import image1 from "../../assets/pexels-neemias-seara-3680316 (2).jpg";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { TimelineLite, TweenMax, Power2, Power3, gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollMagicPluginGsap(ScrollMagic, gsap);

function Home() {
  const [enterLocs, setEnterLocs] = useState(false);
  const [enterTwist, setEnterTwist] = useState(false);
  const [enterWeaves, setEnterWeaves] = useState(false);
  const [enterBraids, setEnterBraids] = useState(false);

  let container = useRef(null);
  let mask = useRef(null);
  let img = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".welcome-image:after");

  //Ease
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const tl1 = new TimelineLite();
  const tl2 = new TimelineLite();
  const tl3 = new TimelineLite();
  const tl4 = new TimelineLite();
  const tl5 = new TimelineLite();
  const scrollController = new ScrollMagic.Controller();
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: 5,
      },
    },
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      // window.scrollTo(0, 0);
    };

    //Initial Animation (Timeline 1)
    tl1
      .to(".container", 1, { css: { visibility: "visible" } })
      .from(".welcome-text h3", 1.4, {
        opacity: "0",
        transform: "scale(1.4) ",
        ease: Power2.easeInOut,
      })
      .to(mask, 1.4, { width: "0%", left: "0", ease: Power2.easeInOut })
      .to(imageReveal, 1.8, { height: "0rem", ease: Power2.easeInOut })
      .from(".nav-links", 0.7, {
        opacity: "0",
        ease: Power2.easeInOut,
      });

    // First Animation
    const Animation = TweenMax.from([".categories-top h1", ".headTitle"], 1.5, {
      y: "200",
      opacity: 0,
      ease: Power3.easeOut,
    });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".categories-top",
      triggerHook: 0.5,
      reverse: false,
    })
      .setTween(Animation)
      .addTo(scrollController);

    // Second Animation (Timeline 2)
    const Animation2 = tl2
      .from(".locs-num", 0.4, { opacity: "0", ease: Power2.easeInOut })
      .staggerFrom(
        [".locs1", ".locs2", ".locs3", ".locs4"],
        0.8,
        {
          y: 400,
          opacity: 0,
          zIndex: "2",
          ease: Power2.easeInOut,
        },
        0.2
      )
      .from(".locs-container", 0.4, {
        opacity: "0",
        y: "100",
        ease: Power2.easeInOut,
      })
      .from([".locs-write", ".locs-shop"], 1.0, {
        opacity: "1",
        x: "50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".locs",
      triggerHook: 0.2,
      reverse: false,
    })
      .setTween(Animation2)
      .addTo(scrollController);

    // Third Animation (Timeline 3)
    const Animation3 = tl3
      .from(".twists-num", 0.4, { opacity: "0", ease: Power2.easeInOut })
      .staggerFrom(
        [
          ".twists1",
          ".twists2",
          ".twists3",
          ".twists4",
          ".twists5",
          ".twists6",
        ],
        0.8,
        {
          y: 400,
          opacity: 0,
          zIndex: "2",
          ease: Power2.easeInOut,
        },
        -0.2
      )
      .from(".twists-container", 0.4, {
        opacity: "0",
        y: "100",
        ease: Power2.easeInOut,
      })
      .from([".twists-write", ".twists-shop"], 1.0, {
        opacity: "1",
        x: "-50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".twists",
      triggerHook: 0.2,
      reverse: false,
    })
      .setTween(Animation3)
      .addTo(scrollController);

    // Fourth Animation (Timeline 4)

    const Animation4 = tl4
      .from(".weaves-num", 0.4, { opacity: "0", ease: Power2.easeInOut })
      .staggerFrom(
        [
          ".weaves1",
          ".weaves2",
          ".weaves3",
          ".weaves4",
          ".weaves5",
          ".weaves6",
        ],
        0.8,
        {
          y: 400,
          opacity: 0,
          zIndex: "2",
          ease: Power2.easeInOut,
        },
        0.2
      )
      .from(".weaves-container", 0.4, {
        opacity: "0",
        y: "100",
        ease: Power2.easeInOut,
      })
      .from([".weaves-write", ".weaves-shop"], 1.0, {
        opacity: "1",
        x: "50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".weaves",
      triggerHook: 0.2,
      reverse: false,
    })
      .setTween(Animation4)
      .addTo(scrollController);

    // Fifth Animation (Timeline 5)
    const Animation5 = tl5
      .from(".braids-num", 0.4, { opacity: "0", ease: Power2.easeInOut })
      .staggerFrom(
        [
          ".braids1",
          ".braids2",
          ".braids3",
          ".braids4",
          ".braids5",
          ".braids6",
        ],
        0.8,
        {
          y: 400,
          opacity: 0,
          zIndex: "2",
          ease: Power2.easeInOut,
        },
        -0.2
      )
      .from(".braids-container", 0.4, {
        opacity: "0",
        y: "100",
        ease: Power2.easeInOut,
      })
      .from([".braids-write", ".braids-shop"], 1.0, {
        opacity: "1",
        x: "-50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".braids",
      triggerHook: 0.2,
      reverse: false,
    })
      .setTween(Animation5)
      .addTo(scrollController);
  }, []);

  const nextPageImg = {
    exit: {
      filter: "grayscale(100%) blur(1px)",
      transition: { delay: 0.5, duration: 1.0, ease: "easeInOut" },
    },
  };
  const nextPageFont = {
    exit: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
        staggerDirection: -1,
        ease: "easeInOut",
      },
    },
  };
  const nextPage = {
    exit: {
      opacity: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };
  const nextPageMask = {
    exit: {
      width: "100vw",
      left: "0",
      position: "fixed",
      transition: { delay: 2.5, duration: 0.8, ease: "easeInOut" },
    },
  };

  const letter = {
    exit: {
      y: 400,
      transition: { duration: 0.5, ...transition },
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div className="container" ref={(el) => (container = el)}>
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
        ref={(el) => (mask = el)}
      ></motion.div>
      <Navbar />
      <div className="home-section-1">
        <div className="welcome">
          <div className="welcome-section">
            <div className={`welcome-image`}>
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
                  exit="exit"
                  className="locs-num"
                >
                  <h1> 1 - 4</h1>
                </motion.div>

                <motion.div
                  variants={nextPage}
                  exit="exit"
                  className={`locs-go`}
                >
                  <div className={`locs-write`}>
                    <h2>View our collection of Locs Wigs</h2>
                    <br />
                    Choose from our variety of unique styles
                  </div>
                  <div className="locs-shop">
                    <Link to="/locs/newIn">
                      <button
                        className="locs-button"
                        type="button"
                        onMouseEnter={() => {
                          setEnterLocs(true);
                        }}
                        onMouseLeave={() => {
                          setEnterLocs(false);
                        }}
                      >
                        <span>Shop Now</span>
                      </button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  variants={nextPageFont}
                  exit="exit"
                  className="locs-type"
                >
                  {" "}
                  <motion.h1
                    onMouseEnter={() => {
                      setEnterLocs(true);
                    }}
                    onMouseLeave={() => {
                      setEnterLocs(false);
                    }}
                  >
                    {" "}
                    <motion.span variants={letter} className="locs1">
                      l
                    </motion.span>
                    <motion.span
                      // variants={enterLocs ? letter : ""}
                      variants={letter}
                      className="locs2"
                    >
                      o
                    </motion.span>
                    <motion.span variants={letter} className="locs3">
                      c
                    </motion.span>
                    <motion.span variants={letter} className="locs4">
                      s
                    </motion.span>{" "}
                  </motion.h1>{" "}
                </motion.div>

                <div className={`locs-container`}>
                  <Link to="/locs/newIn">
                    <motion.div
                      className={`shrinker ${enterLocs ? "shrink" : ""} `}
                    >
                      <motion.img
                        // whileHover={{ scale: 1.6 }}
                        variants={nextPageImg}
                        exit="exit"
                        className="locs-img"
                        src={image1}
                        alt="Locs"
                        onMouseEnter={() => {
                          setEnterLocs(true);
                        }}
                        onMouseLeave={() => {
                          setEnterLocs(false);
                        }}
                      />
                    </motion.div>
                  </Link>
                </div>
              </div>

              <div className="twists">
                <div className="twists-num">
                  <h1> 2 - 4</h1>
                </div>

                <div className={`twists-go`}>
                  <div className={`twists-write`}>
                    <h2>View our collection of Twists Wigs</h2>
                    <br />
                    Choose from our variety of unique styles
                  </div>
                  <div className="twists-shop">
                    <Link to="/twists/newIn">
                      <button
                        className="twists-button"
                        type="button"
                        onMouseEnter={() => {
                          setEnterTwist(true);
                        }}
                        onMouseLeave={() => {
                          setEnterTwist(false);
                        }}
                      >
                        <span>Shop Now</span>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="twists-type">
                  <h1
                    onMouseEnter={() => {
                      setEnterTwist(true);
                    }}
                    onMouseLeave={() => {
                      setEnterTwist(false);
                    }}
                  >
                    {" "}
                    <span className="twists1">t</span>
                    <span className="twists2">w</span>
                    <span className="twists3">i</span>
                    <span className="twists4">s</span>
                    <span className="twists5">t</span>
                    <span className="twists6">s</span>{" "}
                  </h1>
                </div>

                <div className={`twists-container  `}>
                  <Link to="/twists/newIn">
                    <div className={`shrinker ${enterTwist ? "shrink" : ""}`}>
                      <img
                        className="twists-img"
                        src={image1}
                        alt="Twists"
                        onMouseEnter={() => {
                          setEnterTwist(true);
                        }}
                        onMouseLeave={() => {
                          setEnterTwist(false);
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="weaves">
                <div className="weaves-num">
                  <h1> 3 - 4</h1>
                </div>

                <div className={`weaves-go`}>
                  <div className={`weaves-write`}>
                    <h2>View our collection of Weaves Wigs</h2>
                    <br />
                    Choose from our variety of unique styles
                  </div>
                  <div className="weaves-shop">
                    <Link to="/weaves/newIn">
                      <button
                        className="weaves-button"
                        type="button"
                        onMouseEnter={() => {
                          setEnterWeaves(true);
                        }}
                        onMouseLeave={() => {
                          setEnterWeaves(false);
                        }}
                      >
                        <span>Shop Now</span>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="weaves-type">
                  <h1
                    onMouseEnter={() => {
                      setEnterWeaves(true);
                    }}
                    onMouseLeave={() => {
                      setEnterWeaves(false);
                    }}
                  >
                    {" "}
                    <span className="weaves1">w</span>
                    <span className="weaves2">e</span>
                    <span className="weaves3">a</span>
                    <span className="weaves4">v</span>
                    <span className="weaves5">e</span>
                    <span className="weaves6">s</span>{" "}
                  </h1>
                </div>

                <div className={`weaves-container `}>
                  <Link to="/weaves/newIn">
                    <div className={`shrinker ${enterWeaves ? "shrink" : ""}`}>
                      <img
                        className="weaves-img"
                        src={image1}
                        alt="Weaves"
                        onMouseEnter={() => {
                          setEnterWeaves(true);
                        }}
                        onMouseLeave={() => {
                          setEnterWeaves(false);
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="braids">
                <div className="braids-num">
                  <h1> 4 - 4</h1>
                </div>
                <div className={`braids-go`}>
                  <div className={`braids-write`}>
                    <h2>View our collection of Braids Wigs</h2>
                    <br />
                    Choose from our variety of unique styles
                  </div>
                  <div className="braids-shop">
                    <Link to="/braids/newIn">
                      <button
                        className="braids-button"
                        type="button"
                        onMouseEnter={() => {
                          setEnterBraids(true);
                        }}
                        onMouseLeave={() => {
                          setEnterBraids(false);
                        }}
                      >
                        <span>Shop Now</span>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="braids-type">
                  <h1
                    onMouseEnter={() => {
                      setEnterBraids(true);
                    }}
                    onMouseLeave={() => {
                      setEnterBraids(false);
                    }}
                  >
                    {" "}
                    <span className="braids1">b</span>
                    <span className="braids2">r</span>
                    <span className="braids3">a</span>
                    <span className="braids4">i</span>
                    <span className="braids5">d</span>
                    <span className="braids6">s</span>{" "}
                  </h1>
                </div>

                <div className={`braids-container `}>
                  <Link to="/braids/newIn">
                    <div className={`shrinker ${enterBraids ? "shrink" : ""}`}>
                      <img
                        className="braids-img"
                        src={image1}
                        alt="Braids"
                        onMouseEnter={() => {
                          setEnterBraids(true);
                        }}
                        onMouseLeave={() => {
                          setEnterBraids(false);
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Home;
