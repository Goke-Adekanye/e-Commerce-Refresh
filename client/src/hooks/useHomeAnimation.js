import { Power1, Power2, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHomeAnimation = () => {
  const show = () => {
    ScrollTrigger.defaults({
      toggleActions: "play none none none",
      markers: false,
    });

    // Animation 1
    gsap
      .timeline()
      .to("body", 0, {
        overflow: "hidden",
      })
      .to(".container", 1, { css: { visibility: "visible" } })
      .to(".welcome-text h3", 0.1, { css: { mixBlendMode: "difference" } })
      .from([".welcome-text h3"], 1.4, {
        opacity: "0",
        transform: "scale(1.4)",
        ease: Power2.easeInOut,
        reversed: false,
      })
      .to(".mask", 1.4, {
        width: "0%",
        left: "0",
        zIndex: "4",
        ease: Power2.easeInOut,
      })
      .to(".mask-revealer", 3, {
        height: "0rem",
        ease: Power2.easeInOut,
        delay: "-1",
      })
      .to("body", 0, {
        overflow: "unset",
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
        ".categories-top h1",
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
      )
      .from(".headTitle", 2, {
        opacity: 0,
        ease: Power3.easeOut,
      });

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
      .from(".shrinker-locs", 1.0, {
        opacity: "0",
        y: "100",
        ease: Power1.easeInOut,
      })
      .from([".locs-write", ".locs-shop"], 1.0, {
        opacity: "0",
        ease: Power2.easeOut,
        delay: 0.3,
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
      .from(".shrinker-twists", 1.0, {
        opacity: "0",
        y: "100",
        ease: Power1.easeInOut,
      })
      .from([".twists-write", ".twists-shop"], 1.0, {
        opacity: "0",

        ease: Power2.easeOut,
        delay: 0.3,
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
      .from(".shrinker-weaves", 1.0, {
        opacity: "0",
        y: "100",
        ease: Power1.easeInOut,
      })
      .from([".weaves-write", ".weaves-shop"], 1.0, {
        opacity: "0",

        ease: Power2.easeOut,
        delay: 0.3,
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
      .from(".shrinker-braids", 1.0, {
        opacity: "0",
        y: "100",
        ease: Power1.easeInOut,
      })
      .from([".braids-write", ".braids-shop"], 1.0, {
        opacity: "0",
        ease: Power2.easeOut,
        delay: 0.3,
      });
  };
  //Ease
  const transition = { duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9] };

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
      zIndex: "9",
      transition: { delay: 2.5, duration: 2, ease: Power2.easeInOut },
    },
  };
  const letter = {
    exit: {
      y: 400,
      transition: { duration: 0.5, ...transition },
    },
  };

  return [() => show(), letter, nextPageMask, nextPage, nextPageFont];
};

export default useHomeAnimation;
