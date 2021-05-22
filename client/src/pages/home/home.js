import React, { useState, useEffect } from "react";
import welImg from "../../assets/pexels-pixabay-219550.jpg";
import image1 from "../../assets/pexels-neemias-seara-3680316 (2).jpg";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import MobileNav from "../../components/mobileNav/mobileNav";
import useMobileNav from "../../hooks/useMobileNav";
import { Power2, Power3, gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [displayNav, hideNav] = useMobileNav();
  const [showNav, setShowNav] = useState(true);
  const [canScroll, setCanScroll] = useState(false);
  const [enterLocs, setEnterLocs] = useState(false);
  const [enterTwist, setEnterTwist] = useState(false);
  const [enterWeaves, setEnterWeaves] = useState(false);
  const [enterBraids, setEnterBraids] = useState(false);
  const body = document.querySelector("body");

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    if (canScroll === false) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }
  }, [canScroll]);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "play none none none",
      markers: false,
    });

    // Animation 1
    gsap
      .timeline()
      .call(() => {
        setCanScroll(false);
      })
      .to(".container", 1, { css: { visibility: "visible" } })
      .from([".welcome-text h3"], 1.4, {
        opacity: "0",
        transform: "scale(1.4) ",
        ease: Power2.easeInOut,
        reversed: false,
      })
      .to(".mask", 1.4, { width: "0%", left: "0", ease: Power2.easeInOut })
      .to(".mask-revealer", 3, {
        height: "0rem",
        ease: Power2.easeInOut,
        delay: "-1",
      })
      .call(() => {
        setCanScroll(true);
      });

    // Animation 2

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".categories-top",
          start: "top center",
          end: "bottom top",
        },
      })
      .fromTo(
        [".categories-top h1", ".headTitle"],
        1.5,
        {
          y: "200",
          opacity: 0,
          ease: Power3.easeOut,
        },
        {
          y: "0",
          opacity: 1,
        }
      );

    // Animation 3

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".categories-top",
          start: "bottom center",
          end: "bottom top",
        },
      })
      .from(".locs-num", 2, {
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.3,
      });

    // Animation 4

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".locs",
          start: "top +=200",
          end: "bottom top",
        },
      })
      .from(".locs-num span ", 0.4, { opacity: "0", ease: Power2.easeInOut })
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
      .from(".locs-write", 1.0, {
        opacity: "0",
        x: "50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      })
      .from(".locs-shop", 1, {
        opacity: "0",
        ease: Power2.easeInOut,
        delay: "-0.4",
      });

    // Animation 5

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".locs",
          start: "bottom center",
          end: "bottom top",
        },
      })
      .from([".twists-num"], 2, {
        opacity: 0,
        ease: Power3.easeOut,
      });

    // Animation 6

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".twists",
          start: "top center",
          end: "bottom top",
        },
      })
      .from(".twists-num span", 0.4, { opacity: "0", ease: Power2.easeInOut })
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
      .from(".twists-write", 1.0, {
        opacity: "0",
        x: "-50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      })
      .from(".twists-shop", 1, {
        opacity: "0",
        ease: Power2.easeInOut,
        delay: "-0.4",
      });

    // Animation 7

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".twists",
          start: "bottom center",
          end: "bottom top",
        },
      })
      .from([".weaves-num"], 2, {
        opacity: 0,
        ease: Power3.easeOut,
      });

    // Animation 8

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".weaves",
          start: "top center",
          end: "bottom top",
        },
      })
      .from(".weaves-num span", 0.4, { opacity: "0", ease: Power2.easeInOut })
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
      .from(".weaves-write", 1.0, {
        opacity: "0",
        x: "50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      })
      .from(".weaves-shop", 1, {
        opacity: "0",
        ease: Power2.easeInOut,
        delay: "-0.4",
      });

    // Animation 9

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".weaves",
          start: "bottom center",
          end: "bottom top",
        },
      })
      .from([".braids-num"], 2, {
        opacity: 0,
        ease: Power3.easeOut,
      });

    // Animation 10

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".braids",
          start: "top center",
          end: "bottom top",
        },
      })
      .from(".braids-num span", 0.4, { opacity: "0", ease: Power2.easeInOut })
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
      .from(".braids-write", 1.0, {
        opacity: "0",
        x: "-50vw",
        ease: Power2.easeOut,
        delay: 0.7,
      })
      .from(".braids-shop", 1, {
        opacity: "0",
        ease: Power2.easeInOut,
        delay: "-0.4",
      });
  }, []);

  //Ease
  const transition = { duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9] };

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
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const nextPageMask = {
    exit: {
      width: "100vw",
      left: "0",
      position: "fixed",
      zIndex: "3",
      transition: { delay: 2.5, duration: 2, ease: Power2.easeInOut },
    },
  };
  const letter = {
    exit: {
      y: 400,
      transition: { duration: 0.5, ...transition },
    },
  };

  const navFunc = () => {
    showNav ? setShowNav(false) : setShowNav(true);
    showNav ? displayNav() : hideNav();
    console.log(showNav);
  };

  return (
    <div className="container">
      <motion.div
        variants={nextPageMask}
        exit="exit"
        className="mask"
        onAnimationStart={() => setCanScroll(false)}
        onAnimationComplete={() => setCanScroll(true)}
      ></motion.div>
      <MobileNav />
      <Navbar mobileNavFunc1={navFunc} mobileNavFunc2={showNav} />

      <div className="home-section-1">
        <div className="welcome">
          <div className="welcome-section">
            <div className={`welcome-image`}>
              <img className="" src={welImg} alt="logo" />
              <div className="mask-revealer"></div>
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
                  1 <span>- 4</span>
                </motion.div>

                <motion.div
                  variants={nextPageFont}
                  exit="exit"
                  className="locs-type"
                >
                  {" "}
                  <h1
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
                    <motion.span variants={letter} className="locs2">
                      o
                    </motion.span>
                    <motion.span variants={letter} className="locs3">
                      c
                    </motion.span>
                    <motion.span variants={letter} className="locs4">
                      s
                    </motion.span>{" "}
                  </h1>{" "}
                </motion.div>

                <div className={`locs-container`}>
                  <Link to="/locs/newIn">
                    <div className={`shrinker ${enterLocs ? "shrink" : ""} `}>
                      <Parallax y={[-20, 20]}>
                        <motion.img
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
                      </Parallax>
                    </div>
                  </Link>
                </div>

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
              </div>

              <div className=" twists">
                <motion.div
                  variants={nextPage}
                  exit="exit"
                  className="twists-num"
                >
                  2 <span>- 4</span>
                </motion.div>

                <motion.div
                  variants={nextPageFont}
                  exit="exit"
                  className="twists-type"
                >
                  <h1
                    onMouseEnter={() => {
                      setEnterTwist(true);
                    }}
                    onMouseLeave={() => {
                      setEnterTwist(false);
                    }}
                  >
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

                <div className={`twists-container  `}>
                  <Link to="/twists/newIn">
                    <div className={`shrinker ${enterTwist ? "shrink" : ""}`}>
                      <Parallax y={[-20, 20]}>
                        <motion.img
                          variants={nextPageImg}
                          exit="exit"
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
                      </Parallax>
                    </div>
                  </Link>
                </div>
                <motion.div
                  variants={nextPage}
                  exit="exit"
                  className={`twists-go`}
                >
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
                </motion.div>
              </div>

              <div className=" weaves">
                <motion.div
                  variants={nextPage}
                  exit="exit"
                  className="weaves-num"
                >
                  3 <span>- 4</span>
                </motion.div>

                <motion.div
                  variants={nextPageFont}
                  exit="exit"
                  className="weaves-type"
                >
                  <h1
                    onMouseEnter={() => {
                      setEnterWeaves(true);
                    }}
                    onMouseLeave={() => {
                      setEnterWeaves(false);
                    }}
                  >
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

                <div className={`weaves-container `}>
                  <Link to="/weaves/newIn">
                    <div className={`shrinker ${enterWeaves ? "shrink" : ""}`}>
                      <Parallax y={[-20, 20]}>
                        <motion.img
                          variants={nextPageImg}
                          exit="exit"
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
                      </Parallax>
                    </div>
                  </Link>
                </div>
                <motion.div
                  variants={nextPage}
                  exit="exit"
                  className={`weaves-go`}
                >
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
                </motion.div>
              </div>

              <div className=" braids">
                <motion.div
                  variants={nextPage}
                  exit="exit"
                  className="braids-num"
                >
                  4 <span>- 4</span>
                </motion.div>

                <motion.div
                  variants={nextPageFont}
                  exit="exit"
                  className="braids-type"
                >
                  <h1
                    onMouseEnter={() => {
                      setEnterBraids(true);
                    }}
                    onMouseLeave={() => {
                      setEnterBraids(false);
                    }}
                  >
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

                <div className={`braids-container `}>
                  <Link to="/braids/newIn">
                    <div className={`shrinker ${enterBraids ? "shrink" : ""}`}>
                      <Parallax y={[-20, 20]}>
                        <motion.img
                          variants={nextPageImg}
                          exit="exit"
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
                      </Parallax>
                    </div>
                  </Link>
                </div>
                <motion.div
                  variants={nextPage}
                  exit="exit"
                  className={`braids-go`}
                >
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
