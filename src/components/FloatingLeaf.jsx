/**
 * FloatingLeaf.jsx — Hoja de yerba mate construida en SVG puro.
 */
import { motion } from "framer-motion";

export default function FloatingLeaf({ x, y, scale = 1, delay = 0, reduced }) {
  const style = {
    position: "absolute",
    left: x,
    top: y,
    opacity: 0.12,
    transform: `scale(${scale})`,
    transformOrigin: "center",
  };

  const animate = reduced
    ? {}
    : {
        y: [0, -18, 0],
        rotate: [-6, 6, -6],
        opacity: [0.1, 0.16, 0.1],
      };

  const transition = {
    duration: 7 + delay * 0.8,
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
    >
      {/* Hoja de yerba mate simplificada en SVG */}
      <svg
        width="48"
        height="64"
        viewBox="0 0 48 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nervadura central */}
        <path
          d="M24 60 C24 60 20 40 18 24 C16 8 24 4 24 4 C24 4 32 8 30 24 C28 40 24 60 24 60Z"
          fill="rgba(45, 106, 51, 0.7)"
        />
        {/* Lóbulo izquierdo */}
        <path
          d="M24 10 C24 10 8 14 6 28 C4 38 12 46 24 48 C24 48 16 36 18 24 C19.5 15 24 10 24 10Z"
          fill="rgba(45, 106, 51, 0.55)"
        />
        {/* Lóbulo derecho */}
        <path
          d="M24 10 C24 10 40 14 42 28 C44 38 36 46 24 48 C24 48 32 36 30 24 C28.5 15 24 10 24 10Z"
          fill="rgba(45, 106, 51, 0.55)"
        />
        {/* Nervaduras secundarias */}
        <path d="M24 20 L14 30" stroke="rgba(168,213,162,0.25)" strokeWidth="0.8" />
        <path d="M24 28 L12 36" stroke="rgba(168,213,162,0.25)" strokeWidth="0.8" />
        <path d="M24 20 L34 30" stroke="rgba(168,213,162,0.25)" strokeWidth="0.8" />
        <path d="M24 28 L36 36" stroke="rgba(168,213,162,0.25)" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
}
