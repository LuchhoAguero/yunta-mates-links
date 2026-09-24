/**
 * FloatingParticle.jsx — Pequeñas partículas circulares que flotan.
 */
import { motion } from "framer-motion";

export default function FloatingParticle({ x, y, size = 3, delay = 0, reduced }) {
  const style = {
    position: "absolute",
    left: x,
    top: y,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    background: "rgba(74, 153, 84, 0.5)",
    opacity: 0.18,
  };

  const animate = reduced
    ? {}
    : {
        y: [0, -22, 0],
        opacity: [0.1, 0.25, 0.1],
        scale: [1, 1.3, 1],
      };

  const transition = {
    duration: 5 + delay * 0.6,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  };

  return (
    <motion.div
      style={style}
      className="floating-element"
      animate={animate}
      transition={reduced ? {} : transition}
    />
  );
}
