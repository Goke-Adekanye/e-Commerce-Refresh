import React from "react";
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useMobileNav = () => {
  const show = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mobile-nav",
          start: "top center",
          end: "bottom bottom",
        },
      })
      .to(".mobile-nav", 1.6, { x: 0, ease: Power2.easeInOut })
      .staggerTo(
        [
          ".mobile-locs",
          ".mobile-twists",
          ,
          ".mobile-weaves",
          ".mobile-braids",
        ],
        1.5,
        { opacity: 1, y: 0, ease: Power2.easeInOut, delay: "-0.5" },
        0.2
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mobile-nav",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".overlay2", 1.6, {
        width: "100vw",
        opacity: "1",
        visibility: "visible",
        right: "0",
        ease: Power2.easeInOut,
      });
  };
  const hide = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mobile-nav",
          start: "top center",
          end: "bottom bottom",
        },
      })
      .staggerTo(
        [
          ".mobile-locs",
          ".mobile-twists",
          ,
          ".mobile-weaves",
          ".mobile-braids",
        ],
        1.5,
        { y: -40, opacity: 0, ease: Power2.easeInOut },
        0.2
      )
      .to(".mobile-nav", 1.6, {
        x: "100vw",
        ease: Power2.easeInOut,
        delay: "-0.5",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mobile-nav",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".overlay2", 2, {
        opacity: "0",
        ease: Power2.easeInOut,
        delay: "2",
      })
      .to(".overlay2", 0, {
        visibility: "hidden",
      });
  };

  return [() => show(), () => hide()];
};

export default useMobileNav;
