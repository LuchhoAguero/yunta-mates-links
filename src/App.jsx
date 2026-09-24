/**
 * App.jsx — Landing principal de Yunta Mates.
 *
 * Para cambiar los enlaces o puntos de retiro, editá src/links.js.
 */
import { motion } from "framer-motion";
import { Store, MessageCircle, Truck } from "lucide-react";

import { LINKS } from "./links.js";
import SceneBackground from "./components/SceneBackground";
import LinkButton from "./components/LinkButton";
import PickupAccordion from "./components/PickupAccordion";

/* Instagram SVG — no incluido en esta versión de lucide-react */
function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ── Variantes de animación de entrada ──────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

/* ── Componente principal ───────────────────────────────────── */
export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Fondo con imágenes flotantes */}
      <SceneBackground />

      {/* Layout centrado */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(1.25rem, 5vw, 2.5rem) clamp(1rem, 4vw, 1.5rem)",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "100%", maxWidth: "420px" }}
        >
          {/* ── CARD GLASSMORPHISM ──────────────────────────── */}
          <main
            className="glass-card"
            style={{
              borderRadius: "24px",
              padding: "clamp(1.75rem, 6vw, 2.5rem) clamp(1.25rem, 5vw, 2rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* ── HEADER ──────────────────────────────────── */}
            <motion.header
              variants={itemVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.85rem",
                textAlign: "center",
              }}
            >
              {/* Logo real — zoom para mostrar solo el círculo interior,
                   recortando el fondo verde exterior */}
              <div
                style={{
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  overflow: "hidden",
                  /* sin border: el propio círculo blanco del logo hace de marco */
                  boxShadow: "0 0 0 5px rgba(107, 143, 94, 0.12), 0 4px 24px rgba(0,0,0,0.45)",
                  flexShrink: 0,
                  /* centrar el img escalado */
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/logo.webp"
                  alt="Yunta Mates — logo"
                  width={104}
                  height={104}
                  style={{
                    display: "block",
                    /* scale(1.28): recorta el anillo verde exterior
                       El círculo blanco ocupa ~78% del imagen (500px),
                       1 / 0.78 ≈ 1.28 llena exactamente el contenedor */
                    width: "128%",
                    height: "128%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Título y tagline */}
              <div>
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.7rem, 6vw, 2.1rem)",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  Yunta Mates
                </h1>
                <p
                  className="font-display"
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(0.88rem, 3.4vw, 1rem)",
                    color: "var(--color-text-secondary)",
                    marginTop: "0.35rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  El mate nos encuentra.
                </p>
              </div>

              {/* Badge */}
              <div className="badge">
                <Truck size={13} strokeWidth={2} aria-hidden="true" />
                Envíos a todo el país  y retiro gratis en zona este  de mendoza
              </div>
            </motion.header>

            {/* ── SEPARADOR ───────────────────────────────── */}
            <motion.div
              variants={itemVariants}
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(107,143,94,0.28), transparent)",
              }}
              aria-hidden="true"
            />

            {/* ── BOTONES ──────────────────────────────────── */}
            <motion.section
              variants={itemVariants}
              aria-label="Accesos directos"
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              <LinkButton
                href={LINKS.store}
                icon={Store}
                label="Conocé nuestra tienda"
                sublabel="yuntamates.com"
                variant="store"
              />
              <LinkButton
                href={LINKS.whatsappLucho}
                icon={MessageCircle}
                label="WhatsApp · Lucho"
                sublabel="Consultas y pedidos"
              />
              <LinkButton
                href={LINKS.whatsappMarti}
                icon={MessageCircle}
                label="WhatsApp · Marti"
                sublabel="Consultas y pedidos"
              />
            </motion.section>

            {/* ── ACORDEÓN RETIRO ──────────────────────────── */}
            <motion.section variants={itemVariants} aria-label="Retiro gratuito">
              <PickupAccordion />
            </motion.section>
          </main>

          {/* ── FOOTER ────────────────────────────────────── */}
          <motion.footer
            variants={itemVariants}
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.55rem",
              textAlign: "center",
            }}
          >
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Yunta Mates en Instagram — @yuntamates_"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                padding: "0.35rem 0.75rem",
                borderRadius: "8px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-verde-100)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-secondary)")
              }
            >
              <InstagramIcon size={16} />
              @yuntamates_
            </a>

            <p
              style={{
                fontSize: "0.7rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              Hecho para compartir buenos mates. · {year}
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </>
  );
}
