import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const useHideMask = () => {
  gsap.config({
    nullTargetWarn: false,
  });
  const hideMask = () => {
    // Animation 11
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })

      .to(".mask", 2, {
        width: "0vw",
        left: "0",
        position: "fixed",
        zIndex: 4,
        ease: Power2.easeInOut,
      })
      .to("body", 0, {
        overflow: "unset",
      })
      .to(".mask", 0, {
        width: "0vw",
        left: "0",
        position: "fixed",
        zIndex: 4,
        ease: Power2.easeInOut,
      });
  };
  const nextPageMask = {
    exit: {
      width: "100vw",
      left: "0",
      position: "fixed",
      zIndex: "9",
      transition: { delay: 0.5, duration: 2, ease: Power2.easeInOut },
    },
  };
  return [() => hideMask(), nextPageMask];
};

export default useHideMask;
