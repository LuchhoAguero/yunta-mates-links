<div align="center">

<img src="public/logo.png" alt="Yunta Mates Logo" width="120" />

# Yunta Mates — Landing Page

*El mate nos encuentra.*

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Landing page de Yunta Mates — tienda de mates artesanales con envíos a todo el país y retiro gratis en zona este de Mendoza.

[🌐 Ver en vivo](https://yuntamates.com) · [📸 Instagram](https://instagram.com/yuntamates_) · [💬 WhatsApp](https://wa.me/5492634621194)

</div>

---

## ✨ Características

- **Diseño mobile-first** — pensado para usuarios de Instagram en celular
- **Fondo animado** con productos flotantes (mate, yerba, canasta) usando Framer Motion
- **Glassmorphism card** — tarjeta central con blur, borde sutil y sombra suave
- **Logo real de marca** — isotipo circular recortado con precisión
- **Botones de acción directa** — tienda, WhatsApp Lucho, WhatsApp Marti
- **Acordeón de retiro** — puntos de retiro accesibles y editables
- **Accesibilidad completa** — HTML semántico, `aria-expanded`, `focus-visible`, `prefers-reduced-motion`
- **Imágenes WebP** — optimizadas, hasta 87% más livianas que los PNG originales
- **Sin backend** — 100% estático, listo para Vercel / Netlify / GitHub Pages

---

## 🗂️ Estructura del proyecto

```
arbol-yunta/
├── public/
│   ├── logo.png / logo.webp          # Logo original y versión WebP
│   ├── mateytermo.webp               # Imagen de fondo — mate + termo
│   ├── yerbas.webp                   # Imagen de fondo — paquete de yerba
│   ├── canasta.webp                  # Imagen de fondo — canasta matera
│   ├── favicon.ico                   # Favicon para navegadores
│   └── apple-touch-icon.png          # Ícono para iOS
├── src/
│   ├── links.js                      # ⚙️  Config central de enlaces y retiro
│   ├── App.jsx                       # Componente raíz — landing completa
│   ├── index.css                     # Sistema de diseño (tokens CSS, clases)
│   ├── main.jsx                      # Entry point React
│   └── components/
│       ├── SceneBackground.jsx       # Fondo con productos flotantes
│       ├── LinkButton.jsx            # Botón/enlace reutilizable
│       └── PickupAccordion.jsx       # Acordeón accesible de retiro
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Configuración rápida

### Cambiar enlaces, números o puntos de retiro

Abrí **`src/links.js`** — es el **único archivo que necesitás editar**:

```js
export const LINKS = {
  store:         "https://yuntamates.com",
  whatsappLucho: "https://wa.me/5492634621194",   // ← número de Lucho
  whatsappMarti: "https://wa.me/5492634673921",   // ← número de Marti
  instagram:     "https://instagram.com/yuntamates_",
};

export const PICKUP_LOCATIONS = [
  "Almirante Brown 176, centro de San Martín, Mendoza",
  "Calle Irrazabal s/n, Alto Verde (entrega inmediata)",
  "Calle Santa Cruz, Ing. Giagnoni",
  "Coordinamos tu punto por WhatsApp",
];
```

### Cambiar imágenes de fondo o sus posiciones

Editá **`src/components/SceneBackground.jsx`**. Las constantes `DESKTOP_ELEMENTS` y `MOBILE_ELEMENTS` controlan cada imagen flotante: posición (`x`, `y`), tamaño (`size`), opacidad y animación.

---

## 🚀 Instalación y desarrollo

### Requisitos

- Node.js 20+
- npm 10+

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/arbol-yunta.git
cd arbol-yunta

# Instalar dependencias
npm install

# Servidor de desarrollo (hot reload)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | UI components |
| [Vite](https://vitejs.dev/) | 8.x | Build tool + dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | 4.x | Design tokens + utilities |
| [Framer Motion](https://www.framer.com/motion/) | latest | Animaciones de entrada y fondo |
| [Lucide React](https://lucide.dev/) | latest | Íconos (Store, Truck, MapPin…) |

> **Tailwind v4**: usa `@tailwindcss/vite` directamente. No hay `tailwind.config.js` ni `postcss.config.js`.

---

## 📦 Optimización de imágenes

Las imágenes de fondo se convirtieron a **WebP con canal alpha** para eliminar el fondo blanco sin necesidad de CSS tricks:

| Imagen | PNG original | WebP optimizado | Ahorro |
|---|---|---|---|
| `logo` | 28 KB | 9 KB | **-68%** |
| `mateytermo` | 118 KB | 31 KB | **-74%** |
| `yerbas` | 985 KB | 136 KB | **-86%** |
| `canasta` | 2.6 MB | 358 KB | **-86%** |

---

## ♿ Accesibilidad

- HTML semántico: `<main>`, `<header>`, `<section>`, `<footer>`
- Acordeón con `aria-expanded` y `aria-controls`
- `focus-visible` en todos los elementos interactivos
- `prefers-reduced-motion`: si el usuario lo activa, las animaciones del fondo se detienen
- Contraste AA en todos los textos

---

## 📄 Licencia

MIT © [Yunta Mates](https://yuntamates.com)

---

<div align="center">

*Hecho para compartir buenos mates.* 🧉

</div>
