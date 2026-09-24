/**
 * FloatingMate.jsx — Silueta de mate + bombilla en SVG puro.
 */
import { motion } from "framer-motion";

export default function FloatingMate({ x, y, delay = 0, reduced }) {
  const style = {
    position: "absolute",
    left: x,
    top: y,
    opacity: 0.09,
  };

  const animate = reduced
    ? {}
    : {
        y: [0, -12, 0],
        rotate: [-3, 3, -3],
        opacity: [0.07, 0.12, 0.07],
      };

  const transition = {
    duration: 9 + delay,
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
      <svg
        width="56"
        height="80"
        viewBox="0 0 56 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bombilla — caño */}
        <rect
          x="26"
          y="2"
          width="4"
          height="36"
          rx="2"
          fill="rgba(184, 145, 58, 0.6)"
        />
        {/* Bombilla — cabeza/colador */}
        <ellipse
          cx="28"
          cy="38"
          rx="5"
          ry="3"
          fill="rgba(184, 145, 58, 0.7)"
        />
        {/* Cuerpo del mate */}
        <path
          d="M10 44 C10 36 18 32 28 32 C38 32 46 36 46 44 L44 62 C44 68 37 74 28 74 C19 74 12 68 12 62 Z"
          fill="rgba(74, 48, 24, 0.65)"
        />
        {/* Cuello del mate */}
        <path
          d="M18 36 C18 33 22 31 28 31 C34 31 38 33 38 36 L40 44 C40 44 34 40 28 40 C22 40 16 44 16 44 Z"
          fill="rgba(90, 58, 28, 0.5)"
        />
        {/* Brillo lateral */}
        <path
          d="M16 48 C15 56 16 64 18 68"
          stroke="rgba(212, 169, 74, 0.2)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Línea de textura */}
        <path
          d="M14 52 Q28 48 42 52"
          stroke="rgba(168, 213, 162, 0.08)"
          strokeWidth="1"
        />
        <path
          d="M13 60 Q28 56 43 60"
          stroke="rgba(168, 213, 162, 0.08)"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
}
