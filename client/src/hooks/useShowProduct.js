import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const useShowProduct = () => {
  gsap.config({
    nullTargetWarn: false,
  });
  const showImage = () => {
    // Animation 11
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top center",
          end: "bottom top",
        },
      })
      .to("body", 0, {
        overflow: "hidden",
      })
      .to(".product_overlay", 2, {
        x: "-100%",
        opacity: "1",
        ease: Power2.easeInOut,
      })
      .to(".load-more-container", 1, {
        opacity: "1",
        ease: Power2.easeInOut,
      })
      .to("body", 0, {
        overflow: "unset",
      });
  };
  return [() => showImage()];
};

export default useShowProduct;
