import { useState } from "react";
import { Power2, gsap } from "gsap";
import "../pages/productDetails/style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCart = () => {
  const [showCart, setShowCart] = useState(false);

  function show() {
    // Animation 13
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".card-container", 2.2, {
        x: "0vw",
        left: "0",
        ease: Power2.easeInOut,
      });
    // Animation 14
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".cart-overlay", 1.6, {
        width: "100vw",
        opacity: "1",
        visibility: "visible",
        right: "0",
        ease: Power2.easeInOut,
      });
  }

  function hide() {
    // Animation 15
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".card-container", 1.4, {
        x: "-100vw",
        left: "0",
        ease: Power2.easeInOut,
      });
    // Animation 16
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".cart-overlay", 2, {
        opacity: "0",
        ease: Power2.easeInOut,
      })
      .to(".cart-overlay", 0, {
        visibility: "hidden",
      });
  }

  return [
    showCart ? show() : hide(),
    () => setShowCart(true),
    () => setShowCart(false),
  ];
};

export default useCart;
