import React, { useState } from "react";
import { TimelineLite, TweenLite, Power2 } from "gsap";
import * as ScrollMagic from "scrollmagic";

const useCart = () => {
  const [showCart, setShowCart] = useState(false);
  const scrollController = new ScrollMagic.Controller();
  const tl7 = new TimelineLite();

  function show() {
    const Animation8 = TweenLite.to(".card-container", 1.4, {
      x: "0vw",
      left: "0",
      ease: Power2.easeInOut,
    });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".container",
      triggerHook: 0,
      reverse: false,
    })
      .setTween(Animation8)
      .addTo(scrollController);

    const Animation9 = TweenLite.to(".cart-overlay", 1.4, {
      width: "100vw",
      opacity: "1",
      visibility: "visible",
      right: "0",
      ease: Power2.easeInOut,
    });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".container",
      triggerHook: 0,
      reverse: false,
    })
      .setTween(Animation9)
      .addTo(scrollController);
  }

  function hide() {
    const Animation10 = TweenLite.to(".card-container", 1.4, {
      x: "-100vw",
      left: "0",
      ease: Power2.easeInOut,
    });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".container",
      triggerHook: 0,
      reverse: false,
    })
      .setTween(Animation10)
      .addTo(scrollController);

    const Animation11 = tl7
      .to(".cart-overlay", 1.0, {
        opacity: "0",
        ease: Power2.easeInOut,
      })
      .to(".cart-overlay", 0, {
        visibility: "hidden",
      });
    new ScrollMagic.Scene({
      duration: 0,
      triggerElement: ".container",
      triggerHook: 0,
      reverse: false,
    })
      .setTween(Animation11)
      .addTo(scrollController);
  }

  return [
    showCart ? show() : hide(),
    () => setShowCart(true),
    () => setShowCart(false),
  ];
};

export default useCart;
