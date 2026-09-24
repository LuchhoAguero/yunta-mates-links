/**
 * BrandMark.jsx — Isotipo abstracto de mate en SVG, creado desde cero.
 * No replica ninguna marca comercial existente.
 */
export default function BrandMark({ size = 72 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Halo exterior sutil */}
      <circle cx="36" cy="36" r="34" stroke="rgba(74,153,84,0.2)" strokeWidth="1" />

      {/* Cuerpo del mate — forma orgánica */}
      <path
        d="M20 34 C20 24 27 18 36 18 C45 18 52 24 52 34 L50 52 C50 58 44 62 36 62 C28 62 22 58 22 52 Z"
        fill="rgba(28, 64, 32, 0.9)"
        stroke="rgba(74, 153, 84, 0.45)"
        strokeWidth="1.2"
      />

      {/* Cuello / boca del mate */}
      <path
        d="M28 26 C28 22 31.5 20 36 20 C40.5 20 44 22 44 26 L45 34 C45 34 41 30 36 30 C31 30 27 34 27 34 Z"
        fill="rgba(45, 106, 51, 0.7)"
      />

      {/* Bombilla — caño */}
      <rect
        x="34"
        y="6"
        width="4"
        height="28"
        rx="2"
        fill="rgba(184, 145, 58, 0.85)"
      />

      {/* Bombilla — cabeza */}
      <ellipse
        cx="36"
        cy="34"
        rx="5"
        ry="3"
        fill="rgba(212, 169, 74, 0.8)"
      />

      {/* Brillo lateral del mate */}
      <path
        d="M26 38 C25 44 26 50 27 54"
        stroke="rgba(168, 213, 162, 0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vaho / vapor (dos líneas curvas encima) */}
      <path
        d="M30 12 Q29 8 31 5"
        stroke="rgba(168, 213, 162, 0.4)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 10 Q35 6 37 3"
        stroke="rgba(168, 213, 162, 0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M42 12 Q41 8 43 5"
        stroke="rgba(168, 213, 162, 0.25)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
