/**
 * PickupAccordion.jsx — Acordeón accesible de puntos de retiro.
 * Anima la apertura/cierre con Framer Motion (height + opacity).
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Check } from "lucide-react";
import { LINKS, PICKUP_LOCATIONS } from "../links.js";
import LinkButton from "./LinkButton";

export default function PickupAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={open}
        aria-controls="pickup-list"
        onClick={() => setOpen((v) => !v)}
      >
        <MapPin
          size={17}
          strokeWidth={1.8}
          style={{ color: "var(--color-verde-300)", flexShrink: 0 }}
          aria-hidden="true"
        />
        <span style={{ flex: 1 }}>Ver puntos de retiro gratis</span>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="acc-chevron"
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="pickup-list"
            className="accordion-content"
            role="region"
            aria-label="Puntos de retiro"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: "0.75rem 1rem 0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
              }}
            >
              {PICKUP_LOCATIONS.map((loc) => (
                <li
                  key={loc}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    style={{
                      color: "var(--color-verde-300)",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  {loc}
                </li>
              ))}
            </ul>
            <div className="pickup-contact">
              <p>Consultar por un retiro</p>
              <p className="pickup-help">Coordiná el punto y el horario por WhatsApp con cualquiera de los dos.</p>
              <LinkButton href={LINKS.pickupLucho} label="Consultar con Lucho" />
              <LinkButton href={LINKS.pickupMarti} label="Consultar con Marti" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
