/**
 * LinkButton.jsx — Botón/enlace principal reutilizable de la landing.
 */
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function LinkButton({
  href,
  icon: Icon,
  label,
  sublabel,
  variant = "default",
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`btn-main${variant === "store" ? " btn-main--store" : ""}`}
      whileTap={{ scale: 0.975 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {Icon && (
        <span className="btn-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} />
        </span>
      )}

      <span style={{ flex: 1, textAlign: "left" }}>
        <span style={{ display: "block", fontWeight: 500 }}>{label}</span>
        {sublabel && (
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              opacity: 0.55,
              marginTop: "1px",
            }}
          >
            {sublabel}
          </span>
        )}
      </span>

      <span className="btn-chevron" aria-hidden="true">
        <ChevronRight size={16} strokeWidth={2} />
      </span>
    </motion.a>
  );
}
