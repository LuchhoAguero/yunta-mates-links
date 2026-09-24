/**
 * SceneBackground.jsx
 * Fondo decorativo animado con imágenes reales de productos Yunta Mates.
 *
 * Estrategia de layout:
 *  - DESKTOP: productos en los costados izquierdo y derecho (donde hay espacio)
 *  - MOBILE:  productos arriba y abajo de la card (los únicos espacios libres)
 *
 * pointer-events: none — nunca bloquea clics.
 * Respeta prefers-reduced-motion.
 */
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ── Hook: detectar mobile (< 768 px) ────────────────────────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

/* ──────────────────────────────────────────────────────────────
   DESKTOP — productos en costados (la card tiene máx 420px centrada)
────────────────────────────────────────────────────────────── */
const DESKTOP_ELEMENTS = [
  {
    id: "d-mate-1",
    src: "/mateytermo.webp",
    x: "-4%", y: "8%", size: 220,
    rotate: -8, delay: 0, driftY: -22, driftRotate: 5, opacity: 0.38,
  },
  {
    id: "d-mate-2",
    src: "/mateytermo.webp",
    x: "80%", y: "50%", size: 175,
    rotate: 14, delay: 2.5, driftY: -14, driftRotate: -4, opacity: 0.30,
  },
  {
    id: "d-yerbas-1",
    src: "/yerbas.webp",
    x: "72%", y: "2%", size: 200,
    rotate: 10, delay: 1.2, driftY: -18, driftRotate: -3, opacity: 0.28,
  },
  {
    id: "d-yerbas-2",
    src: "/yerbas.webp",
    x: "-7%", y: "62%", size: 165,
    rotate: -12, delay: 3.5, driftY: -12, driftRotate: 4, opacity: 0.22,
  },
  {
    id: "d-canasta-1",
    src: "/canasta.webp",
    x: "64%", y: "74%", size: 180,
    rotate: 6, delay: 0.8, driftY: -16, driftRotate: -6, opacity: 0.32,
  },
  {
    id: "d-canasta-2",
    src: "/canasta.webp",
    x: "26%", y: "-6%", size: 145,
    rotate: -15, delay: 4.0, driftY: -10, driftRotate: 5, opacity: 0.20,
  },
];

/* ──────────────────────────────────────────────────────────────
   MOBILE — productos en zonas superiores e inferiores de la card.
   La card empieza ~60px desde arriba y termina ~60px antes del footer.
   Pantalla típica: 390×844px. Card: ~340px wide × ~560px tall.

   Zonas libres en mobile:
     • Arriba de la card: y 0% – 8%  (aprox 0–67px)
     • Abajo de la card: y 82% – 100% (aprox 693–844px)
     • Esquinas que asoman: muy poca área lateral

   Elegimos imágenes pequeñas (110–150px) con alta opacity
   para que sean claramente visibles.
────────────────────────────────────────────────────────────── */
const MOBILE_ELEMENTS = [
  /* ── ARRIBA — izquierda ──────────────── */
  {
    id: "m-mate-top-left",
    src: "/mateytermo.webp",
    x: "-2%", y: "1%", size: 130,
    rotate: -10, delay: 0, driftY: -10, driftRotate: 4, opacity: 0.60,
  },
  /* ── ARRIBA — derecha ────────────────── */
  {
    id: "m-yerbas-top-right",
    src: "/yerbas.webp",
    x: "58%", y: "-1%", size: 145,
    rotate: 12, delay: 1.0, driftY: -8, driftRotate: -3, opacity: 0.55,
  },
  /* ── ABAJO — izquierda ───────────────── */
  {
    id: "m-canasta-bottom-left",
    src: "/canasta.webp",
    x: "-3%", y: "80%", size: 135,
    rotate: -8, delay: 0.5, driftY: -10, driftRotate: 5, opacity: 0.58,
  },
  /* ── ABAJO — derecha ─────────────────── */
  {
    id: "m-mate-bottom-right",
    src: "/mateytermo.webp",
    x: "60%", y: "78%", size: 125,
    rotate: 10, delay: 1.8, driftY: -8, driftRotate: -4, opacity: 0.52,
  },
  /* ── Asoma por lado derecho — medio ──── */
  {
    id: "m-yerbas-side-right",
    src: "/yerbas.webp",
    x: "78%", y: "38%", size: 110,
    rotate: 18, delay: 2.8, driftY: -12, driftRotate: -3, opacity: 0.40,
  },
];

/* ── Componente de elemento flotante ─────────────────────────── */
function FloatingProduct({
  src, alt = "", x, y, size,
  rotate, delay, driftY, driftRotate, opacity, reduced, isMobile,
}) {
  /* En mobile: sin filter para conservar colores reales */
  const filter = isMobile
    ? "saturate(0.95) brightness(0.9)"
    : "saturate(0.82) brightness(0.82)";

  const baseStyle = {
    position: "absolute",
    left: x,
    top: y,
    width: `${size}px`,
    pointerEvents: "none",
    willChange: "transform, opacity",
    filter,
  };

  if (reduced) {
    return (
      <div style={{ ...baseStyle, opacity }}>
        <img
          src={src}
          alt={alt}
          width={size}
          style={{ display: "block", maxWidth: "100%" }}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <motion.div
      style={baseStyle}
      initial={{ opacity: 0, rotate, y: 0 }}
      animate={{
        opacity: [opacity * 0.72, opacity, opacity * 0.72],
        y: [0, driftY, 0],
        rotate: [rotate, rotate + driftRotate, rotate],
      }}
      transition={{
        duration: 7 + delay * 0.85,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        style={{ display: "block", maxWidth: "100%" }}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}

/* ── Componente principal ────────────────────────────────────── */
export default function SceneBackground() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  const elements = isMobile ? MOBILE_ELEMENTS : DESKTOP_ELEMENTS;

  return (
    <div
      className="scene-bg"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {elements.map((el) => (
        <FloatingProduct
          key={el.id}
          {...el}
          reduced={reduced}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}
