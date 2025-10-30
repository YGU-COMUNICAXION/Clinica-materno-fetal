export const WHATSAPP_NUMBER = "525545358105";
export const WHATSAPP_MESSAGE = "quiero agendar una cita.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}` as const;
