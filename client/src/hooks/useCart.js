import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCart = () => {
  gsap.config({
    nullTargetWarn: false,
  });
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
      .to(".card-container", 1.6, {
        x: "0vw",
        left: "0",
        ease: Power2.easeInOut,
      })
      .to("body", 0, {
        overflow: "hidden",
        pointerEvents: "none",
      })
      .to(".card-main", 1.6, {
        y: "0vw",
        opacity: "1",
        ease: Power2.easeInOut,
        delay: "-0.5",
      })

      .call(() => {
        window.scrollTo(0, 0);
      })
      .to("body", 0, {
        pointerEvents: "unset",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })
      .to(".overlay", 0, {
        zIndex: "5",
      })
      .to(".overlay", 1.5, {
        opacity: "1",
        right: "0",
        ease: Power2.easeInOut,
      })
      .to(".nav", 0, {
        opacity: "0",
        zIndex: "6",
      })
      .to(".nav", 2, {
        opacity: "1",
        position: "fixed",
        top: "0rem",
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
      .to(".nav", 0, {
        position: "relative",
      })
      .to("body", 0, {
        pointerEvents: "none",
      })
      .to(".card-main", 1.4, {
        y: "10vw",
        opacity: "0",
        ease: Power2.easeInOut,
      })
      .to(".card-container", 1.4, {
        x: "-100vw",
        left: "0",
        ease: Power2.easeInOut,
      })
      .to(".overlay", 2, {
        opacity: "0",
        ease: Power2.easeInOut,
        delay: "-1.3",
      })
      .to(".overlay", 0, {
        zIndex: "-1",
      })
      .to(".nav", 0, {
        zIndex: "3",
      })
      .to("body", 0, {
        overflow: "unset",
        pointerEvents: "unset",
      });
  }

  return [() => show(), () => hide()];
};

export default useCart;
