/**
 * links.js — Configuración centralizada de enlaces y contenido editable.
 * Cambiá los valores aquí para actualizar toda la landing.
 */

function whatsappLink(phone, name, pickup = false) {
  const message = pickup
    ? `¡Hola, ${name}! Vi la página de Yunta Mates y quería consultar cómo coordinar un retiro gratis y qué puntos y horarios tienen disponibles.`
    : `¡Hola, ${name}! Vi la página de Yunta Mates y quería consultar por sus productos y las opciones de envío o retiro.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const LINKS = {
  store: "https://yuntamates.com",
  whatsappLucho: whatsappLink("5492634621194", "Lucho"),
  whatsappMarti: whatsappLink("5492634673921", "Marti"),
  pickupLucho: whatsappLink("5492634621194", "Lucho", true),
  pickupMarti: whatsappLink("5492634673921", "Marti", true),
  instagram: "https://instagram.com/yuntamates_",
};

export const PICKUP_LOCATIONS = [
  "Almirante Brown 176, centro de San Martín, Mendoza",
  "Calle Irrazabal s/n, Alto Verde (entrega inmediata)",
  "Calle Santa Cruz, Ing. Giagnoni",
];
